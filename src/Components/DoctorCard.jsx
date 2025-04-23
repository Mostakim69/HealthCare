import React from 'react';
import { Link } from 'react-router';

const DoctorCard = ({ Container }) => {
  const { name, image, education, registrationNumber, id, availability, experience } = Container || {};

  const today = new Date().toLocaleString('en-US', { weekday: 'long' });
  const isAvailableToday = availability?.includes(today);

  const yearsOfExperience = parseInt(experience) || 0;
  const hasFivePlusYears = yearsOfExperience >= 5;

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src={image}
          alt={name}
          className="w-50 h-50 mt-4 rounded-2xl"
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-2 mb-2">
          {isAvailableToday ? (
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              Available Today
            </span>
          ) : (
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
              Not Available Today
            </span>
          )}
          {hasFivePlusYears && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              5+ Years Experience
            </span>
          )}
        </div>

        <h2 className="card-title text-xl">{name}</h2>
        <p className="text-lg">{education}</p>
        <p className="text-sm border-t border-dotted border-gray-300 py-2">
          ® Reg No: {registrationNumber}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/doctor-details/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;