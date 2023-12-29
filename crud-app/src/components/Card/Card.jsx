import React, { useState } from 'react';
import { MdOutlineModeEditOutline, MdOutlineDeleteOutline } from "react-icons/md";
import DetailsModal from '../DetailsModal/DetailsModal';

const Card = ({ extDataImg }) => {
    
    const { author, download_url } = extDataImg;
   
    return (
        <>
        <div className='bg-white flex flex-col items-center justify-center rounded-lg p-2'>
            <img src={download_url} className='w-full rounded-lg' />
            <p className='font-semibold py-3'>{author}</p>
            <button className='w-full bg-primary text-white rounded-lg py-2'
           onClick={()=>setShowDetails(true)}> View Details</button>
           
            
            

        </div>
        
        
        </>
    );
};

export default Card;