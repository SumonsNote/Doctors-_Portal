import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InfoCard bgclassName="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" des="Lorem Ipsum is simply dummy text of the pri" img={clock}></InfoCard>
            <InfoCard bgclassName="bg-[#3A4256]" des="Brooklyn, NY 10036, United States" cardTitle="Visit our location" img={marker}></InfoCard>
            <InfoCard bgclassName="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact us now" des="+000 123 456789" img={phone}></InfoCard>
        </div>
    );
};

export default Info;