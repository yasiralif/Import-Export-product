import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Card = ({
  title = "Default Title",
  description = "Default description goes here.",
  buttonText = "Read More",
  link = "/all-products",
  image = "https://picsum.photos/400/300",
  rating='2.1',
  price='40', 
  quantity='20',
  country='Bangladesh'
}) => {
  return (
    
    <div className="relative flex w-80 flex-col rounded-xl hover:bg-gradient-to-r from-indigo-600 to-purple-600  bg-white bg-clip-border text-gray-700 shadow-md">

      {/* Image + Hover Gradient */}
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg group">

        {/* Background Image */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

      </div>

      {/* Content */}
      <div className="p-6">
        <h5 className="mb-2 text-xl font-semibold text-gray-900">
          {title}
        </h5>
        <div className="flex justify-between">
          <p className="text-base font-light text-gray-700 leading-relaxed">
           Price: $ {price}
        </p>
        <p className="text-base  flex justify-center gap-1 font-light text-gray-700 leading-relaxed">
          <Star/> {rating}
        </p>
        </div>
       <div className="flex justify-between">
         <p className="text-base font-light text-gray-700 leading-relaxed">
         Quantity: {quantity}
        </p>
        <p className="text-base font-light text-gray-700 leading-relaxed">
        Country: {country}
        </p>
       </div>
      </div>

      {/* Button */}
      <div className="p-6 pt-0">
        <Link to={link}>
          <button
            type="button"
            className="rounded-lg bg-blue-500 py-3 px-6 text-center text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg"
          >
            {buttonText}
          </button>
        </Link>
      </div>
      
    </div>
  );
};

export default Card;
