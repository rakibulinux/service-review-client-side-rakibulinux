import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../contexts/AuthProvider";
import loginpage from "../../assets/loginpage.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const { createUserAccount, updateUserAccount } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    photoURL: "",
    email: "",
    password: "",
  });
  const { name, photoURL, email, password } = userInfo;
  const handleNameChange = (e) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };
  const handlePhotoURLChange = (e) => {
    setUserInfo({ ...userInfo, photoURL: e.target.value });
  };
  const handleEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserAccount().then((result) => {
      const user = result.user;
      updateUserAccount(name, photoURL)
        .then(() => {
          toast.success("Profile Update Successfully");
        })
        .catch((err) => {
          toast.error(err.message);
        });
      toast.success(user?.displayName, "Account create success");
    });
  };

  return (
    <div>
      <Helmet>
        <title>Register | Order Review</title>
      </Helmet>
      <div className="hero bg-base-200 w-11/12 mx-auto text-blue-950">
        <div className="hero-content grid sm:grid-cols-1 md:grid-cols-2">
          <div className="text-center lg:text-left">
            <img className="" src={loginpage} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-5">
            <div className="card-body">
              <h2 className="text-3xl text-center font-bold ">Register Now</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    defaultValue={name}
                    onChange={handleNameChange}
                    type="text"
                    placeholder="Your name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    defaultValue={photoURL}
                    onChange={handlePhotoURLChange}
                    type="text"
                    placeholder="Your photoURL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    defaultValue={email}
                    onChange={handleEmailChange}
                    type="text"
                    placeholder="Your email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    defaultValue={password}
                    onChange={handlePasswordChange}
                    type="text"
                    placeholder="Your password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-green-250 hover:bg-green-350 rounded-3xl border-none">
                    Login
                  </button>
                </div>
              </form>
              <div className="my-10">
                <span>Already have an account? </span>
                <Link className="text-green-250 font-semibold" to="/login">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
