import React from 'react';
import { Link } from 'react-router-dom';
import { icons, contacts } from './const'
import { navObj } from '../header/const'
import logo from '../../../assets/img/footer/footer-logo-light.svg';
import apple from "../../../assets/img/mobile/aplle.png";
import googlePlay from '../../../assets/img/mobile/google-play.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__top row">
                        <Link to="/" className="footer__left">
                            <img src={logo} alt="" className="footer__logo"/>
                        </Link>
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
                                {icons.map((item, index) =>{
                                    return(
                                        <a 
                                            key={index + item}
                                            href={item.link} className="footer__link" target="_blank">
                                            {item.icon}
                                        </a>
                                    );
                                })}
                            </div>
                        </ul>
                        <ul className="footer__list row">
                            <h6 className="footer__description">Ссылки</h6>
                            {navObj.map((item, index) =>{
                                    return(
                                        <Link
                                            key={index + item}
                                            to={item.link} className="footer__item">{item.text}
                                        </Link>
                                    );
                                })}
                        </ul>
                        <ul className="footer__list">
                            <h6 className="footer__description">Контакты</h6>
                            {contacts.map((item, index) =>{
                                return(
                                    <a 
                                        key={index + item}
                                        className="footer__item" href={item.link}
                                    >
                                        {item.text}
                                    </a>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
