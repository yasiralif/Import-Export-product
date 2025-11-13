import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import BlueHoverButton from '../../Components/BlueHoverButton/BlueHoverButton';

const MyProfile = () => {
    const nevigate =useNavigate()
    const{user, userdata,singOut}=useContext(AuthContext)
    // console.log(userdata);
    // console.log(user);
  const {
    name =user.displayName|| userdata.displayName,
    username = user.email|| userdata.email,
    email =user.email|| userdata.email,
    phone =user.phoneNumber|| "+880 1XXXXXXXXX",
    location = "Dhaka, Bangladesh",
    bio = "Full-stack developer. Loves clean UI and good coffee.",
    avatar = user.photoURL||userdata.pohtoURL,
    stats = { posts: 34, followers: 1280, following: 180 },
  } = user;
   const handelLogout=(e)=>{
    singOut()
    .then(res=>{
      toast.success("You Are SuccessFully Log Out")
      nevigate('/')
    })
    .catch(err=>{
      toast.error(err.code)
    })
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white">
        {/* header gradient */}
        <div className="h-36 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

        <div className="px-6 pb-6">
          <div className="-mt-16 flex items-end gap-6">
            {/* avatar */}
            <div className="relative">
              <img
                src={avatar}
                alt={name}
                className="w-32 h-32 rounded-xl border-4 border-white object-cover shadow-md"
              />
              <span className="absolute -right-2 -bottom-2 bg-white rounded-full p-1 shadow-md">
                <button className="w-9 h-9 rounded-full bg-green-500 text-white text-sm font-semibold">✓</button>
              </span>
            </div>

            {/* name & meta */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                  <p className="text-sm text-gray-500">@{username}</p>
                </div>

                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-sm hover:opacity-95">
                    Edit Profile
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50">
                    Share
                  </button>
                </div>
              </div>

              <p className="mt-3 text-gray-600">{bio}</p>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-sm text-gray-500">Posts</div>
                  <div className="font-semibold text-gray-800">{stats.posts}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Followers</div>
                  <div className="font-semibold text-gray-800">{stats.followers}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Following</div>
                  <div className="font-semibold text-gray-800">{stats.following}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
              </svg>
              <div>
                <div className="text-xs text-gray-500">Email</div>
                <div className="font-medium">{email}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m-6 4h18v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
              </svg>
              <div>
                <div className="text-xs text-gray-500">Phone</div>
                <div className="font-medium">{phone}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5V10L12 3 2 10v10h5" />
              </svg>
              <div>
                <div className="text-xs text-gray-500">Location</div>
                <div className="font-medium">{location}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6" />
              </svg>
              <div>
                <div className="text-xs text-gray-500">Member since</div>
                <div className="font-medium">Jan 2024</div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="flex-1 px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100 font-medium">Message</button>
            <BlueHoverButton onClick={handelLogout} label='Log Out'/>

            {/* <button onClick={handelLogout} className="w-40 px-4 py-2 rounded-lg bg-white text-gray-700 border border-gray-200 font-medium shadow-sm">Log Out</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;