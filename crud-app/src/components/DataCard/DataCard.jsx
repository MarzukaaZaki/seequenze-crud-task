import React, { useState } from 'react';
import { MdOutlineModeEditOutline, MdOutlineDeleteOutline } from "react-icons/md";
import DetailsModal from '../DetailsModal/DetailsModal';
import axios from 'axios';
import Swal from 'sweetalert2';
import EditModal from '../EditModal/EditModal';
const DataCard = ({fetchData, dataImg}) => {

    const [showDetails, setShowDetails] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
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
                const response = await axios.delete(`https://crud-app-server-swart.vercel.app/delete/${_id}`);
                const data = response.data;
        
                if (data.deletedCount > 0) {
                  
                  Swal.fire('Deleted!', 'Your entry has been deleted.', 'success');
                  fetchData();
                }
              } catch (error) {
                
                  // that falls out of the range of 2xx
                  console.error('Server responded with an error:', error.response.data);
               
                
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
                    <button onClick={()=>setShowEditModal(true) } className='bg-black text-white rounded-lg my-2 px-4 py-2 me-2 flex'>  Edit Details<MdOutlineModeEditOutline className='mt-1 ms-2' /> </button>
                    <button onClick={()=>handleDelete(_id)} className='bg-black text-white rounded-lg my-2 px-4 py-2 me-2 flex'>  Move to Trash<MdOutlineDeleteOutline className='mt-1 ms-2' /> </button>


                </div>


            </div>
            <DetailsModal dataImg={dataImg} isVisible={showDetails} onClose={()=>setShowDetails(false)} />
            <EditModal editInfo={showEditModal} onClose={()=>setShowEditModal(false)}  dataImg={dataImg} fetchData={fetchData}/>
        </div>
    );
};

export default DataCard;