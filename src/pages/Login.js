import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { setCookie } from '../helper/_cookieHelper';

const Login = () => {
    const navigate = useNavigate();
    const [address, setAddress] = useState('');
    const handleLogin = () => {
        if(!address || !address.trim()){
            window.alert("Please enter any random address!")
            return
        }
        const createID = uuidv4();
        setCookie('token', createID, 15);
        navigate('/');
    };
    return (
        <div className='login-container'>
            <div className='login-wrapper'>
                <div className='login-title'>Login </div>
                <div className='form-group'>
                    <label>Jobcoin address</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Enter any random address'
                        name='address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button className='btn btn-login' onClick={handleLogin} disabled={!address}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
