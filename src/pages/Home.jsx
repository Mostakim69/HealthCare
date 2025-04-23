import React from 'react';
import Banner from '../Components/Banner';
import Container from '../Components/Container';
import { useLoaderData } from 'react-router';
import CardSection from '../Components/CardSection';

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <Banner />
      <Container Container={data} />
      <CardSection />
    </>
  );
};

export default Home;