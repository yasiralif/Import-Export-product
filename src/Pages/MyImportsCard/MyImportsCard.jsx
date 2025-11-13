import { Star, Trash2 } from 'lucide-react';
import React from 'react';
import BlueHoverButton from '../../Components/BlueHoverButton/BlueHoverButton';
import { Link } from 'react-router';
import toast from 'react-hot-toast';

const MyImportsCard = ({ data }) => {
  const handelDelet = () => {
    fetch(`https://new-2-swart.vercel.app/user-imports/${data._id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(result => {
        toast.success("you are successfully delete")
        window.location.reload()
      });
  };

  return (
    <div>

      <article
        key={data._id}
        className="hover:cursor-pointer max-w-sm w-full bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
      >
        <div className="relative h-48 w-full bg-gray-50">
          <img
            src={data.image_link}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="p-4 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-md font-semibold text-gray-800 truncate">
                {data.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 truncate">
                {data.origin_country}
              </p>
            </div>

            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">
                $ {data.price}
              </p>
              <p className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>{data.rating}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-700">
            <div>
              <p className="text-xs text-gray-500">Imported Qty</p>
              <p className="font-medium">{data.stock}</p>
            </div>

            <div className="flex items-center gap-2">
              <Link to={`/my-imports-detalis/${data._id}`}>
                <BlueHoverButton label='See Detalis' />
              </Link>

              <button onClick={handelDelet} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-red-100 to-red-50 hover:from-red-200 hover:to-red-100 text-red-700 border border-red-100 shadow-sm text-sm transition-all duration-300">
                <Trash2 className="w-4 h-4" />
                <span>Remove</span>
              </button>
            </div>
          </div>
        </div>
      </article>

    </div>
  );
};

export default MyImportsCard;