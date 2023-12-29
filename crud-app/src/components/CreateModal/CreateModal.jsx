import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";



const CreateModal = ({ isVisible, onClose }) => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = async(data) => {
        try{
            const response = await axios.post('http://localhost:5000/addphoto', data, {
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            const photos = response.data;
            console.log(photos);
            if(photos.insertedId){
                alert('Data inserted successfully!')
            }
            reset();
            

            
        }catch(error){
            if(error){
                console.log('Server responded with an error');
                alert('Server responded with an error');
            }
        }

    };
    if (!isVisible) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-full md:w-1/2 flex flex-col'>
                <button className='text-white bg-red-500 rounded-xl text-xl place-self-end mb-2' onClick={() => onClose()}><IoIosClose /></button>
                <div className='bg-white flex flex-col gap-2 p-6 rounded'>

                    <h2 className='text-2xl text-center font-bold mt-3 '> Create a New Project </h2>
                    <hr className='mb-3' />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('author_name', {required: true})} type='text' className='px-4 py-2 bg-gray-100 rounded me-3 mb-3 w-full shadow-md border-t' placeholder='author name' />
                        {errors.author_name && <span className='text-xs text-red-600'>Author name is required</span>}
                        <div className='flex mb-3 gap-4'>
                            <div>
                                 <input {...register('width', { required: true })} type='number' className='px-4 py-2 bg-gray-100 rounded me-3 w-full shadow-md border-t' placeholder='width' />
                            {errors.width && <span className='text-xs text-red-600'>Width is required</span>}
                            </div>
                           
                            <div>
                                <input {...register('height', { required: true })} type='number' className='px-4 py-2 bg-gray-100 rounded me-3 w-full shadow-md border-t' placeholder='height' />
                            {errors.height && <span className='text-xs text-red-600'>Height name is required</span>}
                            </div>
                            
                        </div>
                        <input {...register('url', { required: true })} type='text' className='px-4 py-2 bg-gray-100 rounded me-3 mb-3 w-full shadow-md border-t' placeholder='source url' />
                        {errors.url && <span className='text-xs text-red-600'>URL name is required</span>}
                        
                        <input  {...register('download_url', { required: true })} type='text' className='px-4 py-2 bg-gray-100 rounded me-3 mb-3 w-full shadow-md border-t' placeholder='download url' />
                        {errors.download_url && <span className='text-xs text-red-600'>Download URL name is required</span>}
                        <input type='submit' className='w-full bg-black text-white py-2 rounded uppercase mb-3' value='Create Project' />
                    </form>

                </div>

            </div>

        </div>
    );
};

export default CreateModal;