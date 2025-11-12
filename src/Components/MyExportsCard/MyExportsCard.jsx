import { Download, Link, Star } from 'lucide-react';
import React from 'react';

const MyExportsCard = ({d}) => {
    const {image,name,price,origin_country,rating}=d
    console.log(d);
    return (
          <div className="">
            <div className="space-y-4">
       
            <div
            //   key={app.id}
              className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-lg hover:scale-[1.01] transition-all duration-200"
            >
              {/* Left side */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-indigo-100 shadow-inner">
                  <img
                    src={image}
                    // alt={app.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {name}
                  </h2>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      Price: ${price}
                    </div>
                    <div className="flex items-center gap-1.5">
                      Origin Country: {origin_country}
                    </div>
                    {/* <span>{app.size} MB</span> */}
                  </div>
                  <div>
                    Rating: {rating}
                 
                  </div>
                </div>
              </div>

              {/* Right side */}
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-lg text-sm hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 shadow-md">
                Delete
              </button>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-lg text-sm hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 shadow-md">
                Update
              </button>
            </div>
         
        </div>
     
    </div>
  );
};

export default MyExportsCard;