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
        <title>Add Review | Order Review</title>
      </Helmet>
      <div className="mt-5">
        {myUserreviews.map((review) => (
          <MyReviewDetails key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
