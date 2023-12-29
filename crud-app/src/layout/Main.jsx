import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';
import Sidebar from '../components/shared/Sidebar/Sidebar';
import './Main.css'
const Main = () => {
    return (
        <div className='bg-background'>
            <Navbar/>
            <Sidebar/>
            <div className='main-content'>
               <Outlet/> 
            </div>
           
        </div>
    );
};

export default Main;