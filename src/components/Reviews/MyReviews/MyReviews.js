import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../contexts/AuthProvider";
import MyReviewDetails from "../MyReviewDetails/MyReviewDetails";

const MyReviews = () => {
  const [myUserreviews, setMyUserReviews] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://service-review-gamma.vercel.app/myreviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyUserReviews(data));
  }, [user?.email, myUserreviews]);
  console.log(myUserreviews);
  return (
    <div>
      <Helmet>
        <title>My Reviews | Order Review</title>
      </Helmet>
      <div className="mt-5">
        <h2 className="text-3xl text-white text-center font-semibold mb-10 bg-green-250 w-9/12 mx-auto rounded-3xl py-5">
          My Reviews
        </h2>
        {myUserreviews.length > 0 ? (
          <>
            {myUserreviews.map((review) => (
              <MyReviewDetails key={review._id} review={review} />
            ))}
          </>
        ) : (
          <h1 className="ml-5 py-5">
            No review were added for {user?.displayName} user
          </h1>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
