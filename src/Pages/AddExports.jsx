import React, { useContext } from 'react';
import { AuthContext } from './../Context/AuthContext';
import toast from 'react-hot-toast';

const AddExports = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      category: e.target.category.value,
      price: parseFloat(e.target.price.value),
      color: e.target.color.value,
      size: e.target.size.value,
      description: e.target.description.value,
      description2: e.target.description2.value,
      image_link: e.target.image_link.value,
      image_link2: e.target.image_link2.value,
      brand: e.target.brand.value,
      stock: parseInt(e.target.stock.value),
      origin_country: e.target.origin_country.value,
      rating: parseFloat(e.target.rating.value),
      create_by: user.email,
      created_at: new Date().toISOString(),
    };

    fetch("https://new-2-swart.vercel.app/user-exports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("You Are SuccecssFully Add New Product")
        e.target.reset();
      })
      .catch((err) => toast.error(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-purple-700 via-pink-500 to-orange-400">

      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-lg bg-white/20 border border-white/30 w-full max-w-5xl rounded-3xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-white"
      >
        <h2 className="md:col-span-2 text-3xl font-bold text-center mb-4 drop-shadow-lg">
          🛍️ Add Product Information
        </h2>

        {/* Name */}
        <div>
          <label className="block text-sm font-semibold">Product Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter product name"
            required
            className="mt-2 w-full rounded-xl border-none bg-white/30 text-gray-900 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold">Category</label>
          <input
            name="category"
            type="text"
            placeholder="e.g., Bottoms, Tops, Shoes"
            required
            className="mt-2 w-full rounded-xl border-none bg-white/30 text-gray-900 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-semibold">Price </label>
          <input
            name="price"
            type="number"

            required
            placeholder="Enter price"
            className="mt-2 w-full rounded-xl border-none bg-white/30 text-gray-900 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Color */}
        <div>
          <label className="block text-sm font-semibold">Color</label>
          <input
            name="color"
            type="text"
            placeholder="Enter color name"
            required
            className="mt-2 w-full rounded-xl border-none bg-white/30 text-gray-900 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Size */}
        <div>
          <label className="block text-sm font-semibold">Size</label>
          <input
            name="size"
            type="text"
            placeholder="Exmaple: 38x34"
            required
            className="mt-2 w-full rounded-xl border-none bg-white/30 text-gray-900 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block text-sm font-semibold">Brand</label>
          <input
            name="brand"
            type="text"
            placeholder="Enter brand name"
            required
            className="mt-2 w-full rounded-xl border-none bg-white/30 text-gray-900 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm font-semibold">Available Stock</label>
          <input
            name="stock"
            type="number"
            placeholder="Enter available stock"
            required
            className="mt-2 w-full rounded-xl border-none bg-white/30 text-gray-900 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Origin Country */}
        <div>
          <label className="block text-sm font-semibold">Origin Country</label>
          <input
            name="origin_country"
            type="text"
            placeholder="Enter origin country"
            required
            className="mt-2 w-full rounded-xl border-none bg-white/30 text-gray-900 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-semibold">Rating</label>
          <input
            name="rating"
            type="number"
            step="0.1"
            placeholder="Exmpale: 4.7"
            required
            className="mt-2 w-full rounded-xl border-none bg-white/30 text-gray-900 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Image Links */}
        <div>
          <label className="block text-sm font-semibold">Image Link 1</label>
          <input
            name="image_link"
            type="url"
            placeholder="https://example.com/image1.jpg"
            required
            className="mt-2 w-full rounded-xl border-none bg-white/30 text-gray-900 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Image Link 2</label>
          <input
            name="image_link2"
            type="url"
            placeholder="https://example.com/image2.jpg"
            required
            className="mt-2 w-full rounded-xl border-none bg-white/30 text-gray-900 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Descriptions */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold">Short Description</label>
          <textarea
            name="description"
            rows="2"
            placeholder="Enter short description"
            required
            className="mt-2 w-full rounded-xl border-none bg-white/30 text-gray-900 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold">Detailed Description</label>
          <textarea
            name="description2"
            rows="3"
            placeholder="Enter detailed description"
            required
            className="mt-2 w-full rounded-xl border-none bg-white/30 text-gray-900 p-3 shadow focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="px-10 py-3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExports;
