import Calender from "../components/calender/Calender";
// import Chat from "../components/chat/Chat";
// import Mail from "../components/mail/Mail";

import OverView from "../components/overview";
import CreateProduct from "../components/products/CreateProduct";
import EditProject from "../components/products/EditProject";
import Products from "../components/products/Products";
import ShowProject from "../components/products/ShowProject";
import Profile from "../components/profile";
import EditProfile from "../components/profile/EditProfile";

export const LearderRoutes =[
    {
        path: '/',
        element:<OverView/>
    },
 
    
    {
        path:'/dashboard/calendar',
        element: <Calender/>
    },
   

    {
        path:'/dashboard/products',
        element:<Products/>
    },
    {
        path:'/dashboard/products/create',
        element:<CreateProduct/>
    },
    {
        path:'/dashboard/products/edit/:id',
        element: <EditProject/>
    },
    {
        path:'/dashboard/products/:id',
        element:<ShowProject/>
    },
    {   
        path: '/employee/profile',
        element: <Profile/>
    },
    {
        path: '/employee/setting',
        element: <EditProfile/>
    }
    
]