import React from "react";
import onlineFoods from "../../../assets/onlineFood.jpg";
const OnlineFood = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      <div className="">
        <img className="rounded-3xl" src={onlineFoods} alt="" />
      </div>
      <div className="">
        <h1 className="text-3xl">
          How Does An Online Ordering System For Restaurants Work?
        </h1>
        <p className="my-4">
          An online ordering system for restaurants allows users to pick the
          finest restaurant to get food from and deliver it to their preferred
          location. Whether you want a medium-sized burger or an extra-large
          pizza, there’s enough to choose from.
        </p>
        <p className="my-4">
          Rather than going to a physical restaurant, individuals in that area
          are using an online ordering system order their meals for a variety of
          good and logical reasons.
        </p>
        <p className="my-4">
          Just because they don’t have to wait in line for a seat in a
          restaurant doesn’t mean that people aren’t appreciating the
          convenience of having meals delivered right to their home.
        </p>
      </div>
    </div>
  );
};

export default OnlineFood;
