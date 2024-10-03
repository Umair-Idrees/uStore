import React, { useEffect } from "react";
import { Categories, mockData } from "../assets/mockData";
import HeroImage from "../assets/images/imagebg.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import textImg from "../assets/images/img.png";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);

  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24 ">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12 ">
          <div className="bg-orange-600 text-white text-md font-bold px-2 py-2.5">
            SHOP BY CATEGORIES
          </div>
          <ul className="bg-gradient-to-r from-blue-50 to-gray-100 p-4 rounded-lg shadow-md border border-gray-200 md:p-6 lg:p-8 space-y-3 ">
            {Categories.map((category, index) => (
              <li
                key={index}
                className="flex items-center text-base md:text-lg  text-gray-700 hover:text-orange-600 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img src={HeroImage} alt="" className="h-full w-full" />

          <div className="absolute top-16 left-8 ml-6 mt-10">
            <p className="text-orange-200 ">CODE WITH UMAIR</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl  flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black font-bold  rounded  transition duration-300 hover:opacity-90">
              WELCOME TO{" "}
              <span>
                <img
                  src={textImg}
                  className="h-12 w-16 md:h-full md:w-full lg:h-24 lg:w-28 ml-3  object-contain "
                />
              </span>
            </h2>
            <p className="text-xl  font-semibold text-black">
              MILLION + PRODUCTS
            </p>
            <button className="bg-orange-600 px-4 py-1.5 rounded-full text-white mt-4 hover:bg-orange-700 transform transition-transform duration-300 hover:scale-105">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />

      <div className="container mx-auto py-12">
        <h2 className="text-2xl text-center   font-bold mb-6">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.products.slice(0, 5).map((products) => (
            <ProductCard product={products} />
          ))}
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home;
