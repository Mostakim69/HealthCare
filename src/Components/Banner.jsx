import React from 'react';
import { useNavigate } from 'react-router';

const Banner = () => {
    const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search");
  };
    return (
<div className="min-h-screen ">
      <div className=" max-w-7xl m-10 p-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-xl shadow-sm ">
      <div className="text-center m-8">
        <h1 className="text-4xl font-bold text-center mb-4 leading-tight">
          Dependable Care, Backed by Trusted Professionals.
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6 max-w-3xl mx-auto">
          Our platform connects you with verified, experienced doctors across various specialties - all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>
        </div>
        <div className="flex justify-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Search any doctor..."
            className="input input-primary"
          />
          <button
            onClick={handleSearch}
            className="btn btn-active btn-primary rounded-md hover:bg-blue-700 transition"
          >
            Search Now
          </button>
        </div>
        <div className="flex justify-center gap-5">
                      {/* Placeholder for doctor images */}
            <img src="https://i.ibb.co.com/fdk0xRDB/banner-img-1.png" alt="Doctor1" className="w-74 h-50 bg-gray-300 rounded-lg" />
            <img src="https://i.ibb.co.com/zkj36Kx/ad9264af6c0eca161ae924a7768ac9c3.jpg" alt="Doctor1" className="w-74 h-50 bg-gray-300 rounded-lg" />
        </div>
      </div>
    </div>
    );
};

export default Banner;