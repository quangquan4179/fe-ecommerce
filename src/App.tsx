import React,{useState, ReactNode, useEffect} from 'react';
import Sidebar from './components/sidebar';
import Main from './components/mainApp'
import { BrowserRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import './index.css';
import { AdminRoutes } from './routes/AdminnRoutes';
import { AddminRoutesSide } from './routesSideBar/AdminroutesSide';
import { UserRoutesSide } from './routesSideBar/UserSideRoutes'
import { LeaderRoutesSide} from './routesSideBar/LeaderRoutesSide'
import { UserRoutes } from './routes/UserRoutes';
import {LearderRoutes} from './routes/LeaderRoutes'
import Authentication from './modules/authentication/Authentication';
import Authstore from './stores/Authstore';
function App() {
  const [component, setComponent] = useState<ReactNode>();
  const getCurrentView = () => {
    if(Authstore.user){
      if(Authstore.user?. authorize===7){
         return(
          <BrowserRouter>
            <Sidebar OurRoutes={AddminRoutesSide} />
            <Main routes={AdminRoutes} />
          </BrowserRouter> 
         )
      }
      if(Authstore.user?. authorize===8){
        return(
          <BrowserRouter>
            <Sidebar OurRoutes={UserRoutesSide} />
            <Main routes={UserRoutes} />
          </BrowserRouter> 
        )
      }
      if(Authstore.user?.authorize===9){
        
          return(
            <BrowserRouter>
              <Sidebar OurRoutes={LeaderRoutesSide} />
              <Main routes={LearderRoutes} />
            </BrowserRouter> 
          )
        
      }
     
    }
    else{
      return <Authentication/>
    }
  }

  useEffect(()=>{
    setComponent(getCurrentView())
  },[Authstore.isAuthentication])

  useEffect(()=>{
    Authstore.loadUser()
  },[])
  return (
    <div className=" grid lg:grid-cols-7">
    {component}
    </div>
  );
}

export default observer(App);
