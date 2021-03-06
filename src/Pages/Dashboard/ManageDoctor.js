import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery('doctor', () => fetch('https://dry-tundra-71495.herokuapp.com/doctor', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>Manage Doctors: {doctors?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, index) => <DoctorRow 
                            key={doctor._id} 
                            doctor={doctor}
                            index={index}
                            refetch={refetch}
                            setDeletingDoctor={setDeletingDoctor}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <DeleteModal 
            deletingDoctor={deletingDoctor}
            refetch={refetch}
            setDeletingDoctor={setDeletingDoctor}
            ></DeleteModal>}
        </div>
    );
};

export default ManageDoctor;