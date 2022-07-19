
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
//  const AdminRoutesSideApp =[
//     {
//         path:'/dashboard/todo',
//         name: 'Todo',
//         element: <FontAwesomeIcon icon={faClipboardList}/>
//     },
   
//     {
//         path:'/dashboard/calendar',
//         name: 'Calendar',
//         element: <FontAwesomeIcon icon={faCalendarMinus}/>
//     },
   
   
// ]
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
   
]

export const AddminRoutesSide=[
    {
        routes: OverView,
        title: 'OverView'
    },
    {
       routes: AdminRoutesSideManager,
       title: "Manager"
    }
]