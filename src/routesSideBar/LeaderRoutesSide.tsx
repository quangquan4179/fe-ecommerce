
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBagShopping,
  faCalendarMinus,
  faClipboardList,
  faEnvelope,
  faMessage,
//   faUserGroup,
//   faBuilding,
  faCalendarWeek
} from '@fortawesome/free-solid-svg-icons'

 const OverView =[
    {
        path:'/',
        name: 'OverView',
        element: <FontAwesomeIcon icon={faClipboardList}/>
    },

 ]
 const LeaderRoutesSideApp =[
    {
        path:'/dashboard/todo',
        name: 'Todo',
        element: <FontAwesomeIcon icon={faClipboardList}/>
    },
    
    {
        path:'/dashboard/calendar',
        name: 'Calendar',
        element: <FontAwesomeIcon icon={faCalendarMinus}/>
    },
    
   
]
 const LeaderRoutesSideManager =[
    
    {
   
        path:'/dashboard/products',
        name: 'Products',
        element: <FontAwesomeIcon icon={faBagShopping}/>
    },

    {
        path: '/employee/attendance',
        name: "Data Attendance",
        element: <FontAwesomeIcon icon={faCalendarWeek}/>
    }
]

export const LeaderRoutesSide=[
    {
        routes: OverView,
        title: 'OverView'
    },
    {
        routes:LeaderRoutesSideApp,
        title: 'Apps'
        
    },
    {
       routes: LeaderRoutesSideManager,
       title: "Manager"
    }
]