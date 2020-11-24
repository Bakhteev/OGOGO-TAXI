import React from 'react';
import ServicesItem from './ServicesItem';
import { servicesObj } from './obj';

function Services() {
    return (
        <section className="services">
            <div className="container">
                <div className="services__content row">
                    {servicesObj.map((item) =>{
                        return(
                            <ServicesItem
                                icon = {item.icon}
                                title = {item.title}
                                subtitle = {item.subtitle}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services;
