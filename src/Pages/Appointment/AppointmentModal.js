import React from 'react';
import { format } from 'date-fns';

const AppointmentModal = ({ treatment, date, setTreatment }) => {
    const {_id, name, slots } = treatment;

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot)
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-5'>
                        <input type="text" name='date' disabled value={format(date, 'PPPP')} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot =><option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Your name" name='name' class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Your email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='number' placeholder="Your number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Type here" class="input input-bordered w-full max-w-xs btn btn-secondary text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;