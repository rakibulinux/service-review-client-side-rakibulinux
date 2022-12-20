import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../contexts/AuthProvider";
import ServicesAll from "../ServicesAll/ServicesAll";
const Services = () => {
  const { servicesAll, loading } = useContext(AuthContext);
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
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
      <Helmet>
        <title>Services | Order Review</title>
      </Helmet>
      {servicesAll.map((services) => (
        <ServicesAll key={services._id} services={services} />
      ))}
    </div>
  );
};

export default Services;
