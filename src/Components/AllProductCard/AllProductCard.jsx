import { Eye } from "lucide-react";

import { useState } from "react";
import { Link } from "react-router";
import PickUpButton from "../Button/PickUpButton/PickUpButton";



const AllProductCard = ({ SingleData }) => {
  const { image_link, name, price, origin_country, rating, stock, _id } = SingleData;
  const [isHovered, setIsHovered] = useState(false);

  return (


     
    <div
    
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="max-w-[270px] bg-[#fafaee] rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 mx-auto my-4 cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative w-70 h-64 overflow-hidden">
        {/* Main image */}
        <img
          src={image_link}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110 blur-[2px]" : "scale-100"
          }`}
        />

        {/* Hover gallery */}
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/40 backdrop-blur-sm transition-all duration-500">
            <Link 
            // className="btn bg-[#88a1b6] text-white hover:bg-[#6f8ba3]" 
            to={`/all-product/${_id}`}>
            <PickUpButton label="See Detalis"/>
            
            {/* <Eye size={18} /> See Detalis */}
            </Link>

            {/* See Details Button */}
            {/* <Link to={`/all-product/${_id}`}>
              <button className="btn bg-white text-gray-800 font-semibold hover:bg-gray-100 flex items-center gap-2 transition-all">
                <Eye size={18} /> See Details
              </button>
            </Link> */}
          </div>
        )}
      </div>

      {/* Product Info Section */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-1">
          <h2 className="font-semibold text-gray-800 text-lg truncate">{name}</h2>
          <span className="text-gray-700 font-medium text-sm">${price}</span>
        </div>

        <p className="text-sm text-gray-500 mb-1">Origin: {origin_country}</p>

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>⭐ {rating}</span>
          <span>Stock: {stock}</span>
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;
