import React, { useContext } from "react";
import Banner from "../../Banner/Banner";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../contexts/AuthProvider";
import ServiceHome from "../ServiceHome/ServiceHome";
import { Link } from "react-router-dom";

const Home = () => {
  const { services } = useContext(AuthContext);
  console.log(services);
  return (
    <div className="my-6">
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
          className="text-center bg-green-250 text-white text-xl font-medium py-3 px-3 rounded-3xl"
          to="/services"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default Home;
