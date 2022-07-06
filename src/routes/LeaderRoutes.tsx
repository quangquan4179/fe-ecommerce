import Calender from "../components/calender/Calender";
import Chat from "../components/chat/Chat";
import Dataworking from "../components/dataworkings";
import Mail from "../components/mail/Mail";
// import AddMembers from "../components/members/AddMembers";
// import EditMember from "../components/members/EditMember";
// import Members from "../components/members/Members";
// import ShowMember from "../components/members/ShowMember";
import OverView from "../components/overview";
import CreateProduct from "../components/products/CreateProduct";
import Products from "../components/products/Products";
import Profile from "../components/profile";
import EditProfile from "../components/profile/EditProfile";
import Todos from "../components/todo/Todos";
// import TotalDataWorking from "../components/totalDataWorking";

export const LearderRoutes =[
    {
        path: '/',
        element:<OverView/>
    },
    {
        path:'/dashboard/todo',
        element: <Todos/>
    },
    {
        path:'/dashboard/chat',
        element: <Chat/>
    },
    {
        path:'/dashboard/calendar',
        element: <Calender/>
    },
    {
        path: '/dashboard/mail',
        element:<Mail/>
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
        path: '/employee/attendance',
        element: <Dataworking/>
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