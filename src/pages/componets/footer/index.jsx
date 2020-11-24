import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/footer/footer-logo-light.svg';
import facebook from '../../../assets/img/footer/facebook.svg'
import instagram from '../../../assets/img/footer/instagram.svg'
import twitter from '../../../assets/img/footer/twitter.svg'
import apple from "../../../assets/img/mobile/aplle.png";
import googlePlay from '../../../assets/img/mobile/google-play.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__top row">
                        <div className="footer__left">
                            <img src={logo} alt="" className="footer__logo"/>
                        </div>
                        <div className="footer__right">
                        <a href="https://itunes.apple.com/ua/app/id654646098" target="_blank">
                            <img className="mobile__apple"src={apple}/>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=ua.com.uklontaxi" target="_blank">
                            <img className="mobile__google" src={googlePlay} alt=""/></a>
                        </div>
                    </div>
                <hr/>
                <div className="footer__bottom row">
                    <ul className="footer__list">
                        <h6 className="footer__description">О нас</h6>
                        <p className="footer__item">Огого такси это онлайн сервис вызова авто в Кыргызстане !</p>
                        <div className="footer__social row">
                            <a href="#"><img className="footer__link" src={facebook} /></a>
                            <a href="#"><img className="footer__link" src={instagram} /></a>
                            <a href="#"><img className="footer__link" src={twitter} /></a>
                        </div>
                    </ul>
                    <ul className="footer__list row">
                        <h6 className="footer__description">Ссылки</h6>
                        <Link to="/" className="footer__item">Пользователям</Link>
                        <Link to="/partners" className="footer__item">Водителям</Link>
                        <Link to="/autopark" className="footer__item">Таксопаркам</Link>
                    </ul>
                    <ul className="footer__list">
                        <h6 className="footer__description">Контакты</h6>
                        <li className="footer__item">Ибраимова 115/1</li>
                        <li className="footer__item">+996000000000</li>
                        <li className="footer__item">ogogo.taxi@gmail.com</li>
                    </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
