<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\ScheduledReport;
use App\Models\GeneratedReport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;

class ScheduledReportController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $library = $user->library;

        if (!$library) {
            return response()->json(['error' => 'No library assigned.'], 403);
        }

        $scheduled = ScheduledReport::where('library_id', $library->id)
            ->with('user:id,name,email')
            ->latest()
            ->get();

        $history = GeneratedReport::where('library_id', $library->id)
            ->with(['user:id,name,email', 'scheduledReport'])
            ->latest()
            ->get();

        return response()->json([
            'scheduled' => $scheduled->map(function ($s) {
                return [
                    'id' => $s->id,
                    'type' => $s->report_type,
                    'frequency' => $s->frequency,
                    'format' => $s->format,
                    'recipient' => $s->recipient_email,
                    'time' => $s->send_time,
                    'status' => $s->status,
                    'last_generated_at' => $s->last_generated_at ? $s->last_generated_at->toDateTimeString() : null,
                    'created_at' => $s->created_at ? $s->created_at->toDateTimeString() : null,
                ];
            }),
            'history' => $history->map(function ($h) {
                return [
                    'id' => $h->id,
                    'name' => $h->report_title,
                    'type' => $h->report_type,
                    'frequency' => $h->frequency,
                    'format' => $h->format,
                    'file_path' => $h->file_path,
                    'generatedAt' => $h->created_at ? $h->created_at->format('Y-m-d H:i') : '',
                ];
            }),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'report_type' => 'required|string',
            'frequency' => 'required|in:daily,weekly,monthly',
            'format' => 'required|string|in:pdf,excel,csv',
            'recipient_email' => 'required|email',
            'send_time' => 'nullable|string',
        ]);

        $user = Auth::user();
        $library = $user->library;

        if (!$library) {
            return response()->json(['error' => 'No library assigned.'], 403);
        }

        $scheduled = ScheduledReport::create([
            'library_id' => $library->id,
            'user_id' => $user->id,
            'report_type' => strtolower($request->report_type),
            'frequency' => $request->frequency,
            'format' => strtolower($request->format),
            'recipient_email' => $request->recipient_email,
            'send_time' => $request->send_time ?: '08:00',
            'status' => 'active',
            'last_generated_at' => now(),
        ]);

        // Generate initial report file for Super Admin and Librarian to view and download
        $generated = self::generateReportFile($scheduled, $library, $user);

        return response()->json([
            'message' => 'Scheduled report automation saved successfully.',
            'scheduled' => $scheduled,
            'generated' => $generated,
        ]);
    }

    public function toggle(ScheduledReport $scheduledReport)
    {
        $user = Auth::user();
        if ($scheduledReport->library_id !== $user->library_id) {
            return response()->json(['error' => 'Unauthorized.'], 403);
        }

        $scheduledReport->status = $scheduledReport->status === 'active' ? 'paused' : 'active';
        $scheduledReport->save();

        return response()->json([
            'message' => 'Schedule status updated.',
            'status' => $scheduledReport->status,
        ]);
    }

    public function destroy(ScheduledReport $scheduledReport)
    {
        $user = Auth::user();
        if ($scheduledReport->library_id !== $user->library_id) {
            return response()->json(['error' => 'Unauthorized.'], 403);
        }

        $scheduledReport->delete();

        return response()->json(['message' => 'Scheduled report entry deleted successfully.']);
    }

    public function downloadReport(GeneratedReport $generatedReport)
    {
        $user = Auth::user();
        if ($generatedReport->library_id !== $user->library_id && !$user->hasRole('super_admin')) {
            return response()->json(['error' => 'Unauthorized access.'], 403);
        }

        if ($generatedReport->file_path && Storage::disk('public')->exists($generatedReport->file_path)) {
            return Storage::disk('public')->download($generatedReport->file_path, basename($generatedReport->file_path));
        }

        // Fallback on-the-fly CSV generation
        return self::streamCsvReport($generatedReport);
    }

    public static function generateReportFile(ScheduledReport $scheduled, $library, $user)
    {
        $type = ucfirst($scheduled->report_type);
        $freq = ucfirst($scheduled->frequency);
        $fileName = "{$library->name}_{$scheduled->report_type}_{$scheduled->frequency}_" . date('Y_m_d_His') . ".csv";
        $filePath = "reports/{$fileName}";

        // Build CSV Content based on real library database metrics
        $csvData = [];
        $csvData[] = ["SMARTLIB AUTOMATED SCHEDULED REPORT"];
        $csvData[] = ["Library:", $library->name];
        $csvData[] = ["Report Type:", $type];
        $csvData[] = ["Frequency:", $freq];
        $csvData[] = ["Recipient Email:", $scheduled->recipient_email];
        $csvData[] = ["Scheduled By:", $user->name];
        $csvData[] = ["Role:", "Librarian"];
        $csvData[] = ["Staff ID:", "ID-" . $user->id];
        $csvData[] = ["Generated At:", now()->toDateTimeString()];
        $csvData[] = []; // Blank separator

        if (in_array(strtolower($scheduled->report_type), ['attendance', 'bookings', 'all'])) {
            $csvData[] = ["STUDENT ATTENDANCE & BOOKING LOGS"];
            $csvData[] = ["Booking ID", "Student Name", "Email", "Seat Number", "Booking Date", "Check-in Time", "Check-out Time", "Status"];

            $bookings = $library->seatBookings()->with('user', 'seat')->latest()->take(50)->get();
            foreach ($bookings as $b) {
                $csvData[] = [
                    $b->id,
                    $b->user ? $b->user->name : 'N/A',
                    $b->user ? $b->user->email : 'N/A',
                    $b->seat ? $b->seat->seat_number : 'N/A',
                    $b->booking_time ? $b->booking_time->format('Y-m-d H:i') : 'N/A',
                    $b->check_in_time ? $b->check_in_time->format('Y-m-d H:i') : 'N/A',
                    $b->check_out_time ? $b->check_out_time->format('Y-m-d H:i') : 'N/A',
                    $b->status,
                ];
            }
        } else {
            $csvData[] = ["SYSTEM INVENTORY & CAPACITY SUMMARY"];
            $csvData[] = ["Total Seats", "Available Seats", "Active Bookings", "Total Books"];
            $csvData[] = [
                $library->seats()->count(),
                $library->seats()->where('status', 'available')->count(),
                $library->seatBookings()->where('status', 'checked_in')->count(),
                $library->books()->count(),
            ];
        }

        $fp = fopen('php://temp', 'r+');
        foreach ($csvData as $row) {
            fputcsv($fp, $row);
        }
        rewind($fp);
        $content = stream_get_contents($fp);
        fclose($fp);

        Storage::disk('public')->put($filePath, $content);

        return GeneratedReport::create([
            'scheduled_report_id' => $scheduled->id,
            'library_id' => $library->id,
            'user_id' => $user->id,
            'report_title' => "{$type} {$freq} Automated Report",
            'report_type' => $scheduled->report_type,
            'frequency' => $scheduled->frequency,
            'format' => $scheduled->format,
            'file_path' => $filePath,
        ]);
    }

    public static function streamCsvReport(GeneratedReport $generatedReport)
    {
        $library = $generatedReport->library;
        $fileName = Str::slug($generatedReport->report_title) . "_" . date('Y_m_d') . ".csv";

        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => "attachment; filename=\"{$fileName}\"",
        ];

        $callback = function () use ($generatedReport, $library) {
            $file = fopen('php://output', 'w');
            $librarianName = $generatedReport->user ? $generatedReport->user->name : 'Librarian';
            $librarianId = $generatedReport->user_id ? "ID-" . $generatedReport->user_id : 'LIB-2';

            fputcsv($file, ["SMARTLIB AUTOMATED SCHEDULED REPORT"]);
            fputcsv($file, ["Report Title:", $generatedReport->report_title]);
            fputcsv($file, ["Library:", $library ? $library->name : 'All Libraries']);
            fputcsv($file, ["Frequency:", ucfirst($generatedReport->frequency)]);
            fputcsv($file, ["Format:", strtoupper($generatedReport->format)]);
            fputcsv($file, ["Scheduled By:", $librarianName]);
            fputcsv($file, ["Role:", "Librarian"]);
            fputcsv($file, ["Staff ID:", $librarianId]);
            fputcsv($file, ["Generated At:", $generatedReport->created_at ? $generatedReport->created_at->toDateTimeString() : now()->toDateTimeString()]);
            fputcsv($file, []);

            fputcsv($file, ["STUDENT ATTENDANCE & BOOKING LOGS"]);
            fputcsv($file, ["Booking ID", "Student Name", "Email", "Seat Number", "Booking Date", "Check-in Time", "Check-out Time", "Status"]);

            if ($library) {
                $bookings = $library->seatBookings()->with('user', 'seat')->latest()->take(50)->get();
                foreach ($bookings as $b) {
                    fputcsv($file, [
                        $b->id,
                        $b->user ? $b->user->name : 'N/A',
                        $b->user ? $b->user->email : 'N/A',
                        $b->seat ? $b->seat->seat_number : 'N/A',
                        $b->booking_time ? $b->booking_time->format('Y-m-d H:i') : 'N/A',
                        $b->check_in_time ? $b->check_in_time->format('Y-m-d H:i') : 'N/A',
                        $b->check_out_time ? $b->check_out_time->format('Y-m-d H:i') : 'N/A',
                        $b->status,
                    ]);
                }
            }

            fclose($file);
        };

        return response()->stream($callback, 200, $headers);
    }
}
