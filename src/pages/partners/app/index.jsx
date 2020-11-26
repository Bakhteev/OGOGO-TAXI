import React from 'react'
import apple from "../../../assets/img/mobile/aplle.png";
import googlePlay from '../../../assets/img/mobile/google-play.png';
import phone from '../../../assets/img/pagesImg/partners/phone.png';

const PartnersApp = () => {
    return (
        <section className="app" id="app">
            <div className="container">
                <div className="app__content">
                    <h2 className="app__title title">Удобное приложение для работы и заработка</h2>
                    <p className="app__description description">В нашем приложении вам не нужно искать заказы, мы предлагаем вам
                    самый оптимальный заказ !</p>
                <div className="app__row">
                    <a href="#" className="app__btn"><img src={apple} alt=""/></a>
                    <a href="#" className="app__btn"><img src={googlePlay} alt=""/></a>
                </div>
                    <img className="app__img" src={phone} alt=""/>
                </div>
            </div>
        </section>
    );
}

export default PartnersApp
