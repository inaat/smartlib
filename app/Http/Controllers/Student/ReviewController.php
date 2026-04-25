<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Library;
use App\Models\LibraryReview;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    public function index($libraryId)
    {
        $reviews = LibraryReview::where('library_id', $libraryId)
            ->with('user:id,name,profile_picture')
            ->latest()
            ->get();

        return response()->json($reviews);
    }

    public function store(Request $request, $libraryId)
    {
        $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string|max:1000',
        ]);

        $userId = Auth::id();

        $review = LibraryReview::updateOrCreate(
            ['user_id' => $userId, 'library_id' => $libraryId],
            [
                'rating' => $request->rating,
                'comment' => $request->comment,
            ]
        );

        return response()->json([
            'message' => 'Review submitted successfully',
            'review' => $review->load('user:id,name,profile_picture')
        ]);
    }

    public function destroy($id)
    {
        $review = LibraryReview::where('id', $id)
            ->where('user_id', Auth::id())
            ->firstOrFail();

        $review->delete();

        return response()->json(['message' => 'Review deleted successfully']);
    }
}
