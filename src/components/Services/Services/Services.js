import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../contexts/AuthProvider";
import ServicesAll from "../ServicesAll/ServicesAll";
const Services = () => {
  const { servicesAll } = useContext(AuthContext);
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
