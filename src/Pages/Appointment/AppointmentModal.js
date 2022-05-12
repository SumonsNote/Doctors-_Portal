import React from 'react';
import { format } from 'date-fns';
import auth from '../../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const AppointmentModal = ({ treatment, date, setTreatment }) => {
    const {_id, name, slots } = treatment;

    const [user] = useAuthState(auth);

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot)
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-5'>
                        <input type="text" name='date' disabled value={format(date, 'PPPP')} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) =><option 
                                key={index}
                                value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" disabled value={user?.displayName || ''} name='name' className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='number' placeholder="Your number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Type here" className="input input-bordered w-full max-w-xs btn btn-secondary text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;