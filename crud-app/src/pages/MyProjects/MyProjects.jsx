import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HiDocumentAdd } from "react-icons/hi";
import './MyProjects.css'
import Card from '../../components/Card/Card';
import CreateModal from '../../components/CreateModal/CreateModal';
const MyProjects = () => {
    const [extData, setExtData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState();
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        fetchExtApiData();
    }, [])

    const fetchExtApiData = async () => {
        try {
            const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=6');
            setExtData(response.data);
        } catch (error) {
            setErrorMessage('Failed to fetch data from external API!');
            console.log(errorMessage)
        }
    }
    return (
        <>
        
        <div className='lg:ml-40 sm:ml-20'>
            <h2 className='font-bold text-2xl'> My Projects</h2>
            <div className='bg-white rounded-md text-center font-bold mb-8 text-sm create-project-box my-4'>
                <div className='bg-secondary flex items-center justify-center create-project-small-box rounded-md'>
                    <HiDocumentAdd className='text-white w-10 h-10' />
                </div>
                <button className='my-2' onClick={()=>setShowForm(true)}>Create a new project</button>
                <p className='text-xs'> or  try a <span className='text-primary'>sample project</span></p>
            </div>
            <hr className='mb-4 border-t-2 shadow-md'/>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-4'>
                {


                    extData.map(extDataImg => <Card key={extDataImg.id} extDataImg={extDataImg}></Card>)

                }
            </div>
        </div>
        
        <CreateModal isVisible={showForm} onClose={()=> setShowForm(false)}/>
        </>
    );
};

export default MyProjects;