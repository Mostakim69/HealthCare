import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayouts = () => {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-screen-3xl mx-auto p-8 md:px-12 lg:px-16 xl:px-24">
          {navigation.state === 'loading' && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
            </div>
          )}
          <Outlet />
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayouts;