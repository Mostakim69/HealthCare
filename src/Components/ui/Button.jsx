import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Button = ({ doctorId, doctorName }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const isAlreadyBooked = existingBookings.some(
      (booking) => booking.doctorId === doctorId
    );

    if (isAlreadyBooked) {
      toast.error('You have already booked an appointment with this doctor!', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    const newBooking = {
      doctorId,
      doctorName,
      bookingDate: new Date().toISOString(),
    };

    localStorage.setItem('bookings', JSON.stringify([...existingBookings, newBooking]));

    toast.success(`Appointment booked with ${doctorName}!`, {
      position: 'top-right',
      autoClose: 3000,
    });

    navigate('/Booking');
  };

  return (
    <button
      className="btn btn-active btn-primary rounded-lg hover:bg-blue-700 transition px-6 py-3"
      onClick={handleBooking}
    >
      Book Appointment Now
    </button>
  );
};

export default Button;