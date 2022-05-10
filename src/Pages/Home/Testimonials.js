import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            location: "Sydne, Australia"
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            location: "California, USA"
        },
        {
            _id: 3,
            name: "Winson Herry",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            location: "Sydne, Australia"
        },
    ]
    return (
        <div className='px-12 my-20'>
            <div className='flex justify-between'>
            <div>
                <h3 className='text-primary font-bold text-xl'>Testimonials</h3>
                <h2 className='text-4xl'>What Our Patients Say</h2>
            </div>
            <div>
                <img className='w-24 lg:w-48' src={quote} alt="" />
            </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonials;