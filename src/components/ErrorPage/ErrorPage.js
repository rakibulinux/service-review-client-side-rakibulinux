import React from "react";
import { Link } from "react-router-dom";
import errorPage404 from "../../assets/errorPage.png";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-green-100 text-green-250">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img className="h-96" src={errorPage404} alt="" />
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            Sorry, we couldn't find this page.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-green-250 hover:bg-green-350 text-green-100"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
