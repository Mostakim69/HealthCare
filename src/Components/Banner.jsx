import React from 'react';

const Banner = () => {
  return (
    <div className="min-h-screen">
      <div className="p-12 bg-gradient-to-br from-blue-50 via-white to-indigo-100 rounded-xl border-4 border-white shadow-sm">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Dependable Care, Backed by Trusted <br /> Professionals.
          </h1>
          <p className="text-sm text-gray-600 mb-6 max-w-3xl mx-auto">
            Our platform connects you with verified, experienced doctors across various specialties - all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Search any doctor..."
            className="input input-primary"
          />
          <button className="btn btn-active btn-primary rounded-md hover:bg-blue-700 transition">
            Search Now
          </button>
        </div>
        <div className="flex justify-center gap-5">
          <img
            src="https://i.ibb.co/fdk0xRDB/banner-img-1.png"
            alt="Doctor1"
            className="w-96 rounded-lg"
          />
          <img
            src="https://i.ibb.co/zkj36Kx/ad9264af6c0eca161ae924a7768ac9c3.jpg"
            alt="Doctor2"
            className="w-96 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;