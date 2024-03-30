import { Rating } from '@mui/material';
import React, { useState } from 'react';

const ReviewComponent = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Process the rating and review data
        console.log('Rating:', rating, 'Review:', review);
        // After processing the review, you might want to reset the form
        setRating(0);
        setReview('');
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Your Rating</label>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                        if (newValue !== null) {
                            setRating(newValue);
                        }
                    }}
                />
            </div>
            <div>
                <label htmlFor="review" className="block text-sm font-medium text-gray-700">Your Review</label>
                <textarea
                    id="review"
                    name="review"
                    rows={4}
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Write your review here..."
                ></textarea>
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Submit Review
            </button>
        </form>
    );
};

export default ReviewComponent;
