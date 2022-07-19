
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBagShopping,
  faCalendarMinus,
  faClipboardList,
  faEnvelope,
  faMessage,
  
} from '@fortawesome/free-solid-svg-icons'

const OverView =[
    {
        path:'/',
        name: 'OverView',
        element: <FontAwesomeIcon icon={faClipboardList}/>
    },

 ]
 const UserRoutesSideApp =[
    {
        path:'/employee/todo',
        name: 'Todo',
        element: <FontAwesomeIcon icon={faClipboardList}/>
    },
    
    {
        path:'/employee/calendar',
        name: 'Calendar',
        element: <FontAwesomeIcon icon={faCalendarMinus}/>
    },
    
   
]
 const UserRoutesSideManager =[
    {
   
        path:'/employee/attendance',
        name: 'Data Attendance',
        element: <FontAwesomeIcon icon={faBagShopping}/>
    }
]

export const UserRoutesSide=[
    {
        routes: OverView,
        title: 'OverView'
    },
    {
        routes:UserRoutesSideApp,
        title: 'Apps'
        
    },
    {
       routes: UserRoutesSideManager,
       title: "Manager"
    }
]