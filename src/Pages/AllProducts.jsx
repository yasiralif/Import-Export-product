import React from 'react';
import { useLoaderData } from 'react-router';

import AllProductCard from '../Components/AllProductCard/AllProductCard';


const AllProducts = () => {
    const data = useLoaderData()
    // console.log(data);
    return (
       <div>

       
        

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-base-300 '> 
            {
                data.map(SingleData=><AllProductCard key={SingleData._id} SingleData={SingleData}></AllProductCard>)
            }
            
        </div>
       </div>
    );
};






export default AllProducts;