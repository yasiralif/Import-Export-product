import React from "react";
import { ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { useLoaderData } from "react-router";

const Pet = () => {
      const data =useLoaderData()
    // console.log(data);
    const{image_link2,category,name, price,description,brand,create_by,stock}=data
  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      {/* ===== Left: Product Image ===== */}
      <div>
        <img
          src={image_link2}
          alt="Blue Winter Jacket"
          className="rounded-lg shadow-md"
        />

        <div className="flex gap-3 mt-4">
          <img
            src="https://www.lerevecraze.com/wp-content/uploads/2025/11/4ee32a5d-23dc-4e1b-8ab6-09b5c4881693-370x370.jpg"
            alt="thumb1"
            className="w-20 h-20 object-cover rounded-md border cursor-pointer"
          />
          <img
            src="https://www.lerevecraze.com/wp-content/uploads/2025/11/57e94f8a-779e-49a1-abbe-bdc60f982867.jpg"
            alt="thumb2"
            className="w-20 h-20 object-cover rounded-md border cursor-pointer"
          />
        </div>
      </div>

      {/* ===== Right: Product Info ===== */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p className="text-lg font-bold mb-3">€{price}</p>

        <p className="text-sm text-gray-600 mb-3">
          Tax excluded. Delivery: 1 to 3 weeks
        </p>

        <div className="flex items-center gap-4 mb-3">
          <p className="text-sm">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Brand:</span> {brand}
          </p>
          <p className="text-sm">
            <span className="font-semibold">CreateBy:</span> {create_by}
          </p>
        </div>

        <p className="text-gray-700 mb-4">
          Detacto deturioset pro an. Graeco interesset nam, vim et oportet
          recusabo. Ex eam fastidii percipit, veniam consequat voluptatum ex
          per.
        </p>

        {/* === Size Selector === */}
        <div className="mb-4">
          <p className="font-semibold mb-1">Size:</p>
          <div className="flex gap-2">
            <button className="btn btn-outline btn-sm">S</button>
            <button className="btn btn-outline btn-sm">M</button>
            <button className="btn btn-outline btn-sm">L</button>
          </div>
        </div>

        {/* === Color Selector === */}
        {/* <div className="mb-4">
          <p className="font-semibold mb-1">Color:</p>
          <div className="flex gap-3">
            <div className="w-6 h-6 bg-black border rounded-full cursor-pointer"></div>
            <div className="w-6 h-6 bg-white border rounded-full cursor-pointer"></div>
          </div>
        </div> */}

        {/* === Quantity & Add to Cart === */}
        <div className="flex items-center gap-3 mb-5">
          {/* <input
            type="number"
            min="1"
            defaultValue="1"
            className="input input-bordered w-16 text-center"
          /> */}
          {/* <button >
            IMPORT PROUDUCT
          </button> */}
          {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-[#88a1b6] text-white hover:bg-[#6f8ba3]" onClick={()=>document.getElementById('my_modal_5').showModal()}>IMPORT PROUDUCT</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Your Import Quantity</legend>
  <input type="text" className="input" placeholder="Enter Your Import Quantity" />
  
</fieldset>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">IMPORT</button>
      </form>
    </div>
  </div>
</dialog>
        </div>

        {/* === Stock Info === */}
        <p className="text-green-600 text-sm mb-5">✔ {
stock} In Stock</p>

        {/* === Policies === */}
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-sm">
            <ShieldCheck size={18} /> Security policy (edit with module Customer reassurance)
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Truck size={18} /> Delivery policy (edit with module Customer reassurance)
          </div>
          <div className="flex items-center gap-3 text-sm">
            <RotateCcw size={18} /> Return policy (edit with module Customer reassurance)
          </div>
        </div>

        {/* === Description Section === */}
        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-2">Description</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
       {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pet;
