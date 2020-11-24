import React from 'react'

const ServicesItem = (props) => {
    return (
        <div className="col-4 services__item">
            {props.icon}
            <h3 className="services__title">{props.title}</h3>
            <p className="services__subtitle">{props.subtitle}</p>
        </div>
    )
}

export default ServicesItem