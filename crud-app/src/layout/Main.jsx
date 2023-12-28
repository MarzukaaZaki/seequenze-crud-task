import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';
import Sidebar from '../components/shared/Sidebar/Sidebar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <div className='flex items-center justify-center'>
               <Outlet/> 
            </div>
           
        </div>
    );
};

export default Main;