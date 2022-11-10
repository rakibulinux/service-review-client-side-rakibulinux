import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateReview = ({ review, handleReviewUpdate, newDes, setNewDes }) => {
  //   const review = useLoaderData();
  const { _id, description, title } = review;

  //   const handleReviewUpdate = (id) => {
  //     fetch(`http://localhost:5000/myreviews/${id}`, {
  //       method: "PATCH",
  //       //   headers: {
  //       //     "content-type": "application/json",
  //       //     authorization: `Bearer ${localStorage.getItem("genius-token")}`,
  //       //   },
  //       body: JSON.stringify({ description: description }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         console.log(description);

  //         // if (data.modifiedCount > 0) {
  //         //   console.log(data);

  //         //   console.log(myUserReviews);
  //         //   const remaining = myUserReviews.filter((review) => review._id !== id);
  //         //   const approving = myUserReviews.find((review) => review._id === id);
  //         //   approving.description = description;

  //         //   const newReviews = [approving, ...remaining];
  //         //   console.log(newReviews);
  //         //   setMyUserReviews(newReviews);
  //         // }
  //       });
  //   };

  const handleDescriptionChange = (e) => {
    setNewDes({ ...newDes, description: e.target.value });
  };

  return (
    <div>
      {/* The button to open modal */}
      <label
        htmlFor="my-modal"
        className="py-3 text-white font-semibold px-4 mr-5 bg-green-250 border-none hover:bg-green-350 rounded-3xl"
      >
        Update
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-green-250 hover:bg-green-350"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{title}</h3>
          <input type="text" onChange={handleDescriptionChange} />
          {/* <textarea
            className="py-4 bg-gray-300"
            defaultValue={description}
            onChange={handleDescriptionChange}
          ></textarea> */}
          <div className="modal-action">
            <button
              onClick={() => handleReviewUpdate(_id)}
              className="py-3 text-white font-semibold px-4 mr-5 bg-green-250 hover:bg-green-350 rounded-3xl"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;

// import React, { useState } from "react";
// import { useLoaderData } from "react-router-dom";

// const UpdateReview = () => {
//   const review = useLoaderData();
//   const { _id, description, title } = review;
//   const [reviewInfo, setReviewInfo] = useState({
//     description: description,
//   });

//   const handleSubmitReview = (e) => {
//     e.preventDefault();
//     handleReviewUpdate(_id);
//   };

//   const handleDescriptionChange = (e) => {
//     setReviewInfo({ ...reviewInfo, description: e.target.value });
//   };
//   const handleReviewUpdate = (id) => {
//     fetch(`http://localhost:5000/myreviews/${id}`, {
//       method: "PATCH",
//       headers: {
//         "content-type": "application/json",
//         //     authorization: `Bearer ${localStorage.getItem("genius-token")}`,
//       },
//       body: JSON.stringify({ reviewInfo }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         console.log(description);

//         if (data.modifiedCount > 0) {
//           console.log(data);
//         }
//       });
//   };

//   return (
//     <div>
//       {/* The button to open modal */}
//       <label
//         htmlFor="my-modal"
//         className="py-3 text-white font-semibold px-4 mr-5 bg-green-250 border-none hover:bg-green-350 rounded-3xl"
//       >
//         Update
//       </label>

//       {/* Put this part before </body> tag */}
//       <input type="checkbox" id="my-modal" className="modal-toggle" />
//       <div className="modal">
//         <div className="modal-box">
//           <label
//             htmlFor="my-modal"
//             className="btn btn-sm btn-circle absolute right-2 top-2 bg-green-250 hover:bg-green-350"
//           >
//             ✕
//           </label>
//           <h3 className="font-bold text-lg">{title}</h3>
//           <form onSubmit={handleSubmitReview}>
//             <input
//               onChange={handleDescriptionChange}
//               type="text"
//               defaultValue={description}
//             />
//             <button
//               type="submit"
//               //   onClick={() => handleReviewUpdate(_id)}
//               className="py-3 text-white font-semibold px-4 mr-5 bg-green-250 hover:bg-green-350 rounded-3xl"
//             >
//               Save
//             </button>
//           </form>
//           <div className="modal-action"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateReview;
