import React from 'react'

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
                            <option value="1">Бишкек</option>
                            <option value="2">Ош</option>
                            {/* <option value="3"></option>
                            <option value="4"></option>
                            <option value="5"></option>
                            <option value="6"></option>
                            <option value="7"></option>
                            <option value="8"></option>
                            <option value="9"></option>
                            <option value="10"></option>
                            <option value="11"></option>
                            <option value="12"></option>
                            <option value="13"></option>
                            <option value="14"></option>
                            <option value="15"></option>
                            <option value="16"></option>
                            <option value="17"></option>
                            <option value="18"></option>
                            <option value="19"></option>
                            <option value="20"></option>  */}
                        </select>
                        <button className="registration__btn btn">Подключиться</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Form;
