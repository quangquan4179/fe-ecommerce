import Calender from "../components/calender/Calender";
import Chat from "../components/chat/Chat";
import Dataworking from "../components/dataworkings";
import Mail from "../components/mail/Mail";
import OverView from "../components/overview";
import Profile from "../components/profile";
import EditProfile from "../components/profile/EditProfile";

import Todos from "../components/todo/Todos";

export const UserRoutes =[
    {
        path: '/',
        element:<OverView/>
    },
    {
        path:'/employee/todo',
        element: <Todos/>
    },
    {
        path:'/employee/chat',
        element: <Chat/>
    },
    {
        path:'/employee/calendar',
        element: <Calender/>
    },
    {
        path: '/employee/mail',
        element:<Mail/>
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