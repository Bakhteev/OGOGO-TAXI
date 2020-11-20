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

let scrollBtnIndex = document.getElementById('indexBtn');
let indexTarget = document.querySelector('.mobile');
let indexTargetCoords = indexTarget.getBoundingClientRect();
let indexTargetCoordsTop = [indexTargetCoords.top - 100]

scrollBtnIndex.addEventListener('click', () => Scroll(indexTargetCoordsTop));