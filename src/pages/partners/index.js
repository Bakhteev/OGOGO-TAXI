import React from 'react';
import Hero from './hero';
import Services from './services';
import PartnersApp from './app';
import Car from './car';

const Partners = () => {
    return (
        <div className="partners">
            <Hero />
            <Car />
            <Services />
            <PartnersApp />
        </div>
    )
}

export default Partners;
