<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Models\ScheduledReport;
use App\Models\GeneratedReport;
use App\Http\Controllers\Librarian\ScheduledReportController as LibrarianScheduledController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ScheduledReportController extends Controller
{
    public function index(Request $request)
    {
        $query = ScheduledReport::with(['library:id,name,address', 'user:id,name,email']);

        if ($request->filled('library_id') && $request->library_id !== 'all') {
            $query->where('library_id', $request->library_id);
        }

        if ($request->filled('frequency') && $request->frequency !== 'all') {
            $query->where('frequency', $request->frequency);
        }

        if ($request->filled('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        $scheduled = $query->latest()->get();

        return response()->json([
            'scheduled_reports' => $scheduled->map(function ($s) {
                return [
                    'id' => $s->id,
                    'library_id' => $s->library_id,
                    'library_name' => $s->library ? $s->library->name : 'N/A',
                    'librarian_name' => $s->user ? $s->user->name : 'N/A',
                    'librarian_email' => $s->user ? $s->user->email : 'N/A',
                    'report_type' => $s->report_type,
                    'frequency' => $s->frequency,
                    'format' => $s->format,
                    'recipient_email' => $s->recipient_email,
                    'send_time' => $s->send_time,
                    'status' => $s->status,
                    'last_generated_at' => $s->last_generated_at ? $s->last_generated_at->toDateTimeString() : null,
                    'created_at' => $s->created_at ? $s->created_at->toDateTimeString() : null,
                ];
            }),
        ]);
    }

    public function generatedReports(Request $request)
    {
        $query = GeneratedReport::with(['library:id,name', 'user:id,name,email', 'scheduledReport']);

        if ($request->filled('library_id') && $request->library_id !== 'all') {
            $query->where('library_id', $request->library_id);
        }

        if ($request->filled('frequency') && $request->frequency !== 'all') {
            $query->where('frequency', $request->frequency);
        }

        $reports = $query->latest()->get();

        return response()->json([
            'generated_reports' => $reports->map(function ($r) {
                return [
                    'id' => $r->id,
                    'library_id' => $r->library_id,
                    'library_name' => $r->library ? $r->library->name : 'All Libraries',
                    'librarian_name' => $r->user ? $r->user->name : 'System Automation',
                    'report_title' => $r->report_title,
                    'report_type' => $r->report_type,
                    'frequency' => $r->frequency,
                    'format' => $r->format,
                    'file_path' => $r->file_path,
                    'generatedAt' => $r->created_at ? $r->created_at->format('Y-m-d H:i') : '',
                ];
            }),
        ]);
    }

    public function runNow(ScheduledReport $scheduledReport)
    {
        $library = $scheduledReport->library;
        $user = $scheduledReport->user;

        $generated = LibrarianScheduledController::generateReportFile($scheduledReport, $library, $user);
        $scheduledReport->update(['last_generated_at' => now()]);

        return response()->json([
            'message' => 'Report generated and scheduled for delivery.',
            'generated' => $generated,
        ]);
    }

    public function downloadReport(GeneratedReport $generatedReport)
    {
        if ($generatedReport->file_path && Storage::disk('public')->exists($generatedReport->file_path)) {
            return Storage::disk('public')->download($generatedReport->file_path, basename($generatedReport->file_path));
        }

        return LibrarianScheduledController::streamCsvReport($generatedReport);
    }
}
