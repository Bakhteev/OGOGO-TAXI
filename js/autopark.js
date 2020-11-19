
const Scroll = (top, left) => {
    window.scroll({
        top: top,
        left: left,
        behavior: 'smooth'
    });
};

let scrollBtnAutopark = document.getElementById('apBtn');
let autoparkTarget = document.querySelector('.registration')
let autoparkTargetCoords = autoparkTarget.getBoundingClientRect();
let autoparkTargetCoordsTop = [autoparkTargetCoords.top - 100]

scrollBtnAutopark.addEventListener('click', () => Scroll(autoparkTargetCoordsTop))