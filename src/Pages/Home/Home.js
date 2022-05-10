import React from 'react';
import Banner from '../Banner';
import AppointmentSection from './AppointmentSection';
import DentalSection from './DentalSection';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalSection></DentalSection>
            <AppointmentSection></AppointmentSection>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;