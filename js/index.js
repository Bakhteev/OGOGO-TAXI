// partners
let itemChild = document.querySelectorAll('.question__item__info')
let itemParent = document.querySelectorAll('.question__item')

itemParent.forEach((li, i) => {
    li.addEventListener('click', (e) => {
        itemParent.forEach(item => {
            item.classList.remove('open')
            item.style.paddingBottom = '16px'
        })
        let pHeight = itemChild[i].clientHeight
        li.style.paddingBottom = `calc(10px + ${pHeight}px)`
        e.target.classList.add('open')
    })
})

//==========================================================================================

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
const Scroll = (top, left) => {
    window.scroll({
        top: top,
        left: left,
        behavior: 'smooth'
    });
};

let scrollBtnPartners = document.getElementById('scroll');
let scrollBtnAutopark = document.querySelector('.ap-btn');


scrollBtnPartners.addEventListener('click', () => Scroll(2100));
scrollBtnAutopark.addEventListener('click', () => Scroll(300))



//============================================================================================
