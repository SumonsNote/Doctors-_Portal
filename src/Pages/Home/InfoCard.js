import React from 'react';

const InfoCard = ({img, cardTitle, bgClass, des}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pt-5'>
            <img style={{width: "70px", marginLeft: '20px'}} src={img} alt="Album"/>

            </figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{des}</p>
            </div>
        </div>
    );
};

export default InfoCard;