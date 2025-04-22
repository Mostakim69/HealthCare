import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';

const Container = ({ Container }) => {
    const [displayContainer, setDisplayContainer] = useState([])
    const [showAll, setShowAll] = useState(false)
    useEffect(() => {
        if(showAll){
            setDisplayContainer(Container)
        }
        else {
            setDisplayContainer(Container.slice(0, 6))

        }
    }, [Container, showAll])
    return (
        <div className='py-12'>
        <h1 className="text-4xl font-bold text-center mb-4 leading-tight">
          Our Best Doctor.
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6 max-w-3xl mx-auto">
          Our platform connects you with verified, experienced doctors across various specialties - all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
               {
                displayContainer.map(Container => <DoctorCard key={Container.id} Container={Container} />)
               } 
            </div>
            <button onClick={()=> {
                setShowAll (prv => !prv)
                if (showAll) window.scrollTo(0, 700)
            }
            }
            className="btn btn-active btn-primary rounded-md hover:bg-blue-700 transition">
            { showAll ? 'Show Less' : 'Show All'} 
          </button>
        </div>
    );
};

export default Container;