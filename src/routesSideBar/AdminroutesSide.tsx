
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBagShopping,
  faCalendarMinus,
  faClipboardList,
  faEnvelope,
  faMessage,
  faUserGroup,
  faBuilding,
  faCalendarWeek
} from '@fortawesome/free-solid-svg-icons'

 const OverView =[
    {
        path:'/',
        name: 'OverView',
        element: <FontAwesomeIcon icon={faClipboardList}/>
    },

 ]
 const AdminRoutesSideApp =[
    {
        path:'/todo',
        name: 'Todo',
        element: <FontAwesomeIcon icon={faClipboardList}/>
    },
    {
        path:'/dashboard/chat',
        name: 'Chat',
        element: <FontAwesomeIcon icon={faMessage}/>
    },
    {
        path:'/dashboard/calendar',
        name: 'Calendar',
        element: <FontAwesomeIcon icon={faCalendarMinus}/>
    },
    {
        path:'/dashboard/mail',
        name: 'Mail',
        element: <FontAwesomeIcon icon={faEnvelope}/>
    },
   
]
 const AdminRoutesSideManager =[
    
    {
        path:'/dashboard/members',
        name: 'Members',
        element: <FontAwesomeIcon icon={faUserGroup}/>
    },
    {
   
        path:'/dashboard/products',
        name: 'Products',
        element: <FontAwesomeIcon icon={faBagShopping}/>
    },
    {
        path:'/dashboard/attendance',
        name: 'Total Data Attendance',
        element: <FontAwesomeIcon icon={faBuilding}/>
    },
    {
        path: '/employee/attendance',
        name: "Data Attendance",
        element: <FontAwesomeIcon icon={faCalendarWeek}/>
    },
    {
        path: '/dashboard/dayoff',
        name: "Day Off",
        element: <FontAwesomeIcon icon={faCalendarWeek}/>
    }
]

export const AddminRoutesSide=[
    {
        routes: OverView,
        title: 'OverView'
    },
    {
        routes:AdminRoutesSideApp,
        title: 'Apps'
        
    },
    {
       routes: AdminRoutesSideManager,
       title: "Manager"
    }
]