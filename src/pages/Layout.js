import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
    return (
        <>
            <Header />
            <div className='main-layout'>
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
