import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyProjects = () => {
    const [extData, setExtData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState();

    useEffect(()=>{
        fetchExtApiData();
    }, [])

    const fetchExtApiData = async() =>{
        try{
            const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=6');
            setExtData(response.data);
        }catch(error){
            setErrorMessage('Failed to fetch data from external API!');
            console.log(errorMessage)
        }
    }
    return (
        <div>
            <div className='grid grid-cols-3 gap-6'>
            {
                

                extData.map(extDataImg => <p key={extDataImg.id} extDataImg={extDataImg}>{extDataImg.author}</p>)
                
            }
            </div>
        </div>
    );
};

export default MyProjects;