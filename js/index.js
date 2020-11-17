// partners
let itemChild = document.querySelectorAll('.question__item__info')
let itemParent = document.querySelectorAll('.question__item')

itemParent.forEach((li,i) => {
    li.addEventListener('click', (e) =>{
        itemParent.forEach(item =>{
            item.classList.remove('open')
            item.style.paddingBottom = '16px'
        })
        let pHeight = itemChild[i].clientHeight
        li.style.paddingBottom = `calc(10px + ${pHeight}px)`
        e.target.classList.add('open')
    })
})

//==========================================================================================