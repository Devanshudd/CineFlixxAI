//react arrow funciton  componnent export - rafce
import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [signin, setSignIn] = useState(true);
  const togglesinginform = () => {
    setSignIn(!signin);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {signin ? "Sign In" : "Sign Up"}
        </h1>
        {!signin && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-800"
        />

        <input
          type="Passsword"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-800"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {signin ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 m-4 cursor-pointer" onClick={togglesinginform}>
          {signin
            ? "New to Netflix? Sign Up Now"
            : "Already User! Please Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
