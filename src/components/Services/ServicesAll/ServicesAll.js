import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServicesAll = ({ services }) => {
  const { img, price, _id, description, title } = services;
  return (
    <div className="card card-compact w-96 mx-auto bg-base-100 shadow-2xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img
              className="h-96"
              src={img}
              style={{ objectFit: "cover" }}
              alt=""
            />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-blue-950">{title}</h2>
        <p>{description.slice(0, 100)}...</p>
        <div className="card-actions justify-between items-center">
          <span className="text-2xl text-green-450">Price: ${price}</span>
          <Link to={`/services/${_id}`}>
            <button className="btn bg-green-250 hover:bg-green-350 rounded-3xl border-none">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesAll;
