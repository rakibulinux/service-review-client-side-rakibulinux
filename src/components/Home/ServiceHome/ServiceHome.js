import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const ServiceItem = ({ service }) => {
  const { loading } = useContext(AuthContext);
  const { img, price, _id, description, title } = service;
  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <button
          type="button"
          className="flex items-center rounded-lg bg-green-250 px-4 py-2 text-white"
          disabled
        >
          <svg
            className="mr-3 h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="font-medium"> Loading... </span>
        </button>
      </div>
    );
  }
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-2xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} style={{ objectFit: "cover" }} alt="" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-blue-950">{title}</h2>
        <p>{description.slice(0, 100)}...</p>
        <div className="card-actions justify-between items-center">
          <span className="text-2xl text-green-450">Price: ${price}</span>
          <Link to={`/services/${_id}`}>
            <button className="btn bg-green-250 hover:bg-green-350 border-none">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
