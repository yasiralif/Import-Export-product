import { Eye, ShoppingCart } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router';

const AllProductCard = ({SingleData}) => {
    const{image_link,name, price,description}=SingleData
    const [isHovered, setIsHovered] = useState(false);
    // console.log(toggle);
    return (
        <div
             onMouseEnter={() => setIsHovered(true)}  
      onMouseLeave={() => setIsHovered(false)}  
        className='mx-auto my-2'>
            <div className="card card-sm hover:cursor-pointer bg-base-200 max-w-60 shadow">
  <figure className="hover-gallery">
    <img className='h-72' src={image_link} />
    <img src="https://www.lerevecraze.com/wp-content/uploads/2025/11/ba36bb3c-353b-429b-9466-8cd4cdf58e5a.jpg" />
    {/* <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" /> */}
    {/* <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" /> */}
  </figure>
 {
    isHovered?<div 

      className="card-body h-27">
    
     {/* <button className='btn'><ShoppingCart />Add To Cart</button> */}
     <Link to={`/all-product/${SingleData._id}`}><button className='btn'><Eye />See Details</button></Link>
    

  </div>:<div 

      className="card-body">
    <h2 className="card-title h-8 flex justify-between">
     {name}
      <span className="font-normal">${price}</span>
    </h2>
    <p>{description}</p>
  </div>
 }
</div>
            
        </div>
    );
};

export default AllProductCard;