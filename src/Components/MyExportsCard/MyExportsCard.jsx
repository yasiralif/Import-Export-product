import { Download, Link, Star } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';

const MyExportsCard = ({d}) => {
    const {
    _id,
    image_link,
    image_link2,
    name,
    category,
    price,
    color,
    size,
    brand,
    stock,
    origin_country,
    rating,
    description,
    description2,
  } = d;
    // console.log(d);
    const handelUpdate=(e)=>{
      e.preventDefault()
      // console.log(22);
      const fromdata={
        name: e.target.name.value,
    category: e.target.category.value,
    price: parseFloat(e.target.price.value),
    color:  e.target.color.value,
    size:  e.target.size.value,
    brand:  e.target.brand.value,
    stock: parseInt( e.target.stock.value),
    origin_country:  e.target.origin_country.value,
    rating: parseFloat(e.target.rating.value),
    image_link: e.target.image_link.value,
    image_link2:  e.target.image_link2.value,
    description:  e.target.description.value,
    description2:  e.target.description2.value,
      }
      // console.log(fromdata);

      fetch(`http://localhost:3000/all-products/${_id}`,{
        method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(fromdata),
  })
  .then((res) => res.json())
  .then(data=>console.log(data))
  .catch(err=>console.log(err))
      
      toast.success("You Are Successfully Update Product")
      // document.getElementById('my_modal_5').close()
      document.getElementById(`my_modal_${_id}`).close();
    }
    return (
          <div className="">
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between px-6 py-4 mb-4">
      {/* Left side - Image and Info */}
      <div className="flex items-center space-x-4">
        <img
          src={image_link}
          alt={name}
          className="w-16 h-16 rounded-xl object-cover border border-gray-200"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800 capitalize">
            {name}
          </h3>
          <p className="text-gray-600 text-sm">
            Price: <span className="font-medium text-gray-800">${price}</span>
          </p>
          <p className="text-gray-600 text-sm">
            Origin Country:{" "}
            <span className="font-medium text-gray-800">{origin_country}</span>
          </p>
          <p className="text-gray-600 text-sm">
            Rating:{" "}
            <span className="font-medium text-yellow-500">{rating}</span>
          </p>
        </div>
      </div>

      {/* Right side - Buttons */}
      <div className="flex items-center space-x-3">
        <button  className="hover:cursor-pointer px-5 py-2 rounded-xl font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow hover:opacity-90 transition-all duration-300">
          Delete
        </button>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
  className="hover:cursor-pointer px-6 py-2 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:opacity-90 hover:scale-105 transform transition-all duration-300"
  onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}
>
  ✏️ Update
</button>

{/* Update Modal */}
<dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-500 text-white rounded-3xl shadow-2xl p-8 overflow-y-auto max-h-[90vh]">

    {/* Header */}
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-2xl font-bold flex items-center gap-2">
        🛠️ Update Product Information
      </h3>
      <form method="dialog">
        <button className="btn btn-sm btn-circle text-white bg-white/20 hover:bg-white/30 border-none shadow">
          ✕
        </button>
      </form>
    </div>

    {/* Form Start */}
    <form
      onSubmit={handelUpdate}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* Product Name */}
      <div>
        <label className="block text-sm font-semibold mb-1">Product Name</label>
        <input
        required
        defaultValue={name}
          name="name"
          type="text"
          placeholder="Enter product name"
            
          className="w-full rounded-xl border-none bg-white/25 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-semibold mb-1">Category</label>
        <input
        required
        defaultValue={category}
          name="category"
          type="text"
          placeholder="e.g., Bottoms, Tops, Shoes"
            
          className="w-full rounded-xl border-none bg-white/25 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-semibold mb-1">Price </label>
        <input
        required
          defaultValue={price}
          name="price"
          type="number"
          step="0.01"
            
          placeholder="Enter price"
          className="w-full rounded-xl border-none bg-white/25 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Color */}
      <div>
        <label className="block text-sm font-semibold mb-1">Color</label>
        <input
        required
        defaultValue={color}
          name="color"
          type="text"
          placeholder="Enter color name"
            
          className="w-full rounded-xl border-none bg-white/25 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Size */}
      <div>
        <label className="block text-sm font-semibold mb-1">Size</label>
        <input
        required
          defaultValue={size}
          name="size"
          type="text"
          placeholder="Example: 38x34"
            
          className="w-full rounded-xl border-none bg-white/25 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Brand */}
      <div>
        <label className="block text-sm font-semibold mb-1">Brand</label>
        <input
        required
          defaultValue={brand}
          name="brand"
          type="text"
          placeholder="Enter brand name"
            
          className="w-full rounded-xl border-none bg-white/25 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Stock */}
      <div>
        <label className="block text-sm font-semibold mb-1">Available Stock</label>
        <input
        required
          defaultValue={stock}
          name="stock"
          type="number"
          placeholder="Enter available stock"
            
          className="w-full rounded-xl border-none bg-white/25 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Origin Country */}
      <div>
        <label className="block text-sm font-semibold mb-1">Origin Country</label>
        <input
        required
          defaultValue={origin_country}
          name="origin_country"
          type="text"
          placeholder="Enter origin country"
            
          className="w-full rounded-xl border-none bg-white/25 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Rating */}
      <div>
        <label className="block text-sm font-semibold mb-1">Rating</label>
        <input
        required
          defaultValue={rating}
          name="rating"
          type="number"
          step="0.1"
          placeholder="Example: 4.7"
            
          className="w-full rounded-xl border-none bg-white/25 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Image Links */}
      <div>
        <label className="block text-sm font-semibold mb-1">Image Link 1</label>
        <input
        required
          defaultValue={image_link}
          name="image_link"
          type="url"
          placeholder="https://example.com/image1.jpg"
            
          className="w-full rounded-xl border-none bg-white/25 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Image Link 2</label>
        <input
        required
          defaultValue={image_link2}
          name="image_link2"
          type="url"
          placeholder="https://example.com/image2.jpg"
            
          className="w-full rounded-xl border-none bg-white/25 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Descriptions */}
      <div className="md:col-span-2">
        <label className="block text-sm font-semibold mb-1">Short Description</label>
        <textarea
        required
        defaultValue={description}
          name="description"
          rows="2"
          placeholder="Enter short description"
            
          className="w-full rounded-xl border-none bg-white/25 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
        ></textarea>
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-semibold mb-1">Detailed Description</label>
        <textarea
        required
          defaultValue={description2}
          name="description2"
          rows="3"
          placeholder="Enter detailed description"
            
          className="w-full rounded-xl border-none bg-white/25 text-gray-900 placeholder-gray-700 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
        ></textarea>
      </div>

      {/* Save Button */}
      <div className="md:col-span-2 flex justify-center mt-4">
        <button
          type="submit"
          className="px-10 py-3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
          
        >
          💾 Save Changes
        </button>
      </div>
    </form>
    {/* Form End */}
  </div>
</dialog>



       
      </div>
    </div>
    </div>
  );
};

export default MyExportsCard;