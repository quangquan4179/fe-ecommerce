import Calender from "../components/calender/Calender";
import Chat from "../components/chat/Chat";

import Mail from "../components/mail/Mail";
import AddMembers from "../components/members/AddMembers";
import EditMember from "../components/members/EditMember";
import Members from "../components/members/Members";
import ShowMember from "../components/members/ShowMember";
import OverView from "../components/overview";
import CreateProduct from "../components/products/CreateProduct";
import Products from "../components/products/Products";
import ShowProject from "../components/products/ShowProject";
import Profile from "../components/profile";
import EditProfile from "../components/profile/EditProfile";

import TotalDataWorking from "../components/totalDataWorking";

export const AdminRoutes =[
    {
        path: '/',
        element:<OverView/>
    },
 
  
  
    {
        path:'/dashboard/members',
        element: <Members/>
    },
    {
        path:'/dashboard/members/:id/edit',
        element: <EditMember/>
    },
    {
        path:'/dashboard/members/:id',
        element:<ShowMember/>
    },
    {
        path:'/dashboard/members/add',
        element:<AddMembers/>
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
    },
];