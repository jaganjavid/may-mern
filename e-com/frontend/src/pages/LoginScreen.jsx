import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../slices/userApiSlice';
import { toast } from 'react-toastify';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();

    const submitHandler = async (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            alert('Please fill in all fields');
        } else {
            try {
              const res = await login({ email, password }).unwrap();
              
              navigate('/');
            } catch (error) {
                toast.error(error.data.message);
            }
        }
    };

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">Sign In</h1>
            <form className="w-full" onSubmit={submitHandler}>
                <label className="input input-bordered flex items-center gap-2 mb-5">
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="grow"
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="grow"
                    />
                </label>
                <button type="submit" className="btn btn-primary mt-5" disabled={isLoading}>
                    {isLoading ? 'Signing In...' : 'Sign In'}
                </button>
            </form>
        </div>
    );
};

export default LoginScreen;
