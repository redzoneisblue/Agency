// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }


//  header elements


// content elements
const t1 = gsap.timeline();


t1.from('#one', {
    width: 80,
    left: 194,
    height: 80,
    opacity: 1,
    duration: 2,
    repeat: -1,
    delay: 1
})
t1.from('#two', {
    width: 80,
    left: 190,
    height: 80,
    opacity: 1,
    duration: 2,
    repeat: -1
});

// let textHead = document.querySelectorAll(".staggering-div");
// let textPara = document.querySelectorAll(".staggering-p");

// textHead.forEach(head, () => {

// })


// textPara.forEach(para, () => {
    
// })


gsap.from(`.staggering-div`, {
    opacity: 0.5,
    y: 200,
    duration: 1.2,
});
gsap.from(`.staggering-p`, {
    opacity: 0.5,
    y: 50,
    duration: 1
});


const boxes = document.querySelectorAll(".clickable .box-click");

boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        gsap.to(box, {
            y: -10,
        });
    });
    box.addEventListener("mouseout", () => {
        gsap.to(box, {
            y: 0,
        })
    })
});


