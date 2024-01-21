gsap.to(".box1", {
    scrollTrigger: {
        trigger: ".box1",
        toggleActions: "restart pause resume reset",
    },
    x: 0,
    duration: 2, 
    rotation: 0

})

// gsap.to(".box2", {
//     scrollTrigger: {
//         trigger: ".box2",
//         toggleActions: "restart pause resume reset",
//         start: "-60 center",
//         end: "top center",
//         scrub: 4
//     },
//     x: 0,
//     duration: 2, 
//     rotation: 0

// })

// gsap.to(".box3", {
//     scrollTrigger: {
//         trigger: ".box3",
//         toggleActions: "restart pause resume reset",
//         start: "-60 center",
//         end: "top center",
//         scrub: 4
//     },
//     x: 0,
//     duration: 2, 
//     rotation: 0

// })

gsap.to(".pygame", {
    scrollTrigger: {
        trigger: ".pygame",
        toggleActions: "restart pause resume reset"
    },
    x: 0,
    duration: 2, 
    rotation: 360

})

gsap.to(".lecke1", {
    scrollTrigger: {
        trigger: ".fadein1",
        toggleActions: "restart pause resume reset"
    },
    opacity: 2,
    y: 0,
    duration: 3, 
    delay: 1

})

gsap.from('.fadein1', { 
    scrollTrigger:{
        trigger: ".pygame",
        toggleActions: "restart pause resume reset",
    },
    opacity: 0,
    y: 20, duration: 1, 
    delay: 3 
});
gsap.from('.fadein2', { 
    scrollTrigger:{
        trigger: ".fadein2",
        toggleActions: "restart pause resume reset",
    },
    opacity: 0,
    y: 20, duration: 1, 
    delay: 1 
});

gsap.from('.code', { 
    scrollTrigger:{
        trigger: ".code",
        toggleActions: "restart pause resume reset",
        start: "top center"
    },
    opacity: 0,
    x: 40, duration: 1.5, 
    delay: 4,
});

gsap.from('.py', { 
    scrollTrigger:{
        trigger: ".py",
        toggleActions: "restart pause resume reset",
        start: "top center"
    },
    opacity: 0,
    x: 40, duration: 1.5, 
    delay: 4,
});

gsap.from('.py', { 
    scrollTrigger:{
        trigger: ".py",
        toggleActions: "restart pause resume reset",
        start: "top center",
        scrub: 0.5,
        pin: true,
        start: "top center",
        end: "bottom -1000px"
    },
    y: "60%", 
    rotation: 0,
    delay: 5,
});



ScrollTrigger.create({
    trigger: "#small",
    start: "top top",
    end: "+=100%",
    // pinSpacing: false,
    pin: true
})