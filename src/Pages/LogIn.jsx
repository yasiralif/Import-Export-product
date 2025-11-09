import { Eye, EyeOff } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const LogIn = () => {
   const [showPassword, setShowPassword] = useState(false);
   const location = useLocation()
   const navigate = useNavigate()
   console.log(location);
   const from = location.state|| "/";
   const {userlogIn, googleLogin}=useContext(AuthContext)
   const handleSubmit=(e)=>{
    e.preventDefault()
         const email =e.target.email.value;
         const password =e.target.password.value;
         console.log(email, password);
         userlogIn(email,password)
          .then(res=>{
      console.log(res);
      alert('succesfully login')
      // navigate(location, { replace: true });
     navigate(from, { replace: true });

    })
    .catch(err=>{
    //  alert(err.code)
    console.log(err);

    })
}

    const google = () => {
    googleLogin().then(res => {
     
     console.log(res);
    }).catch(err => {
      alert(err.code)
      
    })}

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-400">
      <div className="hero-content flex-col lg:flex-row-reverse text-white">
        {/* Left Side (Info Section) */}
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-5xl font-bold">Login Now!</h1>
          <p className="py-6 text-slate-200">
            Welcome back! Access your account to explore new features and manage
            your dashboard easily.
          </p>
          <div className="space-y-3">
            <h3 className="text-lg">Don’t have an account?</h3>
            <NavLink
              to="/singup"
              className="btn bg-white text-blue-700 hover:bg-blue-100 border-none"
            >
              Sign Up
            </NavLink>
          </div>
        </div>

        {/* Right Side (Glassmorphism Login Card) */}
        <div className="bg-white/20 backdrop-blur-md p-8 rounded-xl w-80 shadow-lg">
          <h2 className="text-2xl font-bold text-white text-center mb-2">
            Welcome Back
          </h2>
          <p className="text-white text-sm text-center mb-6">
            Sign in to your account
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name='email'
              placeholder="Email Address"
              className="w-full p-3 rounded-md border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <div className="relative">
              <input
              name='password'
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 rounded-md border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white/80"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
            <div className="flex justify-between items-center text-white text-sm">
              <label className="flex items-center space-x-1">
                <input type="checkbox" className="accent-blue-400" />
                <span>Remember me</span>
              </label>
              <button
                type="button"
                className="text-blue-300 hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-white/70 text-center mt-4 text-sm">
            or continue with
          </p>
          <div className="flex justify-center gap-4 mt-3">
            <button onClick={google} className="flex-1 bg-white/20 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-white/30 transition">
              Sign in with Google
            </button>
          </div>
          <p className="text-white/70 text-center mt-4 text-sm">
            Don't have an account?{" "}
            <Link to='/singup'>SingUp</Link>
            {/* <Link to='/' className="text-blue-300 hover:underline">
              Sign up
            </Link> */}
          </p>
        </div>
      </div>
    </div>
  );
};


export default LogIn;