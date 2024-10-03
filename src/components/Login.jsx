import React from "react";

const Login = ({ openSignup }) => {
  return (
    <div>
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-black font-semibold  rounded  transition duration-300 hover:opacity-90 mb-4 text-2xl ">Login</h2>
      <form>
        <div className="mb-4">
          <lable className="block text-gray-700">Email</lable>
          <input
            type="email"
            className="w-full px-3 py-2 border"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-4">
          <lable className="block text-gray-700">Password</lable>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a href="" className="text-orange-800">
            Forgot Password
          </a>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <sapn text-gray-700>Dont't Have an Account?</sapn>
        <button className="text-orange-800" onClick={openSignup}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
