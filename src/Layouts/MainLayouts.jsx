import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
        <>
            <Navbar/>
            <div className='min-h-[calc(100vh-224px)]'>
                <div className='max-w-screen-2xl mx-auto  px-8 md:px-12 lg:px-16 xl:px-24'>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default MainLayouts;