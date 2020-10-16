import React from 'react';
import Bottom from '../Bottom/Bottom';
import ClientImgSection from '../ClientImgSection/ClientImgSection';
import FeedBack from '../FeedBack/FeedBack';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <>
            <Header></Header>
            <ClientImgSection></ClientImgSection>
            <Services></Services>
            <Works></Works>
            <FeedBack></FeedBack>
            <Bottom></Bottom>
        </>
    );
};

export default Home;