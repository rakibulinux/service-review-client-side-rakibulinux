import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import AddReviews from "../../Reviews/AddReviews/AddReviews";
import Reviews from "../../Reviews/Reviews/Reviews";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { img, price, _id, description, title } = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <div className="bg-base-100 shadow-2xl grid sm:grid-cols-1 md:grid-cols-2">
        <figure className="flex justify-center">
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                className="w-11/12 h-[563.5px]"
                src={img}
                style={{ objectFit: "cover" }}
                alt={title}
              />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold text-blue-950">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-between items-center">
            <span className="text-2xl text-green-450">Price: ${price}</span>
            <Link to={`/services/`}>
              <button className="btn bg-green-250 hover:bg-green-350 rounded-3xl border-none">
                All Services
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-5 shadow-2xl">
        <h2 className="bg-base-100 text-3xl text-blue-950 p-2">
          Previous Reviews
        </h2>
        <div className="my-5">
          <Reviews _id={_id} />
        </div>
      </div>
      <div className="my-5 shadow-2xl">
        <h2 className="bg-base-100 text-3xl text-blue-950 p-2">
          Please leave a Review
        </h2>
        <div className="flex justify-center items-center mb-5">
          {user?.uid ? (
            <AddReviews _id={_id} title={title} />
          ) : (
            <div className="flex flex-col justify-center gap-5 items-center">
              <p>Please login to add a review</p>
              <Link
                to="/login"
                className="py-3 px-6 rounded-3xl bg-green-250 hover:bg-green-350 text-white mb-5"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
