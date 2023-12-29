import React from 'react';
import { IoIosClose } from "react-icons/io";
const InfoModal = ({isVisible, onClose, extDataImg}) => {
    const {id,  author, width, height, url, download_url} = extDataImg;
    if(!isVisible) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-full md:w-1/2 flex flex-col'>
                <button className='text-white bg-red-500 rounded-xl text-xl place-self-end mb-2' onClick={()=>onClose()}><IoIosClose/></button>
                <div className='bg-white  md:flex flex-col items-center justify-center gap-2 rounded p-2'>
                    <img src={download_url} className='md:w-2/3 w-full h-1/2 rounded border-2 px-3 py-2'/>
                    <div>
                        <p className='text-primary border-t-2 border-b-2 font-bold text-xs mb-3 px-2 py-1 rounded-xl '>Id# {id}</p>
                        <p className='text-xl font-bold'>Image By: {author}</p>
                        <p> <strong>Width</strong>: {width}</p>
                        <p><strong>Height</strong>: {height}</p>
                        <p className='break-all'><strong>Source URL</strong>: {url}</p>
                        <p className='break-all'><strong>Download URL</strong>: {download_url}</p>
                    </div>
                    
                 
                </div>

            </div>

        </div>
    );
};

export default InfoModal;