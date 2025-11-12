import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import MyExportsCard from '../Components/MyExportsCard/MyExportsCard';

const MyExports = () => {
        const {user}=useContext(AuthContext)
        const [data , setMyData]=useState([])

        
        // console.log(data);
        useEffect(()=>{
          
            fetch(`http://localhost:3000/user-exports?email=${user.email}`)
             .then(res => res.json())
        .then(data => setMyData(data))
        .catch(err => console.error(err));
    
        },[user.email])
    return (
        <div>
             <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600 flex items-center justify-center gap-3">
            Your Exports Data
          </h1>
          <p className="mt-3 text-gray-500 text-lg">
            Explore all trending data developed by us
          </p>
        </header>

        {/* Filter and Sort */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-indigo-600 font-semibold">
            {/* {fakeData.length} */}
             Apps Found
          </p>
          <select
            defaultValue="none"
            className="select select-bordered select-sm border-indigo-300 text-indigo-600 font-medium rounded-md focus:outline-none"
          >
            <option disabled>Sort By Size</option>
            <option value="none">None</option>
            <option value="high-low">High → Low</option>
            <option value="low-high">Low → High</option>
          </select>
        </div>
            {
                data.map(d=><MyExportsCard key={d._id} d={d}></MyExportsCard>
                )
            }
            
            
        </div>
    );
};

export default MyExports;