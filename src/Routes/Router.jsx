import { createBrowserRouter } from "react-router";
import RootLayOut from "../RootLayOut/RootLayOut";
import Home from "../Pages/Home";


const Router = createBrowserRouter([
    {
        path:'/' , Component: RootLayOut,
        children: [
            { index: true, Component: Home },
        ]
    }
])

export default Router;