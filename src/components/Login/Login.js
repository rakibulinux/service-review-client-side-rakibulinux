import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginpage from "../../assets/loginpage.svg";
import { AuthContext } from "../../contexts/AuthProvider";
import googleLogo from "../../assets/google.png";
import toast from "react-hot-toast";
import JWTAuthToken from "../../APIs/JWTAuthToken";

const Login = () => {
  const { loginUserAccount, resetUserPassword, loginWithGoogle, loading } =
    useContext(AuthContext);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { email, password } = userInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUserAccount(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(user.displayName);
        JWTAuthToken(user, navigate, from);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Signin Success with Google");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handlePasswordReset = () => {
    resetUserPassword(email)
      .then((result) => {
        const user = result.user;
        toast.success(user.displayName);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
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
        <title>Login | Order Review</title>
      </Helmet>
      <div className="hero bg-base-200 w-11/12 mx-auto text-blue-950">
        <div className="hero-content grid sm:grid-cols-1 md:grid-cols-2">
          <div className="text-center lg:text-left">
            <img className="" src={loginpage} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-5">
            <div className="card-body">
              <h2 className="text-3xl text-center font-bold ">Login Now</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    defaultValue={email}
                    onChange={handleEmailChange}
                    type="text"
                    placeholder="email"
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
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-green-250 hover:bg-green-350 rounded-3xl border-none">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <label className="label mb-5">
              <button onClick={handlePasswordReset} className="link-hover ml-5">
                Forgot password?
              </button>
            </label>
            <button
              onClick={handleGoogleLogin}
              className="flex hover:bg-green-200 bg-yellow-400 py-3 mb-5 w-10/12 mx-auto rounded-3xl justify-center"
              type="submit"
            >
              <img className="w-6 mr-2" src={googleLogo} alt="" />{" "}
              <span className="font-semibold">Continue with Google</span>
            </button>
            <div className="my-10">
              <span>New to Online Order? </span>
              <Link className="text-green-250 font-semibold" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
