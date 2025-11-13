import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { CircleUser } from 'lucide-react';
import  './Navbar.css'
import { AuthContext } from '../../Context/AuthContext';
import Uniberbutton from '../Button/UniberButton/Uniberbutton';
import toast from 'react-hot-toast';

const Navbar = () => {
  const {user, singOut} =useContext(AuthContext)


  const handelLogout=(e)=>{
    singOut()
    .then(res=>{
      toast.success("You Are SuccessFully Log Out")
    })
    .catch(err=>{
      toast.error(err.code)
    })
  }
    return (
        <div>
            <div className="navbar bg-[#616053] text-base-100  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu z-10 menu-sm dropdown-content bg-base-100  text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'>Home</NavLink></li>
   <li><NavLink to='/all-products'>All Products</NavLink></li>
   <li><NavLink to='/my-exports'>My Exports</NavLink></li>
   <li><NavLink to='/my-import'>My Imports</NavLink></li>
   <li><NavLink to='/add-export'>Add Export</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
      <Uniberbutton/>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
        <li><NavLink  to='/'>Home</NavLink></li>
   <li><NavLink to='/all-products'>All Products</NavLink></li>
   <li><NavLink to='/my-exports'>My Exports</NavLink></li>
   <li><NavLink to='/my-import'>My Imports</NavLink></li>
   <li><NavLink to='/add-export'>Add Export</NavLink></li>
   
    </ul>
  </div>
 
  <div className="navbar-end">
   
  {
    user? <div className="dropdown z-10  dropdown-end">
            <div
              tabIndex={0}
              
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10  rounded-full">
                <img
                  alt="User Profile"
                  src={
                    user.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to='/my-profile' className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              
              </li>
              
              <li><button onClick={handelLogout}>Logout</button></li>
            </ul>
            </div>
            :
             <Link className='text-bold btn' to='/login'> 
      <span><CircleUser /></span> Log In
   </Link>
  }
  </div>
</div>
            
        </div>
    );
};

export default Navbar;