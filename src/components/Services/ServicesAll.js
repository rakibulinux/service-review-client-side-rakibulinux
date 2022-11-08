import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServicesAll = ({ services }) => {
  const { img, price, _id, description, title } = services;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} style={{ objectFit: "cover" }} alt="" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100)}...</p>
        <div className="card-actions justify-between items-center">
          <span className="text-2xl">Price: ${price}</span>
          <button className="btn bg-green-250 hover:bg-green-350 border-none">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesAll;
