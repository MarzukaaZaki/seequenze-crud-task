import React, { useState } from 'react';
import { MdOutlineModeEditOutline, MdOutlineDeleteOutline } from "react-icons/md";
import DetailsModal from '../DetailsModal/DetailsModal';

const Card = ({ extDataImg }) => {
    const [showDetails, setShowDetails] = useState(false)
    const { author, download_url } = extDataImg;
    return (
        <>
        <div className='bg-white flex flex-col items-center justify-center rounded-lg p-2'>
            <img src={download_url} className='w-full rounded-lg' />
            <p className='font-semibold py-3'>{author}</p>
            <button className='w-full bg-primary text-white rounded-lg py-2'
           onClick={()=>setShowDetails(true)}> View Details</button>
           
            <div className='flex md:flex-row flex-col w-full'>
                <button className='bg-black text-white rounded-lg my-2 px-4 py-2 me-2 flex'>  Edit Details<MdOutlineModeEditOutline className='mt-1 ms-2' /> </button>
                <button className='bg-black text-white rounded-lg my-2 px-4 py-2 me-2 flex'>  Move to Trash<MdOutlineDeleteOutline className='mt-1 ms-2' /> </button>


            </div>
            

        </div>
        
        <DetailsModal extDataImg={extDataImg} isVisible={showDetails} onClose={()=>setShowDetails(false)}/>
        </>
    );
};

export default Card;