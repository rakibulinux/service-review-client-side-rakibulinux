import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import AddReviews from "../../Reviews/AddReviews/AddReviews";
import Reviews from "../../Reviews/Reviews/Reviews";

const ServiceDetails = () => {
  const { img, price, _id, description, title } = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="bg-base-100 text-3xl">Service Section</h2>
      <div className="bg-base-100 shadow-2xl grid sm:grid-cols-1 md:grid-cols-2">
        <figure className="flex justify-center">
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                className="w-11/12"
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
              <button className="btn bg-green-250 hover:bg-green-350 border-none">
                All Services
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2 className="bg-base-100 text-3xl">Previous Reviews</h2>
        <div>
          <Reviews />
        </div>
      </div>
      <div>
        <h2 className="bg-base-100 text-3xl">Add New Review</h2>
        <div>
          <AddReviews _id={_id} title={title} />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
