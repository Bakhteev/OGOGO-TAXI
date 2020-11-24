import React from 'react'
import Apple from '../../../assets/img/mobile/aplle.png'
import Google from '../../../assets/img/mobile/google-play.png'
import Phone from '../../../assets/img/mobile/phone.png'

const Mobile = () => {
    return (
        <section class="mobile">
            <div class="container">
                <div class="mobile__content">
                    <h2 class="mobile__title title">Заказывайте такси через мобильное приложение </h2>
                    <ul class="mobile__list">
                        <li class="mobile__item">Низкие цены - быстрая подача </li>
                        <li class="mobile__item">Оплата банковской картой</li>
                        <li class="mobile__item">Отслеживайте подачу автомобиля на карте</li>
                        <li class="mobile__item">Бирге тариф для попутчиков</li>
                    </ul>
                    <a href="https://itunes.apple.com/ua/app/id654646098" target="_blank"><img class="mobile__apple" src={Apple} alt=""></img></a>
                    <a href="https://play.google.com/store/apps/details?id=ua.com.uklontaxi" target="_blank"><img class="mobile__google" src={Google} alt=""></img></a>
                    <img src={Phone} alt="" class="mobile__img"></img>
                </div>
            </div>
        </section>
    )
}
export default Mobile
