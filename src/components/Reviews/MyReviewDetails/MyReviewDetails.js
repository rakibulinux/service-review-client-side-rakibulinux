import React, { useState } from "react";
import toast from "react-hot-toast";
import UpdateReview from "../UpdateReview/UpdateReview";

const MyReviewDetails = ({ review, setMyUserReviews, myUserReviews }) => {
  const [deleteReview, setDeleteReview] = useState([]);
  const { _id, img, name, description, title } = review;
  const [newDes, setNewDes] = useState({
    description: description,
  });

  const handleDelete = (id) => {
    const proceed = window.confirm(
      `Are you sure, do you want to remove ${title} comment?`
    );
    if (proceed) {
      fetch(`https://service-review-gamma.vercel.app/myreviews/${id}`, {
        method: "DELETE",
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        // },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Deleted successfully");
            const remainingReview = deleteReview.filter(
              (review) => review._id !== id
            );
            setDeleteReview(remainingReview);
          }
        });
    }
  };

  const handleReviewUpdate = (id) => {
    fetch(`https://service-review-gamma.vercel.app/myreviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ description: newDes }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = myUserReviews.filter((review) => review._id !== id);
          const updating = myUserReviews.find((review) => review._id === id);
          updating.description = description;

          const newReviews = [updating, ...remaining];
          toast.success("Review Updated");
          setMyUserReviews(newReviews);
        }
      });
  };

  return (
    <div className="flex shadow-2xl justify-between items-center">
      <div className="flex flex-col gap-4 mt-5 p-5">
        <div>
          <img className="rounded-full h-10 mt-4 ml-3" src={img} alt="" />
        </div>
        <h1>Your Name: {name}</h1>
        <h2>Service Name: {title}</h2>
        <p>Comment: {description}</p>
      </div>
      <div className="m-4 flex items-center justify-center">
        <button
          onClick={() => handleDelete(_id)}
          className="py-3 m-4 text-white font-semibold px-4 bg-green-250 hover:bg-green-350 rounded-3xl"
        >
          Delete
        </button>
        <UpdateReview
          review={review}
          setNewDes={setNewDes}
          newDes={newDes}
          handleReviewUpdate={handleReviewUpdate}
        />
      </div>
    </div>
  );
};

export default MyReviewDetails;
