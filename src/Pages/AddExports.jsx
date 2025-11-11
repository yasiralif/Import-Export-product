import React, { useContext } from 'react';
import { AuthContext } from './../Context/AuthContext';

const AddExports = () => {
    const {user}=useContext(AuthContext)
    
    const handelSubmit =(e)=>{
      e.preventDefault()
      // console.log(22);
      const fromData={
        name: e.target.name.value,
        origin_country:e.target.origincountry.value,
        price:e.target.price.value,
        rating:e.target.rating.value,
        image:e.target.image_link.value,
        quantity:e.target.quantity.value,
        create_by:user.email,

      }
      fetch('http://localhost:3000/user-exports', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json'
  },
  body:JSON.stringify(fromData)
})
.then(res => res.json())
.then(data => {
  console.log('Server থেকে Response:', data);
})
.catch(err => console.error(err));
    }
   

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-purple-700 via-pink-500 to-orange-400">
      <form onSubmit={handelSubmit} className="backdrop-blur-lg bg-white/20 border border-white/30 w-full max-w-3xl rounded-3xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
        <h2 className="md:col-span-2 text-3xl font-bold text-center mb-4 drop-shadow-lg">
          🛍️ Add Product Information
        </h2>

        <div>
          <label className="block text-sm font-semibold">Product Name</label>
          <input
          name='name'
            type="text"
            placeholder="Enter product name"
            className="mt-2 block w-full rounded-xl border-none bg-white/30 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Product Image (URL)</label>
          <input
            name='image_link'
            type="url"
            placeholder="https://example.com/image.jpg"
            className="mt-2 block w-full rounded-xl border-none bg-white/30 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Price</label>
          <input
            name='price'
            type="number"
            step="0.01"
            placeholder="Enter Your Price"
            className="mt-2 block w-full rounded-xl border-none bg-white/30 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Origin Country</label>
          <input
            name='origincountry'
            type="text"
            placeholder="Enter Your Country"
            className="mt-2 block w-full rounded-xl border-none bg-white/30 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Rating</label>
          <input
            name='rating'
            type="number"
            step="0.1"
            placeholder="Enter Your Rating"
            className="mt-2 block w-full rounded-xl border-none bg-white/30 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Available Quantity</label>
          <input
          name='quantity'
            type="number"
            placeholder="Enter Your Quantity"
            className="mt-2 block w-full rounded-xl border-none bg-white/30 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* <div>
          <label className="block text-sm font-semibold">Created At</label>
          <input
            type="datetime-local"
            className="mt-2 block w-full rounded-xl border-none bg-white/30 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div> */}

        <div className='hidden'>
          <label className="block text-sm font-semibold">Created By (Email)</label>
          <input
          defaultValue={user.email}
            type="email"
            placeholder="example@gmail.com"
            className="mt-2 block w-full rounded-xl border-none bg-white/30 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}


export default AddExports;