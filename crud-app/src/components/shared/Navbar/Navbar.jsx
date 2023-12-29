import React from 'react';
import logoImg from '../../../assets/logo/logo.png'
import userImg from '../../../assets/user/user1.jpg'
import './Navbar.css'
import { FaCaretDown } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className="p-4 flex items-center justify-between bg-white shadow-sm">
            <div className="flex items-center">
                
                <img src={logoImg} alt="Logo" className="logo-img mr-4" />

            </div>
            <div className="px-2 flex items-center">
                <div className='px-2'>
                 <p> <span className='font-semibold'>Free Trial </span>| 2days left</p>   
                 <p className='text-primary'> Extend free trial</p>
                </div>
                
                
                <img src={userImg} alt="Rounded Image" className="profile-img rounded-full" />
                <FaCaretDown/>
            </div>
        </nav>
    );
};

export default Navbar;