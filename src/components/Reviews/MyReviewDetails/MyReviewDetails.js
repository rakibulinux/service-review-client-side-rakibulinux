import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import UpdateReview from "../UpdateReview/UpdateReview";

const MyReviewDetails = ({ review, setMyUserReviews, myUserReviews }) => {
  const [deleteReview, setDeleteReview] = useState([]);
  const { _id, img, name, description, title } = review;
  const [newDes, setNewDes] = useState(description);
  //   const [updateReview, setUpdateReview] = useState([]);
  console.log(myUserReviews);

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
          console.log(data);
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
    console.log("I am here");
    fetch(`http://localhost:5000/myreviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        //     authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify({ description }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(myUserReviews);
          const remaining = myUserReviews.filter((review) => review._id !== id);
          const approving = myUserReviews.find((review) => review._id === id);
          approving.description = description;

          const newReviews = [approving, ...remaining];
          console.log(newReviews);
          setMyUserReviews(newReviews);
        }
      });
  };
  console.log(myUserReviews);

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
        {/* <Link to={`/update-review/${_id}`}>
          <button className="py-3 text-white font-semibold px-4 mr-5 bg-green-250 hover:bg-green-350 rounded-3xl">
            Update
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default MyReviewDetails;

// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import UpdateReview from "../UpdateReview/UpdateReview";

// const MyReviewDetails = ({ review, setMyUserReviews, myUserReviews }) => {
//   const [deleteReview, setDeleteReview] = useState([]);
//   const { _id, img, name, description, title } = review;
//   const [updateReview, setUpdateReview] = useState([]);

//   console.log(deleteReview);
//   const handleDelete = (id) => {
//     const proceed = window.confirm(
//       `Are you sure, do you want to remove ${title} comment?`
//     );
//     if (proceed) {
//       fetch(`https://service-review-gamma.vercel.app/myreviews/${id}`, {
//         method: "DELETE",
//         // headers: {
//         //   authorization: `Bearer ${localStorage.getItem("genius-token")}`,
//         // },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           if (data.deletedCount > 0) {
//             toast.success("Deleted successfully");
//             const remainingReview = deleteReview.filter(
//               (review) => review._id !== id
//             );
//             setDeleteReview(remainingReview);
//           }
//         });
//     }
//   };

//   console.log(updateReview);
//   const handleReviewUpdate = (id) => {
//     fetch(`https://service-review-gamma.vercel.app/myreviews/${id}`, {
//       method: "PATCH",
//       headers: {
//         "content-type": "application/json",
//         //     authorization: `Bearer ${localStorage.getItem("genius-token")}`,
//       },
//       body: JSON.stringify({ description: description }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount > 0) {
//           console.log(data);
//           console.log(description);
//           console.log(myUserReviews);
//           const remaining = myUserReviews.filter((review) => review._id !== id);
//           const approving = myUserReviews.find((review) => review._id === id);
//           approving.description = { description };

//           const newReviews = [approving, ...remaining];
//           console.log(newReviews);
//           setMyUserReviews(newReviews);
//         }
//       });
//   };
//   console.log(updateReview);

//   return (
//     <div className="flex shadow-2xl justify-between items-center">
//       <div className="flex flex-col gap-4 mt-5 p-5">
//         <div>
//           <img className="rounded-full h-10 mt-4 ml-3" src={img} alt="" />
//         </div>
//         <h1>Your Name: {name}</h1>
//         <h2>Service Name: {title}</h2>
//         <p>Comment: {description}</p>
//       </div>
//       <div className="m-4 flex items-center justify-center">
//         <button
//           onClick={() => handleDelete(_id)}
//           className="py-3 m-4 text-white font-semibold px-4 bg-green-250 hover:bg-green-350 rounded-3xl"
//         >
//           Delete
//         </button>
//         <UpdateReview review={review} handleReviewUpdate={handleReviewUpdate} />
//       </div>
//     </div>
//   );
// };

// export default MyReviewDetails;
