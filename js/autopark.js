import {Scroll} from './index.js';

let scrollBtnAutopark = document.getElementById('apBtn');
let autoparkTarget = document.querySelector('.registration');
let autoparkTargetCoords = autoparkTarget.getBoundingClientRect();
let autoparkTargetCoordsTop = [autoparkTargetCoords.top - 100];

scrollBtnAutopark.addEventListener('click', () => Scroll(autoparkTargetCoordsTop));