import React from 'react';
import { IoIosClose } from "react-icons/io";
const CreateModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-full md:w-1/2 flex flex-col'>
                <button className='text-white bg-red-500 rounded-xl text-xl place-self-end mb-2' onClick={() => onClose()}><IoIosClose /></button>
                <div className='bg-white flex flex-col gap-2 p-3 rounded'>

                    <h2 className='text-2xl text-center font-bold mt-3 '> Create a New Project </h2>
                    <hr className='mb-3' />
                    <input className='px-4 py-2 bg-gray-100 rounded me-3 mb-3 w-full shadow-md'></input>
                    <div className='flex mb-3'>
                        <input className='px-4 py-2 bg-gray-100 rounded me-3 w-full shadow-md'></input>
                        <input className='px-4 py-2 bg-gray-100 rounded me-3 w-full shadow-md'></input>
                    </div>
                    <input className='px-4 py-2 bg-gray-100 rounded me-3 mb-3 w-full shadow-md'></input>
                    <input className='px-4 py-2 bg-gray-100 rounded me-3 mb-3 w-full shadow-md'></input>
<button className='w-full bg-black text-white py-2 rounded uppercase mb-3'> Create Project</button>
                </div>

            </div>

        </div>
    );
};

export default CreateModal;