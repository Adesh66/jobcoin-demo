import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteCookie } from '../helper/_cookieHelper';

const Header = () => {
    const navigate = useNavigate();
    const logoutClickHandler = () => {
        deleteCookie('token');
        navigate('/login', { replace: true });
    };
    return (
        <div className='header'>
            <div className='header-title'>Jobcoin Dashboard</div>
            <button className='btn btn-logout' onClick={logoutClickHandler}>
                Log out
            </button>
        </div>
    );
};

export default Header;
