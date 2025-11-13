import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Eye, Star, Trash2 } from 'lucide-react';
import { Link } from 'react-router';
import BlueHoverButton from './../Components/BlueHoverButton/BlueHoverButton';
import MyImportsCard from './MyImportsCard/MyImportsCard';

const MyImport = () => {
  const { user } = useContext(AuthContext);
  const [mydata, setMyData] = useState([]);

  const handelDelet = (e) => {

  }

  useEffect(() => {
    fetch(`https://new-2-swart.vercel.app/user-imports?email=${user.email}`)
      .then(res => res.json())
      .then(data => setMyData(data))
      .catch(err => console.error(err));
  }, [user.email]);

  return (
    <div className="min-h-screen p-6">

      {/* 🟦 IF NO DATA → SHOW EMPTY PAGE */}
      {mydata.length === 0 && (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          {/* <img 
            src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-download-in-svg-png-gif-file-formats--missing-information-pack-digital-marketing-illustrations-8560361.png"
            alt="No data"
            className="w-64 mb-6 opacity-80"
          /> */}

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            You don't have any imported products yet!
          </h2>

          <p className="text-gray-500 mb-6">
            Start exploring products and import your first item.
          </p>

          <Link to="/all-products">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
              Go to All Products
            </button>
          </Link>
        </div>
      )}

      {/* 🟩 IF DATA EXISTS → SHOW GRID */}
      {mydata.length > 0 && (
        <div className="grid lg:grid-cols-3 mt-2 mx-4 gap-6">
          {mydata.map((data) => <MyImportsCard key={data._id} data={data}></MyImportsCard>)}
        </div>
      )}

    </div>
  );
};

export default MyImport;
