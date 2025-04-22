import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [doctors, setDoctors] = useState([]);

  // Load doctors data and bookings on mount
  useEffect(() => {
    // Fetch doctor data (assuming doctor.json is in the public folder)
    fetch('/doctor.json')
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error('Error fetching doctor data:', err));

    // Load bookings from localStorage
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  // Handle appointment cancellation
  const handleCancel = (doctorId) => {
    // Filter out the booking to cancel
    const updatedBookings = bookings.filter((booking) => booking.doctorId !== doctorId);
    
    // Update localStorage
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    
    // Update state to re-render
    setBookings(updatedBookings);
  };

  return (
    <div className="w-full py-12 px-4 md:px-8">
      <h1 className="text-4xl font-semibold mb-8 text-center">My Appointments</h1>
      
      {bookings.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 mb-4">No appointments found.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Go to Homepage
          </button>
        </div>
      ) : (
        <div className="grid gap-4">
          {bookings.map((booking, index) => {
            // Find the doctor details for this booking
            const doctor = doctors.find((doc) => doc.id === booking.doctorId);

            return (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg flex flex-col gap-2 border border-gray-200"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{booking.doctorName}</h2>
                  <button
                    onClick={() => handleCancel(booking.doctorId)}
                    className="text-red-600 font-semibold hover:underline"
                  >
                    Cancel Appointment
                  </button>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Fee:</span> {doctor?.fees || 'N/A'}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Education:</span> {doctor?.education || 'N/A'}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Speciality:</span> {doctor?.speciality || 'N/A'}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Booking;