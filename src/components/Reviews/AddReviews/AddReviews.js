import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
const AddReviews = () => {
  const { user } = useContext(AuthContext);
  const handlePlaceReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = user?.photoURL;
    const email = user?.email || "unregistered";
    const description = form.description.value;

    const review = {
      name,
      img,
      email,
      description,
    };

    fetch("https://service-review-gamma.vercel.app/reviews/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("New review added");
          form.reset();
        }
      })
      .catch((er) => {
        toast.error(er.message);
      });
  };
  return (
    <form onSubmit={handlePlaceReview}>
      <img
        className="rounded-full h-10 mt-4 ml-3"
        title={user?.displayName}
        src={user?.photoURL}
        alt=""
      />
      <div className="mt-5 flex flex-col gap-4">
        <input
          name="name"
          type="text"
          placeholder="Your name"
          defaultValue={user?.displayName}
          readOnly
          className="input input-ghost w-full  input-bordered"
          required
        />
        <input
          name="email"
          type="text"
          placeholder="Your email"
          defaultValue={user?.email}
          readOnly
          className="input input-ghost w-full  input-bordered"
          required
        />
      </div>
      <textarea
        name="description"
        className="textarea textarea-bordered h-24 w-full my-5"
        placeholder="Your Review"
        required
      ></textarea>
      <div className="flex justify-center">
        <input
          className="btn bg-green-250 border-none my-5 rounded-3xl hover:bg-green-350"
          type="submit"
          value="Add A Review"
        />
      </div>
    </form>
  );
};

export default AddReviews;
