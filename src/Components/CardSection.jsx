import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CardSection = () => {
  const cards = [
    {
      icon: 'https://i.ibb.co.com/cX87syZS/success-doctor.png',
      number: 199,
      title: 'Total Doctors',
    },
    {
      icon: 'https://i.ibb.co.com/rRhdJ8fw/success-review.png',
      number: 467,
      title: 'Total Reviews',
    },
    {
      icon: 'https://i.ibb.co.com/9H4bkS0Q/success-patients.png',
      number: 1900,
      title: 'Patients',
    },
    {
      icon: 'https://i.ibb.co.com/LhsYsxDh/success-staffs.png',
      number: 300,
      title: 'Total Staff',
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          We Provide Best Medical Services
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
        </p>
      </div>

      <div
        ref={ref}
        className="max-w-6xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-6 bg-blue-50 p-4 rounded-full">
              <img
                src={card.icon}
                alt={card.title}
                className="h-14 w-14 object-contain"
              />
            </div>
            <h3 className="text-5xl font-bold text-gray-900 mb-3">
              {inView ? (
                <CountUp
                  end={card.number}
                  duration={2.5}
                  suffix=" +"
                  enableScrollSpy={false}
                />
              ) : (
                '0 +'
              )}
            </h3>
            <p className="text-lg font-semibold text-gray-600">{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;