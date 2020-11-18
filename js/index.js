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
let languageItem = document.querySelectorAll('.header__language__item')

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

// scroll smooth
let scrollBtn = document.getElementById('scroll')

scrollBtn.addEventListener('click', () =>{
    window.scroll({
        top: 2100,
        left: 0,
        behavior: 'smooth'
    });
})
//============================================================================================