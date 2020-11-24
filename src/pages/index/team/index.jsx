import React from 'react'
import driver from '../../../assets/img/team/team-driver.jpg'

const Team = () => {
    return (
        <section class="team">
            <div class="container">
                <div class="team__content row">
                    <div class="col-6 team__item">
                        <h2 class="team__title title">Зарабатывай вместе с нами!</h2>
                        <p class="team__subtitle subtitle"> Стань частью нашей команды Огого Такси</p>
                        <a href="./autopark.html" class="team__btn btn">Заполнить анкету</a>
                    </div>
                    <div class="col-6 team__item">
                        <img src={driver} class="team__img"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Team
