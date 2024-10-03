import React from "react";
import {
  FaShippingFast,
  FaDollarSign,
  FaLock,
  FaRegHandshake,
  FaAward,
} from "react-icons/fa";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast />,
      title: "Fast Shipping",
      description: "Enjoy expedited shipping on all orders with no extra cost.",
    },
    {
      icon: <FaDollarSign />,
      title: "Best Price ",
      description: "We offer competitive pricing on all our products.",
    },
    {
      icon: <FaLock />,
      title: "Secure Payment",
      description: "Your transactions are encrypted and secure with us.",
    },
    {
      icon: <FaRegHandshake />,
      title: "Customer Support",
      description: "24/7 customer service to help you with any issues.",
    },
    {
      icon: <FaAward />,
      title: "Top Quality",
      description: "We guarantee high-quality products for all customers.",
    },
  ];
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer "
          >
           <p className="text-orange-600 text-2xl ">{item.icon}</p> 
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default InfoSection;
