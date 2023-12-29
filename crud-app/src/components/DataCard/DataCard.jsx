import React, { useState } from 'react';
import { MdOutlineModeEditOutline, MdOutlineDeleteOutline } from "react-icons/md";
import DetailsModal from '../DetailsModal/DetailsModal';
import axios from 'axios';
import Swal from 'sweetalert2';
const DataCard = ({dataImg}) => {
    const [showDetails, setShowDetails] = useState(false)
    const { _id, author_name, download_url } = dataImg;
    const handleDelete =async (_id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                const response = await axios.delete(`http://localhost:5000/carts/${_id}`);
                const data = response.data;
        
                if (data.deletedCount > 0) {
                  
                  Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                }
              } catch (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.error('Server responded with an error:', error.response.data);
                  console.error('Status code:', error.response.status);
                  // Handle specific error cases here if needed
                } else if (error.request) {
                  // The request was made but no response was received
                  console.error('No response received:', error.request);
                } else {
                  // Something happened in setting up the request that triggered an error
                  console.error('Error setting up the request:', error.message);
                }
                // Handle error gracefully (show error message, log, etc.)
                // Example: Swal.fire('Error', 'Failed to delete. Please try again.', 'error');
              }
            }
          });
    }
    return (
        <div>
            <div className='bg-white flex flex-col items-center justify-center rounded-lg p-2'>
                <img src={download_url} className='w-full max-h-40 rounded-lg' />
                <p className='font-semibold py-3'>{author_name}</p>
                <button className='w-full bg-primary text-white rounded-lg py-2'
                    onClick={() => setShowDetails(true)}> View Details</button>

                <div className='flex md:flex-row flex-col w-full'>
                    <button className='bg-black text-white rounded-lg my-2 px-4 py-2 me-2 flex'>  Edit Details<MdOutlineModeEditOutline className='mt-1 ms-2' /> </button>
                    <button onClick={()=>handleDelete(_id)} className='bg-black text-white rounded-lg my-2 px-4 py-2 me-2 flex'>  Move to Trash<MdOutlineDeleteOutline className='mt-1 ms-2' /> </button>


                </div>


            </div>
            <DetailsModal dataImg={dataImg} isVisible={showDetails} onClose={()=>setShowDetails(false)}/>
        </div>
    );
};

export default DataCard;