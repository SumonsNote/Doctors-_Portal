import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: service, isLoading } = useQuery('service', () => fetch('https://dry-tundra-71495.herokuapp.com/service').then(res => res.json()))

    const imageStorageApiKey = '4b58dc1238aefe50344c3b708b4f28e9'

    const onSubmit = async data => {
        const image = data.Image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageApiKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img        
                }
                fetch('https://dry-tundra-71495.herokuapp.com/doctor', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(inserted => {
                    if(inserted.insertedId){
                        toast.success('Doctor successfully added')
                        reset()
                    }
                    else {
                        toast.err('Not added, Please try again')
                    }
                })
            }
        })
    }

    if(isLoading){
        <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl font-bold">Add Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs ">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty')} class="input input-bordered select w-full max-w-xs">
                    {
                        service?.map(service => <option
                        key={service._id}
                        value={service.name}
                        >{service.name}</option>)
                    }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="py-4 w-full max-w-xs"
                        {...register("Image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            },
                        })}
                    />
                </div>
                <input className='btn w-full max-w-xs text-white' type="submit" value="Add Doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;