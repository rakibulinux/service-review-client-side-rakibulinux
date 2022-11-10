import React, { useContext } from "react";
import Banner from "../../Banner/Banner";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../contexts/AuthProvider";
import ServiceHome from "../ServiceHome/ServiceHome";
import { Link } from "react-router-dom";
import MostPopular from "../MostPopular/MostPopular";
import OnlineFood from "../OnlineFood/OnlineFood";

const Home = () => {
  const { services, servicesAll } = useContext(AuthContext);
  return (
    <div className="my-6 w-11/12 mx-auto">
      <Helmet>
        <title>Home | Order Review</title>
      </Helmet>
      <div className="">
        <Banner />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
        {services.map((service) => (
          <ServiceHome key={service._id} service={service} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          className="text-center bg-green-250 text-white text-xl font-medium py-2 px-5 rounded-3xl"
          to="/services"
        >
          See All
        </Link>
      </div>
      <h1 className="text-3xl">Our Most Popular Products</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
        {servicesAll.map((service) => (
          <MostPopular key={service._id} service={service} />
        ))}
      </div>

      <div className="my-5">
        <OnlineFood />
      </div>
    </div>
  );
};

export default Home;
