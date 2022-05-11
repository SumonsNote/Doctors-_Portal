import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(user){
        console.log(user);
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-4xl">Login</h2>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-secondary text-white">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;