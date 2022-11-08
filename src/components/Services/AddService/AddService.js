import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const { user } = useContext(AuthContext);

  const handlePlaceService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const img = form.img.value;
    // const email = user?.email || "unregistered";
    const price = form.price.value;
    const description = form.description.value;

    const service = {
      title,
      img,
      price,
      description,
    };

    fetch("https://service-review-gamma.vercel.app/services/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("New service added");
          form.reset();
        }
      })
      .catch((er) => {
        toast.error(er.message);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Add Service | Order Review</title>
      </Helmet>
      <form onSubmit={handlePlaceService}>
        {/* <h2 className="text-4xl">You are about to order: {title}</h2>
        <h4 className="text-3xl">Price: {price}</h4> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="title"
            type="text"
            placeholder="Your Service Title"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="price"
            type="text"
            placeholder="Your Service price"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="img"
            type="text"
            placeholder="Your Service Image"
            className="input input-ghost w-full  input-bordered"
            required
          />
          {/* <input
            name="email"
            type="text"
            placeholder="Your email"
            defaultValue={user?.email}
            className="input input-ghost w-full  input-bordered"
            readOnly
          /> */}
        </div>
        <textarea
          name="description"
          className="textarea textarea-bordered h-24 w-full my-5"
          placeholder="Your Service description"
          required
        ></textarea>
        <div className="flex justify-center">
          <input
            className="btn bg-green-250 border-none my-5 rounded-3xl hover:bg-green-350"
            type="submit"
            value="Add A Service"
          />
        </div>
      </form>
    </div>
  );
};

export default AddService;
