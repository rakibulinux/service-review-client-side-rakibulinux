import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../contexts/AuthProvider";
import ServicesAll from "./ServicesAll";
const Services = () => {
  const { servicesAll, loading } = useContext(AuthContext);
  console.log(servicesAll);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
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
