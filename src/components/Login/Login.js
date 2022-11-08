import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginpage from "../../assets/loginpage.svg";
import { AuthContext } from "../../contexts/AuthProvider";
import googleLogo from "../../assets/google.png";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUserAccount, resetUserPassword, loginWithGoogle } =
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
        navigate(from, { replace: true });
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
  console.log(userInfo);
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
