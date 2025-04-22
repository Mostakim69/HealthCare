// src/pages/Details.jsx
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../Components/ui/Button';

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singleContainer = data.find((Container) => Container.id === parseInt(id));

  const {
    image,
    name,
    education,
    speciality,
    workplace,
    registrationNumber,
    fees,
    availability,
    description,
    designation,
    experience,
  } = singleContainer || {};

  // No need for availability check
  // const today = new Date().toLocaleString('en-US', { weekday: 'long' });
  // const isAvailableToday = availability?.includes(today);

  return (
    <div className="w-full py-12 px-4 md:px-8">
      {/* Page Info Card */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-4">Doctor's Profile Details</h1>
        {description && <p className="text-gray-500 max-w-3xl mx-auto">{description}</p>}
      </div>

      {/* Doctor Info Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <img
          src={image}
          alt={name}
          className="h-72 w-72 object-cover rounded-lg bg-gray-300"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-semibold mb-2">{name}</h1>
          <p className="text-gray-700 mb-1">{designation}</p>
          <p className="text-gray-700 mb-1">{education}</p>
          <p className="text-gray-700 mb-1">{speciality}</p>
          <p className="text-gray-700 mb-1">Experience: {experience}</p>
          <p className="text-gray-700 mb-1">Working at</p>
          <p className="text-gray-700 text-lg font-semibold mb-1">{workplace}</p>
          <p className="text-gray-700 mb-4">® Reg No: {registrationNumber}</p>

          {/* Availability Section */}
          <div className="mb-4">
            <p className="text-gray-700">
              <span className="font-semibold">Availability:</span>{' '}
              {availability?.join(', ')}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Consultation Fee:</span> {fees}
            </p>
          </div>
        </div>
      </div>

      {/* Appointment Card */}
      <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          {/* Remove availability status since booking is allowed anytime */}
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            Book an Appointment Anytime
          </span>
        </div>
        <Button doctorId={parseInt(id)} doctorName={name} />
      </div>
    </div>
  );
};

export default Details;