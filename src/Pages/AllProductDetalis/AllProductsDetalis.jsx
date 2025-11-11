import { ShoppingCart } from 'lucide-react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const AllProductsDetalis = () => {
    const data =useLoaderData()
    // console.log(data);
    const{image_link,name, price,description}=data
    const [isHovered, setIsHovered] = useState(false);
    // console.log(toggle);
    return (
   <div className='flex justify-center items-center'>
         <div
         key={data._id}
             onMouseEnter={() => setIsHovered(true)}   
      onMouseLeave={() => setIsHovered(false)}  
        className='mx-auto w-[200px] my-2'>
            <div className="card card-sm hover:cursor-pointer bg-base-200 max-w-60 shadow">
  <figure className="hover-gallery">
    <img className='h-72' src={image_link} />
    <img src="https://www.lerevecraze.com/wp-content/uploads/2025/11/ba36bb3c-353b-429b-9466-8cd4cdf58e5a.jpg" />
    {/* <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" /> */}
    {/* <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" /> */}
  </figure>
 {
    isHovered?<div 

      className="card-body">


        {/* //this is modal section */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Thsi is </h3>
    
    <form>
        
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Enter the Quantity</legend>
  <input type="text" className="input" placeholder="Enter The Quantity" />
  <p className="label">You can enter the Quantity of this  product</p>
</fieldset>
    </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Submit</button>
      </form>
    </div>
  </div>
</dialog>
    
     {/* <button className='btn'>Import Now</button> */}
     {/* <Link to={`/all-product/${SingleData._id}`}><button className='btn'><Eye />View Detalis</button></Link> */}
    

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
   </div>
    );
};

export default AllProductsDetalis;