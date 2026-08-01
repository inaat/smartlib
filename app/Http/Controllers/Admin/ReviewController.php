<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Library;
use App\Models\LibraryReview;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index(Request $request)
    {
        $query = LibraryReview::with(['user:id,name,email,profile_picture,crn', 'library:id,name,photo']);

        if ($request->has('library_id') && $request->library_id) {
            $query->where('library_id', $request->library_id);
        }

        if ($request->has('rating') && $request->rating) {
            $query->where('rating', $request->rating);
        }

        if ($request->has('search') && $request->search) {
            $search = strtolower($request->search);
            $query->where(function($q) use ($search) {
                $q->whereHas('user', function($u) use ($search) {
                    $u->whereRaw('LOWER(name) LIKE ?', ["%{$search}%"])
                      ->orWhereRaw('LOWER(crn) LIKE ?', ["%{$search}%"]);
                })->orWhereRaw('LOWER(comment) LIKE ?', ["%{$search}%"]);
            });
        }

        $reviews = $query->latest()->get();

        $total = $reviews->count();
        $average = $total > 0 ? round($reviews->avg('rating'), 1) : 0;

        $breakdown = [
            '5' => $reviews->where('rating', 5)->count(),
            '4' => $reviews->where('rating', 4)->count(),
            '3' => $reviews->where('rating', 3)->count(),
            '2' => $reviews->where('rating', 2)->count(),
            '1' => $reviews->where('rating', 1)->count(),
        ];

        return response()->json([
            'average_rating' => $average,
            'total_reviews' => $total,
            'rating_breakdown' => $breakdown,
            'reviews' => $reviews
        ]);
    }

    public function libraryReviews($libraryId)
    {
        $library = Library::findOrFail($libraryId);

        $reviews = LibraryReview::where('library_id', $library->id)
            ->with('user:id,name,email,profile_picture,crn,ca_level')
            ->latest()
            ->get();

        $total = $reviews->count();
        $average = $total > 0 ? round($reviews->avg('rating'), 1) : 0;

        $breakdown = [
            '5' => $reviews->where('rating', 5)->count(),
            '4' => $reviews->where('rating', 4)->count(),
            '3' => $reviews->where('rating', 3)->count(),
            '2' => $reviews->where('rating', 2)->count(),
            '1' => $reviews->where('rating', 1)->count(),
        ];

        return response()->json([
            'library' => [
                'id' => $library->id,
                'name' => $library->name,
                'average_rating' => $library->average_rating,
                'reviews_count' => $total,
            ],
            'average_rating' => $average,
            'total_reviews' => $total,
            'rating_breakdown' => $breakdown,
            'reviews' => $reviews
        ]);
    }

    public function destroy($id)
    {
        $review = LibraryReview::findOrFail($id);
        $review->delete();

        return response()->json(['message' => 'Review deleted successfully']);
    }
}
