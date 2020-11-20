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
//========================================================================================

// animation

// let loadingItem = document.querySelectorAll('.loading__item')
// const pageTransitionIn = () => {
    

//     return gsap
//         .to(loadingItem, { duration: 0.5, scaleY: 1, transformOrigin: 'top left', stagger: 0.2 })
    
// }

// const pageTransitionOut = ( container ) =>{
    
//     return gsap
//         .timeline({ delay: 1}) // More readable to put it here
//         .add('start') // Use a label to sync screen and content animation
//         .to(loadingItem, {
//             duration: 0.5,
//             scaleY: 0,
//             transformOrigin: 'top left',
//             stagger: 0.1,
//             delay: 0.1
//         }, 'start')
//         .call(contentAnimation, [container], 'start')
// }


// // function delay(n) {
// //     n = n || 2000;
// //     return new Promise(done => {
// //         setTimeout(() =>{
// //             done();
// //         }, n)
// //     });
// // }
// barba.init({
   
//     transitions: [{
//         async leave(data) {


//             await pageTransitionIn()

//             data.current.container.remove()
//         },

//         async enter(data) {
//             await pageTransitionOut(data.next.container)
//         }

//     }]
// });

// // const loadingScreen = document.querySelector('.loading-screen')
// // const mainNavigation = document.querySelector('.main-navigation')

// // Function to add and remove the page transition screen
// // function pageTransitionIn() {
// //     // GSAP methods can be chained and return directly a promise
// //     // but here, a simple tween is enough
// //     return gsap
// //         // .timeline()
// //         // .set(loadingScreen, { transformOrigin: 'bottom left'})
// //         // .to(loadingScreen, { duration: .5, scaleY: 1 })
// //         .to(loadingScreen, { duration: .5, scaleY: 1, transformOrigin: 'bottom left' })
// // }
// // // Function to add and remove the page transition screen
// // function pageTransitionOut(container) {
// //     // GSAP methods can be chained and return directly a promise
// //     return gsap
// //         .timeline({ delay: 1 }) // More readable to put it here
// //         .add('start') // Use a label to sync screen and content animation
// //         .to(loadingScreen, {
// //             duration: 0.5,
// //             scaleY: 0,
// //             skewX: 0,
// //             transformOrigin: 'top left',
// //             ease: 'power1.out'
// //         }, 'start')
// //         .call(contentAnimation, [container], 'start')
// // }

// // Function to animate the content of each page
// // function contentAnimation(container) {
// //     // Query from container
// //     $(container.querySelector('.green-heading-bg')).addClass('show')
// //     // GSAP methods can be chained and return directly a promise
// //     return gsap
// //         .timeline()
// //         .from(container.querySelector('.is-animated'), {
// //             duration: 0.5,
// //             translateY: 10,
// //             opacity: 0,
// //             stagger: 0.4
// //         })
// //         .from(mainNavigation, { duration: .5, translateY: -10, opacity: 0 })
// // }

// // $(function () {
// //     barba.init({
// //         // We don't want "synced transition"
// //         // because both content are not visible at the same time
// //         // and we don't need next content is available to start the page transition
// //         // sync: true,
// //         transitions: [{
// //             // NB: `data` was not used.
// //             // But usually, it's safer (and more efficient)
// //             // to pass the right container as a paramater to the function
// //             // and get DOM elements directly from it
// //             async leave(data) {
// //                 // Not needed with async/await or promises
// //                 // const done = this.async();

// //                 await pageTransitionIn()
// //                 // No more needed as we "await" for pageTransition
// //                 // And i we change the transition duration, no need to update the delay…
// //                 // await delay(1000)

// //                 // Not needed with async/await or promises
// //                 // done()

// //                 // Loading screen is hiding everything, time to remove old content!
// //                 data.current.container.remove()
// //             },

// //             async enter(data) {
// //                 await pageTransitionOut(data.next.container)
// //             },
// //             // Variations for didactical purpose…
// //             // Better browser support than async/await
// //             // enter({ next }) {
// //             //   return pageTransitionOut(next.container);
// //             // },
// //             // More concise way
// //             // enter: ({ next }) => pageTransitionOut(next.container),

// //             async once(data) {
// //                 await contentAnimation(data.next.container);
// //             }
// //         }]
// //     });

// // });


//==========================================================================================