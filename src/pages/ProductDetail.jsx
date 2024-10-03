import React, { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();
  useEffect(() => {
    if (products.length > 0) {
      const newProduct = products.find(
        (product) => product.id === parseInt(id)
      );
      setProduct(newProduct);
    }
  }, [id, products]);
  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className="mb-8 lg:ml-40">
        <h3 className="text-xl font-bold mb-2">Product Description</h3>
        <p>
          This formula highlights key features, the target audience, and value
          propositions, making it versatile for various products. Let me know if
          you need further customization based on a specific product category!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-x-8 max-w-screen-md mx-auto">
        {/* image */}
        <div className="md:w-5/12 py-2 shadow-lg md:px-6 h-80 flex justify-center items-center">
          <img
            src={product.image}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        {/* product Info */}
        <div className="md:w-7/12 p-4 shadow-lg md:p-10 flex flex-col items-center gap-y-3">
          <h2 className="text-2xl font-bold mb-1 text-gray-800">
            {product.name}
          </h2>
          <p className="text-lg font-semibold text-gray-700 mb-3">
            ${product.price}
          </p>
          <div className="flex items-center mb-3 gap-x-2">
            <input
              id="quantity"
              type="number"
              min="1"
              className="border p-1 w-14 rounded"
            />
            <button className="bg-orange-500 text-white py-1 px-4 rounded hover:bg-orange-700 transition-all duration-300">
              Add to Cart
            </button>
          </div>
          <div className="flex flex-col gap-y-2 mt-3 text-sm">
            <p className="flex items-center text-gray-600">
              <FaCarSide className="mr-1 text-orange-500" />
              Delivery & Return
            </p>
            <p className="flex items-center text-gray-600">
              <FaQuestion className="mr-1 text-orange-500" />
              Ask Question
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
