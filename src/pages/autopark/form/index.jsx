import React from 'react';
import { cities } from './const';

const Form = () => {
    return (
        <section className="registration" id="registration">
            <div className="container">
                <form className="registration__form">
                    <div className="registration__header">
                        <h2 className="registration__title">Разместите информацию о своем автопарке</h2>
                    </div>
                    <h3 className="registration__subtitle">Наш менеджер свяжется с вами в течение 24 часов</h3>
                    <div className="registration__inputs">
                        <input type="text" placeholder="Имя" className="registration__input"/>
                        <input type="text" placeholder="Фамилия" className="registration__input"/>
                        <input type="tel" placeholder="Номер телефона" className="registration__input"/>
                        <input type="text" placeholder="Названия парка" className="registration__input"/>
                        <select name="city" id="City" className="registration__select">
                            {cities.map(item =>{
                                return(
                                <option 
                                    key={item.id + item.city}
                                    value={item.id}>
                                    {item.city}
                                </option>
                                )
                            })}
                        </select>
                        <button className="registration__btn btn">Подключиться</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Form;
