import React from "react";
import Banner from "../../Banner/Banner";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="my-6">
      <Helmet>
        <title>Home | Order Review</title>
      </Helmet>
      <div className="">
        <Banner />
      </div>
    </div>
  );
};

export default Home;
