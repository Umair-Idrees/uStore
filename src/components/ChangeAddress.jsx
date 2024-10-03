import React, { useState } from "react";

const ChangeAddress = ({ setAddress, setIsModelOpen }) => {
  const [newAddress, setNewAddress] = useState("");
  const onClose = () => {
    setAddress(newAddress);
    setIsModelOpen(false);
  };
  return (
    <div>
      <h1 className="text-xl text-orange-950 font-semibold text-center mb-8">Change Address</h1>
      <input
        type="text"
        placeholder="Enter New Address"
        className="border p-2 w-full mb-4"
        onChange={(e) => setNewAddress(e.target.value)}
      />

      <div className="flex justify-end">
        <button
          className="bg-yellow-600 text-white py-2 px-4 rounded mr-2"
          onClick={() => setIsModelOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-orange-900 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
