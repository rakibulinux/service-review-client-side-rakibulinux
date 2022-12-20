import React from "react";

const UpdateReview = ({ review, handleReviewUpdate, newDes, setNewDes }) => {
  const { _id, description, title } = review;

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
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-green-250 border-none hover:bg-green-350"
          >
            X
          </label>
          <h3 className="font-bold text-lg">{title}</h3>
          <textarea
            className="py-4 bg-gray-300"
            defaultValue={description}
            onChange={handleDescriptionChange}
          ></textarea>
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
