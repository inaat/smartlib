<?php

namespace App\Http\Controllers\Librarian;

use App\Http\Controllers\Controller;
use App\Models\LibraryReview;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        $libraryId = $user->library_id;

        if (!$libraryId && $user->library) {
            $libraryId = $user->library->id;
        }

        if (!$libraryId) {
            return response()->json([
                'average_rating' => 0,
                'total_reviews' => 0,
                'rating_breakdown' => ['5' => 0, '4' => 0, '3' => 0, '2' => 0, '1' => 0],
                'reviews' => []
            ]);
        }

        $reviews = LibraryReview::where('library_id', $libraryId)
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
            'average_rating' => $average,
            'total_reviews' => $total,
            'rating_breakdown' => $breakdown,
            'reviews' => $reviews
        ]);
    }
}
