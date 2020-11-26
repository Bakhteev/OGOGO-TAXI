import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navObj } from './const';



const Header = () => {

    const [burger, setBurger] = useState(false)
    const [drop, setDrop] = useState(false)
    const [elIndex, setElIndex] = useState(0)

    const Burger = () => {
        burger === false ? setBurger(true) : setBurger(false)
    };
    const Drop = () =>{
        drop === false ? setDrop(true) : setDrop(false)
    };
    const HandleClick = (index) => {
        setElIndex(index);
    }; 
    return(
        <header className="header">
            <div className="header__content row">
                <div className="header__left">
                    <Link to="/" className="header__logo">
                        <svg width="76" height="24" viewBox="0 0 76 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0)">
                                <path
                                    d="M74.8982 3.81845C72.5455 1.4187 59.4157 4.84187 58.2965 7.11055C57.7066 8.30706 59.6409 11.3941 63.3498 14.982C66.5847 18.1094 69.7205 20.9948 71.6901 20.3596C73.6596 19.7244 77.2576 6.2182 74.8982 3.81845Z"
                                    fill="#F3D910" />
                                <path
                                    d="M49.8235 8.34235C48.296 8.34235 46.928 9.31031 46.1382 10.6043V8.56417H43.2729V19.3631H46.1382V13.8056C46.1382 11.537 47.4456 10.8009 48.7631 10.8009C50.1714 10.8009 51.2032 11.7605 51.2032 13.6863C51.2032 15.7029 51.1847 19.353 51.1847 19.353H54.05L54.0651 12.7889C54.0634 10.038 52.3292 8.34235 49.8235 8.34235Z"
                                    fill="#000105" />
                                <path d="M28.0308 4.15625H25.1655V19.3513H28.0308V4.15625Z" fill="#000105" />
                                <path
                                    d="M20.3207 8.55411L16.1917 13.0058V4.15625H13.3281V19.3513H16.1917L16.148 14.9602L20.2434 19.3261H23.8245L18.8133 13.9384L23.8245 8.55411H20.3207Z"
                                    fill="#000105" />
                                <path
                                    d="M35.6655 8.31207C32.4507 8.31207 29.8442 10.8446 29.8442 13.9703C29.8442 17.096 32.4507 19.637 35.6655 19.637C38.8803 19.637 41.4851 17.1044 41.4851 13.9787C41.4851 10.853 38.8786 8.31207 35.6655 8.31207ZM35.6655 17.0507C35.0544 17.066 34.4527 16.8989 33.9371 16.5705C33.4216 16.2422 33.0156 15.7676 32.7711 15.2074C32.5267 14.6472 32.4547 14.0268 32.5646 13.4256C32.6745 12.8243 32.9611 12.2694 33.3879 11.8319C33.8147 11.3943 34.3622 11.0939 34.9606 10.9691C35.5589 10.8443 36.1809 10.9007 36.747 11.1312C37.3131 11.3616 37.7977 11.7557 38.1388 12.2629C38.4799 12.7701 38.662 13.3675 38.6618 13.9787C38.6694 14.7819 38.3583 15.5554 37.7967 16.1296C37.2351 16.7039 36.4687 17.0321 35.6655 17.0423V17.0507Z"
                                    fill="#000105" />
                                <path
                                    d="M7.92523 14.1098C7.92523 16.3785 6.61948 17.1163 5.30029 17.1163C3.89372 17.1163 2.85685 16.155 2.85685 14.2292C2.85685 12.2126 2.87365 8.56252 2.87365 8.56252H0.0151245L0 15.1265C0 17.8775 1.73427 19.5731 4.2399 19.5731C5.76747 19.5731 7.1354 18.6052 7.92523 17.3112V19.3513H10.7821V8.54572H7.92523V14.1098Z"
                                    fill="#000105" />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect y="3" width="75.6729" height="17.4503" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </div>
                <div className="header__middle">
                    <nav className="header__nav">
                        <div id="burger"
                            onClick={() => Burger()}
                            className={`header__burger ${ burger === false ? '' : 'active'}`}
                         >
                            <span id="header__burger-line" className={`header__burger-line ${burger === false ? '' : 'active'}`}></span>
                        </div>
                        <ul id="header__menu" className={`header__menu row ${burger === false ? '' : 'active'}`}>
                            {navObj.map((item, index) =>{
                                return(
                                    <li
                                        key={index + item}
                                        onClick={() => Burger()}
                                        className="header__item">
                                        <Link
                                            to={item.link} className="header__link">{item.text}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
                <div className="header__right row">
                    <ul 
                    onClick={() => Drop() }
                    className={`header__language ${ drop === false ? '' : 'drop' }`}
                    >
                        <li className="header__language__item">RU</li>
                        <li className="header__language__item">KG</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;

