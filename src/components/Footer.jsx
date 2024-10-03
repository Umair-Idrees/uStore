import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img
            src={image}
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-20 lg:w-20 "
          />
          <p className="mt-4 text-gray-100 ">
            Your one-step for all your needs. Shop with use and experience the
            best online shopping experience
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-gray-100">
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="hover:underline">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:underline">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Foolow us</h4>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/umairidrees607" target="_blank">
              <FaFacebook className="hover:text-gray-400" />{" "}
            </a>
            <a href="" target="_blank">
              <FaInstagram className="hover:text-gray-400" />{" "}
            </a>
            <a href="https://github.com/Umair-Idrees" target="_blank">
              <FaGithub className="hover:text-gray-400" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-umair-idrees-/"
              target="_blank"
            >
              <FaLinkedin className="hover:text-gray-400" />{" "}
            </a>
          </div>
          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"
            />
            <button className="bg-orange-600 text-white px-4 py-2 rounded-r-lg border border-gray-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4"> 
        <div className="container  mx-auto flex flex-col md:flex-row justify-between items-center text-gray-100">
          <p> &copy; 2024 u-Store All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:pt-0">
            <a href="" className="text-gray-50 hover:underline">
              Privacy Policy
            </a>
            <a href="" className="text-gray-50 hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
