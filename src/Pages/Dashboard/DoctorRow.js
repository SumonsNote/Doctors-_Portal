import React from 'react';

const DoctorRow = ({ doctor, index, setDeletingDoctor  }) => {
    const { name, img, specialty } = doctor;
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-24 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-error text-white">Delete</label>

            </td>
        </tr>
    );
};

export default DoctorRow;