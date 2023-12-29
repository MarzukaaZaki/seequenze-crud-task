import React, { useState } from 'react';
import { MdOutlineModeEditOutline, MdOutlineDeleteOutline } from "react-icons/md";
import DetailsModal from '../DetailsModal/DetailsModal';
import InfoModal from '../InfoModal/InfoModal';

const Card = ({ extDataImg }) => {
{/** Single Card to show External API Data Details */}
    const { author, download_url } = extDataImg;
    const [showForm, setShowForm] = useState(false);
    return (
        <>
        <div className='bg-white flex flex-col items-center justify-center rounded-lg p-2'>
            <img src={download_url} className='w-full rounded-lg' />
            <p className='font-semibold py-3'>{author}</p>
            <button onClick={()=>setShowForm(true)} className='w-full bg-primary text-white rounded-lg py-2'
           > View Details</button>
           
            
            

        </div>
        <InfoModal extDataImg={extDataImg} isVisible={showForm} onClose={()=>setShowForm(false)}  />
        
        </>
    );
};

export default Card;