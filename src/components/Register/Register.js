import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../contexts/AuthProvider";
import loginpage from "../../assets/loginpage.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import JWTAuthToken from "../../APIs/JWTAuthToken";

const Register = () => {
  const { createUserAccount, updateUserAccount, loading, setLoading } =
    useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    photoURL: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
    createUserAccount(email, password)
      .then((result) => {
        const user = result.user;
        updateUserAccount(name, photoURL)
          .then(() => {
            toast.success("Profile Update Successfully");
          })
          .catch((err) => {
            toast.error(err.message);
          });
        toast.success(user?.displayName, "Account create success");
        JWTAuthToken(user, navigate, from);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <button
          type="button"
          className="flex items-center rounded-lg bg-green-250 px-4 py-2 text-white"
          disabled
        >
          <svg
            className="mr-3 h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="font-medium"> Loading... </span>
        </button>
      </div>
    );
  }
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
                    name="name"
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
                    name="photoURL"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    defaultValue={email}
                    onChange={handleEmailChange}
                    type="email"
                    placeholder="Your email"
                    className="input input-bordered"
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    defaultValue={password}
                    onChange={handlePasswordChange}
                    type="password"
                    placeholder="Your password"
                    className="input input-bordered"
                    name="password"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-green-250 hover:bg-green-350 rounded-3xl border-none">
                    Register
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
