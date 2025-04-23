import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Cell } from 'recharts';

const Booking = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('/doctor.json')
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error('Error fetching doctor data:', err));

    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  const chartData = bookings.map((booking) => {
    const doctor = doctors.find((doc) => doc.id === booking.doctorId);
    return {
      name: booking.doctorName,
      fee: parseFloat(doctor?.fees) || 0,
    };
  });

  const handleCancel = (doctorId) => {
    const updatedBookings = bookings.filter((booking) => booking.doctorId !== doctorId);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    setBookings(updatedBookings);
  };

  const renderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;
    return (
      <text x={x + width / 2} y={y - 10} fill="#000" textAnchor="middle" fontSize={12}>
        {value}
      </text>
    );
  };

  const colors = [
    '#FF6F61', 
    '#6B5B95', 
    '#88B04B', 
    '#F7CAC9', 
    '#92A8D1', 
    '#FFA07A', 
    '#98FF98', 
    '#DDA0DD', 
    '#FFD700', 
    '#00CED1', 
  ];

  return (
    <div className="w-full py-12 px-4 md:px-8">
      <h1 className="text-4xl font-semibold mb-8 text-center">My Appointments</h1>

      {bookings.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 text-3xl mb-4">No appointments found.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Book an Appointment
          </button>
        </div>
      ) : (
        <>
          <div className="mb-12">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 4000]} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="fee" barSize={50}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                  <LabelList dataKey="fee" content={renderCustomizedLabel} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid gap-4">
            {bookings.map((booking) => {
              const doctor = doctors.find((doc) => doc.id === booking.doctorId);
              return (
                <div key={booking.doctorId} className="bg-gray-100 p-6 rounded-lg flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">{booking.doctorName}</h2>
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
                  <button
                    onClick={() => handleCancel(booking.doctorId)}
                    className="btn btn-outline btn-primary w-full rounded-full mt-8 border border-t border-red-500 text-red-500 font-semibold py-2 transition hover:bg-red-300"
                  >
                    Cancel Appointment
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Booking;