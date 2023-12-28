import React, { useState } from 'react';
import { MdFeedback } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import { RiAppsFill } from "react-icons/ri";
import { TbAppsFilled, TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import {  IoMdPlayCircle, IoMdHelpCircle  } from "react-icons/io";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <>
        {
            showSidebar ?
            <div className="fixed z-40 left-0 h-full lg:w-1/6 sm:w-1/2 bg-white text-gray-400 shadow-lg flex flex-col justify-between">
        
                
                   
                <div className="px-4">
                    <hr className='border-t-2 border-gray-200'/>
                    <Link to='/' className='flex my-5'> <FaDatabase className='mt-1 me-3'/> My Projects</Link>
                    <Link to='/' className='flex my-5'> <RiAppsFill className='mt-1 me-3'/>Sample Projects</Link>
                    <hr className='border-t-2 border-gray-200'/>
                    <Link to='/' className='flex my-5'> <TbAppsFilled className='mt-1 me-3'/> Apps </Link>
                    <Link to='/' className='flex my-5'> <IoMdPlayCircle className='mt-1 me-3'/> Intro to Necleo</Link>
                    
                </div>
                <div className="p-4">
                   
                    <Link to='/' className='flex my-5'> <IoMdHelpCircle className='mt-1 me-3'/> Help & Support</Link>
                    <Link to='/' className='flex my-5'> <MdFeedback className='mt-1 me-3'/>Feedback</Link>
                    <button onClick={toggleSidebar} className='flex mb-5'> <TbLayoutSidebarLeftCollapseFilled className='mt-1 me-3'/> Collapse</button>
                    <Link to='/' className='flex mb-5 text-black'> <TbLayoutSidebarLeftCollapseFilled className='mt-1 me-3'/> Collapse</Link>
                </div>
                
               
            </div> 
            :
            <button onClick={toggleSidebar} className='flex mb-5 bottom-0 p-4'> <TbLayoutSidebarLeftExpandFilled className='mt-1 me-3'/> </button>
            }




           
        </>
    );
};

export default Sidebar;