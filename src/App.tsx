import React from 'react';
import Sidebar from './components/sidebar';
import Main from './components/mainApp'
import { BrowserRouter } from 'react-router-dom'

import './index.css';
function App() {
  return (
    <div className=" grid lg:grid-cols-7">
    <BrowserRouter>
        <Sidebar />

        <Main/>
      </BrowserRouter>

       
      
     
    </div>
  );
}

export default App;
