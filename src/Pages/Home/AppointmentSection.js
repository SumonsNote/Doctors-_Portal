import React from 'react';
import appointment from '../../assets/images/appointment.png'
import doctorImg from '../../assets/images/doctor.png'
import PrimaryButton from './PrimaryButton';
const AppointmentSection = () => {
    return (
        <div style={{background: `url(${appointment})`}} className='flex  justify-center items-center'>
            <div className='flex-1'>
                <img className='mt-[-100px] hidden lg:block' src={doctorImg} alt=""/>
            </div>
            <div className='flex-1 leading-5 px-12'>
                <h3 className='text-primary text-xl mb-2'>Appointment</h3>
                <h2 className='text-4xl text-white my-5'>Make an appointment Today</h2>
                <p className='text-xl text-white mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
    );
};

export default AppointmentSection;