import React from 'react';
import { useLoaderData, useParams, Link } from 'react-router-dom'; // Added Link for navigation
import Button from '../Components/ui/Button';

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singleContainer = data.find((Container) => Container.id === parseInt(id));

  if (!singleContainer) {
    return (
      <div className="w-full py-12 px-4 md:px-8 text-center">
        <h1 className="text-5xl font-semibold mb-8 text-red-600 ">Invalid Doctor ID</h1>
        <p className="text-gray-500 mb-8">The doctor with the provided ID does not exist.</p>
        <Link to="/">
          <button className="btn btn-primary">Go to Home</button>
        </Link>
      </div>
    );
  }

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
  } = singleContainer;

  return (
    <div className="w-full py-12 px-4 md:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-4">Doctor's Profile Details</h1>
        {description && <p className="text-gray-500 max-w-3xl mx-auto">{description}</p>}
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <img
          src={image}
          alt={name}
          className="h-96 w-72 rounded-lg bg-gray-300"
        />
        <div className="flex-1">
          <h1 className="text-5xl font-semibold mb-2">{name}</h1>
          <p className="text-gray-700 mb-1">{designation}</p>
          <p className="text-gray-700 mb-1">{education}</p>
          <p className="text-gray-700 mb-1"><br />{speciality}</p>
          <p className="text-gray-700 mb-1">Experience: {experience}</p>
          <p className="text-gray-700 mb-1">Working at</p>
          <p className="text-gray-700 text-lg font-bold mb-1">{workplace} <br /><br /></p>
          <p className="text-gray-700 mb-4 border-t border-b border-dotted border-gray-300">
            ® Reg No: {registrationNumber}
          </p>

          <div className="mb-4">
            <p className="text-gray-700">
              <span className="font-semibold"><br />Availability:</span>{' '}
              {availability?.join(', ')}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Consultation Fee:</span> {fees}{' '}
              <span className="text-sm">(incl. vat)</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
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