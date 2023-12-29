import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card'
import axios from 'axios';
import './SampleProjects.css'
import InfoModal from '../../components/InfoModal/InfoModal';
const SampleProjects = () => {
    const [extData, setExtData] = useState([]);

    useEffect(() => {
        fetchExtApiData();
    }, [])
    const fetchExtApiData = async () => {
        try {
            const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=6');
            setExtData(response.data);
        } catch (error) {

            alert('Server encountered error in fetching data from external API')
        }
    }
    return (
        <div className='lg:ml-40 sm:ml-20'>
            <h2 className='font-bold text-2xl mb-2'> Sample Projects</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-4'>
                {


                    extData.map(extDataImg => <Card key={extDataImg.id} extDataImg={extDataImg} />)

                }
            </div>
            
        </div>

    );
};

export default SampleProjects;