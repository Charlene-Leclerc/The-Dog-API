import React from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/home_section/Home';
import Dog from '../components/dog_section/Dog';

const Page = () => {
    return (
        <div>
            <Navigation />
            <Home />
            <Dog />
        </div>
    );
};

export default Page;