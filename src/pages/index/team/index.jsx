import React from 'react'
import { Link } from 'react-router-dom'
import driver from '../../../assets/img/team/team-driver.jpg'

const Team = () => {
    return (
        <section className="team">
            <div className="container">
                <div className="team__content row">
                    <div className="col-6 team__item">
                        <h2 className="team__title title">Зарабатывай вместе с нами!</h2>
                        <p className="team__subtitle subtitle"> Стань частью нашей команды Огого Такси</p>
                        <Link to="/autopark" className="team__btn btn">Заполнить анкету</Link>
                    </div>
                    <div className="col-6 team__item">
                        <img src={driver} className="team__img"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Team
