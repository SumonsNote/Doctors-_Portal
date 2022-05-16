import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AppointmentModal from './AppointmentModal';
import Services from './Services';
import Loading from './../Shared/Loading';

const AvailableAppointments = ({date}) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://dry-tundra-71495.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='my-5'>
            <h2 className='text-center text-secondary text-xl font-bold'>Available Appointments: {format(date, 'PPPP')}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-5'>
                {
                    services.map(service => <Services
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Services>)
                }
            </div>
            {treatment && <AppointmentModal
            treatment={treatment}
            date={date}
            setTreatment={setTreatment}
            refetch={refetch}
            ></AppointmentModal>}
        </div>
    );
};

export default AvailableAppointments;