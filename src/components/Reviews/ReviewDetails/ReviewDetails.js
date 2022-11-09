import React from "react";

const ReviewDetails = ({ review }) => {
  const { img, name, description } = review;
  return (
    <div className="flex flex-col gap-4 mt-5 shadow-2xl p-5">
      <div>
        <img className="rounded-full h-10 mt-4 ml-3" src={img} alt="" />
      </div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ReviewDetails;
