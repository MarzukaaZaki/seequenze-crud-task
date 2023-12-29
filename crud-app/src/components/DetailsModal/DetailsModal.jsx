import React from 'react';
import { IoIosClose } from "react-icons/io";
const DetailsModal = ({ isVisible, onClose, extDataImg }) => {
    const { id, author, width, height, url, download_url } = extDataImg;
    if(!isVisible) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-full md:w-1/2 flex flex-col'>
                <button className='text-white bg-red-500 rounded-xl text-xl place-self-end mb-2' onClick={()=>onClose()}><IoIosClose/></button>
                <div className='bg-white flex gap-2 p-3 rounded'>
                    <img src={download_url} className='w-1/2 rounded'/>
                    <div>
                        <p className='text-primary border-t-2 border-b-2 font-bold text-xs mb-3 px-2 py-1 rounded-xl w-20'>Id# {id}</p>
                        <p className='text-xl font-bold'>Image By: {author}</p>
                        <p>Width: {width}</p>
                        <p>Height: {height}</p>
                        <p className='break-all'>{url}</p>
                        <p className='break-all'>{download_url}</p>
                    </div>
                    
                 
                </div>

            </div>

        </div>
    );
};

export default DetailsModal;