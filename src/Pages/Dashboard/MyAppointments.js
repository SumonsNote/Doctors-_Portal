import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data))
        }
    }, [user])
    return (
        <div>
            <h2>My Appointments: {appointments.length}</h2>

            <div class="overflow-x-auto mt-5">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                         appointments.map(a => <tr>
                            <th>{a.patientName}</th>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                        </tr>)   
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;