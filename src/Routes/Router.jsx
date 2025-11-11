import { createBrowserRouter } from "react-router";
import RootLayOut from "../RootLayOut/RootLayOut";
import Home from "../Pages/Home";
import AllProducts from "../Pages/AllProducts";
import MyExports from './../Pages/MyExports';
 import MyImport from './../Pages/MyImport';
import AddExports from "../Pages/AddExports";
import LogIn from "../Pages/LogIn";
import SingUp from "../Pages/SingUp";
import PrivateRoutes from "../PrivetRoutes/PrivateRoutes";
import AllProductsDetalis from "../Pages/AllProductDetalis/AllProductsDetalis";
// import P from "../Pages/Pet";
import Pet from "../Pages/Pet";


const Router = createBrowserRouter([
    {
        path:'/' , Component: RootLayOut,
        children: [
            { index: true, Component: Home },
            { path:'/all-products',
            loader:()=>fetch('http://localhost:3000/all-products'),
            element: <PrivateRoutes>
                <AllProducts></AllProducts>
            </PrivateRoutes>},
           
          
             { path:'/my-exports', element: <PrivateRoutes>
                <MyExports></MyExports>
             </PrivateRoutes>},
               { path:'/my-import', element:<PrivateRoutes>
                 <MyImport></MyImport>
               </PrivateRoutes>},
            { path:'/add-export', element: <PrivateRoutes>
                <AddExports></AddExports>
            </PrivateRoutes> },
            {path:'/login', element:<LogIn></LogIn>},
            {path:'/singup', element:<SingUp></SingUp>},
            // {
            //     path:'/all-product/:id', 
                
            //     loader:({params})=>fetch(`http://localhost:3000/all-products/${params.id}`),
            //     element:<AllProductsDetalis></AllProductsDetalis>
            // },
            {
                path:"/all-product/:id", Component: Pet,
                loader:({params})=>fetch(`http://localhost:3000/all-products/${params.id}`),
            }


        ]
    }
])

export default Router;