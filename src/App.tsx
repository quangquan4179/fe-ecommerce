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
import { ToastContainer } from 'react-toastify';
import { Layout, Menu } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
function App() {
  const [component, setComponent] = useState<ReactNode>();
  const getCurrentView = () => {
    if(Authstore.user){
         return(
          <BrowserRouter>
            <Sidebar OurRoutes={AddminRoutesSide} />
            <Main routes={AdminRoutes} />
          </BrowserRouter> 
         )
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
    <Layout  hasSider  >
      
        {component}
       
    <ToastContainer/>
    </Layout>
  );
}

export default observer(App);
