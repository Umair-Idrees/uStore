import React from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
const Shop = () => {

    const products = useSelector(state=>state.product)
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl text-center   font-bold mb-6">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {products.products.map((products) => (
          
          <ProductCard product={products} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
