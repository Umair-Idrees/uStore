import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import image from "../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import Modal from "./Modal";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  const [search, setSearch] = useState();
  const openSignup = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };
  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  const products = useSelector((state) => state.cart.products);
  return (
    <nav className="bg-white shadow-md py-2">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-3 flex items-center justify-between">
        <div className="text-lg font-bold">
          <Link to="/">
            <img
              src={image}
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-20 lg:w-20 "
            />
          </Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4 "
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-orange-500"></FaSearch>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-2xl text-black" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-orange-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block  "
            onClick={() => setIsModelOpen(true)}
          >
            Login | Register
          </button>
          <button className="block md:hidden">
            <FaUser className="text-2xl text-black" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 pb-4  text-sm font-bold">
        <Link
          to="/"
          className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black font-semibold  rounded  transition duration-300 hover:opacity-90"
        >
          HOME
        </Link>
        <Link
          to="/shop"
          className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black font-semibold  rounded  transition duration-300 hover:opacity-90 "
        >
          SHOP
        </Link>
        <Link
          to="/contact"
          className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black font-semibold  rounded  transition duration-300 hover:opacity-90"
        >
          CONTACT
        </Link>
        <Link
          to="/"
          className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black font-semibold  rounded  transition duration-300 hover:opacity-90"
        >
          ABOUT
        </Link>
      </div>
      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? (
          <Login openSignup={openSignup} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
