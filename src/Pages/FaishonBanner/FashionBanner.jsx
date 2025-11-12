import React from "react";
import { WashingMachine, Thermometer, Waves } from "lucide-react";

const FashionBanner = () => {
  return (
    <div className="font-sans">
      {/* Main Banner */}
      <div className="grid md:grid-cols-2 w-full">
        {/* Left Section */}
        <div
          className="relative bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-white"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520975916090-3105956dac38')" }}
        >
          <div className="bg-black/40 w-full h-full absolute inset-0"></div>
          <div className="relative z-10 text-center space-y-4">
            <p className="uppercase tracking-wider text-sm text-gray-200">New Arrivals</p>
            <h2 className="text-5xl font-bold drop-shadow-md">Touch of Color</h2>
            <p className="text-lg text-gray-100">The Crew Neck Style T-Shirt</p>
            <button className="hover:cursor-pointer bg-gradient-to-r from-emerald-400 to-teal-600 text-white font-semibold mt-2 px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="relative bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-white"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503342217505-b0a15ec3261c')" }}
        >
          <div className="bg-black/40 w-full h-full absolute inset-0"></div>
          <div className="relative z-10 text-center space-y-4">
            <p className="uppercase tracking-wider text-sm text-gray-200">Discover Them All</p>
            <h2 className="text-5xl font-bold drop-shadow-md">This Season's Bomber Jackets</h2>
            <p className="text-lg text-gray-100">The Scoop Neck Style T-Shirt</p>
            <button className="hover:cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-700 text-white font-semibold mt-2 px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-[#243b35] text-white py-12 grid md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center space-y-3">
          <WashingMachine size={40} className="text-emerald-400" />
          <p className="font-semibold text-lg">Machine Wash</p>
          <p className="text-gray-300 text-sm">Gentle or Delicate Washing</p>
        </div>

        <div className="flex flex-col items-center space-y-3">
          <Thermometer size={40} className="text-emerald-400" />
          <p className="font-semibold text-lg">Ironing Temperature</p>
          <p className="text-gray-300 text-sm">Iron at maximum 150°C or 300°F</p>
        </div>

        <div className="flex flex-col items-center space-y-3">
          <Waves size={40} className="text-emerald-400" />
          <p className="font-semibold text-lg">Water Temperature</p>
          <p className="text-gray-300 text-sm">Wash at or below 30°C or 80°F</p>
        </div>
      </div>
    </div>
  );
};

export default FashionBanner;