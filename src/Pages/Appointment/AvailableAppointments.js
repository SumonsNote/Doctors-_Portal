import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Services from './Services';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='my-5'>
            <h2 className='text-center text-secondary text-xl font-bold'>Available Appointments: {format(date, 'PPPP')}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-5'>
                {
                    services.map(service => <Services
                        key={service._id}
                        service={service}
                    ></Services>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;