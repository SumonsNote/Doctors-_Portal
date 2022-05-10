import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl mt-5">
            <div class="card-body">
                <p>{review.review}</p>
            </div>
            <div className='flex items-center pl-5'>
                <div class="avatar">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={review.img} alt="" />
                    </div>
                </div>
                <div className='p-5'>
                    <h2 className='text-xl'>{review.name}</h2>
                    <span>{review.location}</span>
                </div>
            </div>
        </div>
    );
};

export default Review;