import React, { useEffect, useState } from "react";
import ReviewDetails from "../ReviewDetails/ReviewDetails";

const Reviews = ({ _id }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://service-review-gamma.vercel.app/reviews?service_id=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id, reviews]);
  return (
    <div className="mt-5">
      {reviews.length > 0 ? (
        <>
          {reviews.map((review) => (
            <ReviewDetails key={review._id} review={review} />
          ))}
        </>
      ) : (
        <h1 className="ml-5 py-5">No review were added</h1>
      )}
    </div>
  );
};

export default Reviews;
