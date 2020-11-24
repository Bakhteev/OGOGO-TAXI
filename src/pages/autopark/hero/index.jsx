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
        <section class="hero">
            <div class="hero__content flex">
                <div class="col-6 hero__item">
                    <h1 class="hero__title title">Хочешь сотрудничать с нами ?</h1>
                    <button class="hero__btn btn" id="apBtn">Заполнить анкету</button>
                </div>
                <div class="col-6">
                    <img class="hero__img" src={autoparkImg} alt=""/>
                </div>
            </div>
        </section>
    );
}

export default Hero;
