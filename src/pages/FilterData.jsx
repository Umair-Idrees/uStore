import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import NoProduct from "../assets/images/noproduct.png";

export const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);
  return (
    <div className="container mx-auto py-12">
      {filterProducts.length > 0 ? (
        <>
          <h2 className="text-2xl text-center   font-bold mb-6">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {filterProducts.map((products) => (
              <ProductCard product={products} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex justify-center">
          <img src={NoProduct} className="h-60 "  />
        </div>
      )}
    </div>
  );
};
