import {Scroll} from './index.js';

let scrollBtnPartners = document.getElementById('scroll');
let partnersTarget = document.querySelector('.app');
let partnersTargetCoords = partnersTarget.getBoundingClientRect();
let partnersTargetCoordsTop = [partnersTargetCoords.top - 100];

scrollBtnPartners.addEventListener('click', () => Scroll(partnersTargetCoordsTop));