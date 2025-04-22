import React from 'react';
import Banner from '../Components/Banner';
import Container from '../Components/Container';
import { useLoaderData } from 'react-router';

const Home = () => {
    // data
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Banner/>
            <Container Container={data}/>
        </div>
    );
};

export default Home;