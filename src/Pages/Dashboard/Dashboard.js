import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../Firebase.init';
import useAdmin from '../../hooks/useAdmin'

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-5">
            <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
            <Outlet></Outlet>
                

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='/dashboard/review'>My Reviews</Link></li>
                    <li><Link to='/dashboard/history'>My History</Link></li>
                    <li>{admin && <Link to='/dashboard/users'>My Users</Link>}</li>
                    <li>{admin && <Link to='/dashboard/addDoctor'>Add Doctor</Link>}</li>
                    <li>{admin && <Link to='/dashboard/manageDoctor'>Manage Doctor</Link>}</li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;