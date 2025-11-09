import { Eye, EyeOff } from 'lucide-react';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import auth from './../Firebase/Frirebase.config';
import { AuthContext } from '../Context/AuthContext';
const SingUp = () => {
  const {googleLogin,emailLogin, user, setuser}=useContext(AuthContext)
  // console.log(user);

  const handleSubmit=(e)=>{
    e.preventDefault()
           const email =e.target.email.value;
        //  const pohtoUrl =e.target.pohtoUrl.value;
        //  const name =e.target.name.value;
   const password =e.target.password.value;
   console.log(email, password);

    emailLogin(email,password)
    .then(res=>{
      setuser(res.user)
      alert('succesfully login')
    })
    .catch(err=>{
     alert(err.code)
    console.log(err);

    })
  }
     const google = () => {
    googleLogin().then(res => {
      setuser(res.user)
     alert('succesfully login')
    }).catch(err => {
      alert(err.code)
      
    })}
  


//  const{createuser, user,setuser,googleLogin,gitLonIn,updateUserProfile,loading, setloading}=use(AuthContext)
// const location =useLocation();
//   const handleSubmit=(e)=>{
//       e.preventDefault()
//          const email =e.target.email.value;
//          const pohtoUrl =e.target.pohtoUrl.value;
//          const name =e.target.name.value;
//    const password =e.target.password.value;
//       const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//   if (!passwordRegex.test(password)) {
//       toast.error("Password must have at least 8 characters, 1 uppercase, 1 lowercase, 1 number & 1 special symbol!");
//       return;
//     }
//    const from = location.state?.from|| "/";
//   createuser(email, password)
//   .then(result=>{
//     updateUserProfile(name, pohtoUrl)
//     setuser(result.user);
//     toast.success("successfully create an account")
//   })
//   .catch(err=>{
   
//   if(err.code=='auth/email-already-in-use'){
//      toast.error('auth/email-already-in-use')
//   }
   
//   })

//   }


  // show toggle
    const [showPassword, setShowPassword] = useState(false);
  const handleToggle=()=>{
    setShowPassword(!showPassword)
  }

  //google sing in
//     const google = () => {
//     googleLogin().then(res => {
//       navigate(from, { replace: true });
//       toast.success("You Are SuccessFully Log In With Google")
//     }).catch(err => {
      
//     })
//   }
//   if(loading){
//     <span className="loading loading-ring loading-xl"></span>
//   }

  
//   if (user) {
  
//     return <MyProfile user={user} setuser={setuser}></MyProfile>;
//   }

 
    return (
    

 <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-300">
      <div className="hero-content flex-col lg:flex-row-reverse">
           
        {/* Left Text Section */}
        <div className="text-center lg:text-left text-white max-w-md">
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          <p className="py-4">
            Create your account to explore our awesome features and connect with your community.
          </p>
          <p>
            Already have an account?{" "}
            <NavLink to="/login" className="underline font-semibold text-white">
              Login
            </NavLink>
          </p>
        </div>

        {/* Signup Card */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
           <form onSubmit={handleSubmit} >
             <fieldset className="fieldset">
              <label className="label">Full Name</label>
              <input type="text"  className="input" name='name' placeholder="Type Your name" />
              <label className="label">Photo Url</label>
              <input type="text"  className="input" name='pohtoUrl' placeholder="Enter your Image Url" />

              <label className="label">Email</label>
              <input type="email" className="input" name='email'  placeholder="Email" />

              <label className="label">Password</label>
              <div className='relative   items-center'>
                 <input     className="input input-bordered w-full " type={showPassword ? 'text' : 'password'}  name='password' placeholder="Password" />
                      <div
        onClick={handleToggle}
       className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 z-10 hover:text-gray-700"
      >
        {showPassword ? <Eye /> : <EyeOff />}
      </div>
              </div>
             

           
              <button className="btn btn-primary mt-4">Sign Up</button>
            </fieldset>

           </form>
            <div className="divider">OR</div>

            <button onClick={google} className="btn btn-outline w-full mb-2">
              Continue with Google
            </button>
            {/* <button onClick={gitLonIn} className="btn btn-outline w-full">
              Continue with GitHub
            </button> */}
          </div>
        </div>
      </div>
    </div>
    );
};

export default SingUp;