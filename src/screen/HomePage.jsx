import React from 'react';
import Landingpage from '../components/LandingPage';
import AboutUs from '../components/AboutUs';
import Header from '../components/Header';
import Bookslist from '../components/booksList';
import Trending from '../components/Trending';


function HomePage() {
    return (
        <div>
            <Landingpage />
            <AboutUs />
            <Trending />
            <Header />
            <Bookslist />
        </div>
    );
}

export default HomePage;
