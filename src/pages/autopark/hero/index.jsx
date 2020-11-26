import React, {useState} from 'react';
import autoparkImg from '../../../assets/img/pagesImg/autopark/autoparkImg.jpg';


function Hero() {
    const [pos, setPos] = useState(0)

    const Scroll = (top, left) => {
        window.scroll({
            top: top,
            left: left,
            behavior: 'smooth'
        });
    };
    return (
        <section className="hero">
            <div className="hero__content flex">
                <div className="col-6 hero__item">
                    <h1 className="hero__title title">Хочешь сотрудничать с нами ?</h1>
                    <a href="#registration" className="hero__btn btn" >Заполнить анкету</a>
                </div>
                <div className="col-6">
                    <img className="hero__img" src={autoparkImg} alt=""/>
                </div>
            </div>
        </section>
    );
}

export default Hero;
