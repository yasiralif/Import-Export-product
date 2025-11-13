import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

import AllProductCard from '../Components/AllProductCard/AllProductCard';
import Input from '../Components/Scarch/Input';

const AllProducts = () => {
    const data = useLoaderData();

    const [searchText, setSearchText] = useState("");

    // Filter products
    const filteredProducts = data.filter(product =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className='bg-base-300'>
            <div className='w-11/12 mx-auto py-3'>
                <div className='flex justify-between items-center'>
                    <div className='font-semibold text-2xl text-amber-500 mt-4 px-6 sm:px-8 py-2 sm:py-3 rounded-md'>
                        Search Your Product
                    </div>

                    {/* Input field */}
                    <Input 
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-base-300'>
                {
                    filteredProducts.length > 0 ? (
                        filteredProducts.map(product =>
                            <AllProductCard 
                                key={product._id} 
                                SingleData={product}
                            />
                        )
                    ) : (
                        <p className="text-center text-red-500 col-span-3 py-10 text-xl">
                            No Product Found!
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default AllProducts;
