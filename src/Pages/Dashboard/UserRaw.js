import React from 'react';
import { toast } from 'react-toastify';

const UserRaw = ({user, refetch}) => {
    const {email, role} = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}` 
            }
        })
        .then(res => res.json())
        .then(data => {
            refetch()
            toast.success(`Successfully made an admin`)
        })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button class="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove </button></td>
        </tr>
    );
};

export default UserRaw;