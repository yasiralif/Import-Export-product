import { createBrowserRouter } from "react-router";
import RootLayOut from "../RootLayOut/RootLayOut";
import Home from "../Pages/Home";
import AllProducts from "../Pages/AllProducts";
import MyExports from './../Pages/MyExports';
 import MyImport from './../Pages/MyImport';
import AddExports from "../Pages/AddExports";
import LogIn from "../Pages/LogIn";
import SingUp from "../Pages/SingUp";


const Router = createBrowserRouter([
    {
        path:'/' , Component: RootLayOut,
        children: [
            { index: true, Component: Home },
            { path:'/all-products', element: <AllProducts></AllProducts>},
           
          
             { path:'/my-exports', element: <MyExports></MyExports>},
               { path:'/my-import', element: <MyImport></MyImport>},
            { path:'/add-export', element: <AddExports></AddExports> },
            {path:'/login', element:<LogIn></LogIn>},
            {path:'/singup', element:<SingUp></SingUp>}


        ]
    }
])

export default Router;