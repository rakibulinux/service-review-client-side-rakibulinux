import React, { useContext } from "react";
import Banner from "../../Banner/Banner";
import { Helmet } from "react-helmet";
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
      <div>
        {services.map((service) => (
          <ServiceHome key={service._id} service={service} />
        ))}
        <Link to="/services">See All</Link>
      </div>
    </div>
  );
};

export default Home;
