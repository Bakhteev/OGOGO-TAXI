// languages

let language = document.querySelector('.header__language');
let languageItem = document.querySelectorAll('.header__language__item');

language.addEventListener('click', () => {
    language.classList.toggle('drop')
})
const removeClasse = (array, classToRemove) => {
    array.forEach(item => {
        item.classList.remove(classToRemove)
    })
}
languageItem.forEach(language => {
    language.addEventListener('click', () => {
        removeClasse(languageItem, 'order')
        language.classList.toggle('order')
    })
})

//=======================================================================================

//Burger

$('.header__burger').on('click', function() {
    $(this).toggleClass('active');
    $('.header__burger-line').toggleClass('active');
    $('.header__menu').toggleClass('active');
    $('html').toggleClass('lock');
})

//========================================================================================

// scroll smooth
export const Scroll = (top, left) => {
    window.scroll({
        top: top,
        left: left,
        behavior: 'smooth'
    });
};

// let scrollBtnPartners = document.getElementById('scroll');
// let scrollBtnAutopark = document.getElementById('apBtn');
// let partnersTarget = document.querySelector('.app');
// let autoparkTarget = document.querySelector('.registration');

// console.log(autoparkTarget);
// let autoparkTargetCoords = autoparkTarget.getBoundingClientRect();
// let partnersTargetCoords = partnersTarget.getBoundingClientRect();
// let autoparkTargetCoordsTop = [autoparkTargetCoords.top - 100];
// let partnersTargetCoordsTop = [partnersTargetCoords.top - 100];

// scrollBtnPartners.addEventListener('click', () => Scroll(partnersTargetCoordsTop));
// scrollBtnAutopark.addEventListener('click', () => Scroll(autoparkTargetCoordsTop));
//========================================================================================