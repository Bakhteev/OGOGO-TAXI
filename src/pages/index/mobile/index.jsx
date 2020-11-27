import React from 'react'
import Apple from '../../../assets/img/mobile/aplle.png'
import Google from '../../../assets/img/mobile/google-play.png'
import Phone from '../../../assets/img/mobile/phone.png'

const Mobile = () => {
    return (
        <section className="mobile" id="mobile">
            <div className="container">
                <div className="mobile__content">
                    <h2 className="mobile__title title">Заказывайте такси через мобильное приложение </h2>
                    <ul className="mobile__list">
                        <li className="mobile__item">Низкие цены - быстрая подача </li>
                        <li className="mobile__item">Оплата банковской картой</li>
                        <li className="mobile__item">Отслеживайте подачу автомобиля на карте</li>
                        <li className="mobile__item">Бирге тариф для попутчиков</li>
                    </ul>
                    <a className="mobile__link" href="https://itunes.apple.com/ua/app/id654646098" target="_blank" rel="noreferrer"><img className="mobile__apple" src={Apple} alt=""></img></a>
                    <a className="mobile__link" href="https://play.google.com/store/apps/details?id=ua.com.uklontaxi" target="_blank" rel="noreferrer"><img className="mobile__google" src={Google} alt=""></img></a>
                    <img src={Phone} alt="" className="mobile__img"></img>
                </div>
            </div>
        </section>
    )
}
export default Mobile
