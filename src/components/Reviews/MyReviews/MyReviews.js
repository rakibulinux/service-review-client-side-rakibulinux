import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../contexts/AuthProvider";
import MyReviewDetails from "../MyReviewDetails/MyReviewDetails";

const MyReviews = () => {
  const [myUserReviews, setMyUserReviews] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://service-review-gamma.vercel.app/myreviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("service-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setMyUserReviews(data));
  }, [user?.email]);
  // console.log(myUserReviews);
  return (
    <div>
      <Helmet>
        <title>My Reviews | Order Review</title>
      </Helmet>
      <div className="mt-5">
        <h2 className="text-3xl text-white text-center font-semibold mb-10 bg-green-250 w-9/12 mx-auto rounded-3xl py-5">
          My Reviews
        </h2>
        {myUserReviews.length > 0 ? (
          <>
            {myUserReviews.map((review) => (
              <MyReviewDetails
                myUserReviews={myUserReviews}
                setMyUserReviews={setMyUserReviews}
                key={review._id}
                review={review}
              />
            ))}
          </>
        ) : (
          <div className="flex justify-center items-center my-52">
            <h1 className="text-3xl text-blue-950 ml-5 py-5">
              No review were added for {user?.displayName} user
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
