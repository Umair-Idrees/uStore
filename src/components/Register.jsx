import React from "react";

const Register = ({ openLogin }) => {
  return (
    <div>
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-black font-semibold  rounded  transition duration-300 hover:opacity-90 mb-4 text-2xl">
        Sign Up
      </h2>
      <form>
        <div className="mb-4">
          <lable className="block text-gray-700">Name</lable>
          <input
            type="text"
            className="w-full px-3 py-2 border"
            placeholder="Enter Name"
          />
        </div>
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

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center">
        <sapn text-gray-700>Already Have an Account?</sapn>
        <button className="text-orange-800" onClick={openLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
