import React, { useContext } from "react";
import { ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { useLoaderData } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";

const Pet = () => {
  const data = useLoaderData()
  const { user } = useContext(AuthContext)

  const { image_link2, image_link, category, name, price, description, brand, create_by, stock, _id } = data

  const handleImport = (e) => {
    e.preventDefault();

    const importValue = parseInt(e.target.import.value);

    if (importValue > stock) {
      toast.error("You cannot import more than available stock!");
      return;
    }

    const fromdata = {
      productId: _id,
      quantity: importValue,
      name: name,
      category: category,
      create_by: user.email,
      price: parseFloat(price),
      color: data.color,
      size: data.size,
      brand: brand,
      origin_country: data.origin_country,
      rating: parseFloat(data.rating),
      image_link: image_link,
      image_link2: image_link2,
      description: data.description,
      description2: data.description2,
    };

    fetch("https://new-2-swart.vercel.app/user-imports", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fromdata),
    })
      .then((res) => res.json())
      .then((d) => {
        toast.success("Product imported successfully");
        document.getElementById(`my_modal_${_id}`).close();
        window.location.reload();


      })
      .catch(err => toast.error(err.code))



    e.target.reset();

  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      {/* ===== Left: Product Image ===== */}
      <div>
        <img
          src={image_link}
          alt="Blue Winter Jacket"
          className="rounded-lg shadow-md"
        />

        <div className="flex gap-3 mt-4">
          <img
            src={image_link2}
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
          <button
            className="btn bg-[#88a1b6] text-white hover:bg-[#6f8ba3] transition-all duration-300"
            onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}
          >
            IMPORT PRODUCT
          </button>

          <dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box rounded-2xl shadow-lg border border-gray-200">
              <h3 className="font-bold text-xl text-center text-gray-800 mb-4">
                Import Product
              </h3>

              <form onSubmit={handleImport}>
                <fieldset className="fieldset border border-gray-300 rounded-xl p-4">
                  <legend className="fieldset-legend text-sm font-semibold text-gray-600 px-2">
                    Your Import Quantity
                  </legend>

                  <input
                    required
                    type="number"
                    name="import"
                    // value={quantity}
                    // onChange={(e) => setQuantity(e.target.value)}
                    className="input input-bordered w-full mt-2 focus:outline-none focus:ring-2 focus:ring-[#88a1b6]"
                    placeholder="Enter quantity to import"
                  />

                  <div className="modal-action flex justify-end mt-4">
                    <button
                      type="submit"
                      className="btn bg-[#88a1b6] text-white hover:bg-[#6f8ba3] px-5"
                    >
                      IMPORT
                    </button>
                    <button
                      type="button"
                      className="btn btn-ghost border border-gray-300 hover:bg-gray-100"
                      onClick={() => document.getElementById(`my_modal_${_id}`).close()}
                    >
                      Cancel
                    </button>
                  </div>
                </fieldset>
              </form>
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
