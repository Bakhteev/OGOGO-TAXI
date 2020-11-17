// partners

document.querySelectorAll('.question__item').forEach((item) => 
    item.addEventListener('click', () => {
        if (item.classList.contains('open')) {
            item.classList.remove('open')
        } else{
                document
                .querySelectorAll('.question__item')
                .forEach((child) => child.classList.remove('open'))
            item.classList.add('open')
        }
    })
);

//==========================================================================================