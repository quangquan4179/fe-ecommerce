import Calender from "../components/calender/Calender";
// import Chat from "../components/chat/Chat";
// import Mail from "../components/mail/Mail";
import OverView from "../components/overview";
import Profile from "../components/profile";
import EditProfile from "../components/profile/EditProfile";


export const UserRoutes =[
    {
        path: '/',
        element:<OverView/>
    },

    {
        path:'/employee/calendar',
        element: <Calender/>
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