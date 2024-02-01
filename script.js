
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('myHeader');
    var page = document.getElementById('page');
    var openMenuButton = document.getElementById('openmenu');

    window.addEventListener('scroll', function() {
        page.classList.remove('menuopen');
        if (window.scrollY >= 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Event listener to remove the sticky class when the button is clicked
    openMenuButton.addEventListener('click', function() {
        header.classList.remove('sticky');
        page.classList.add('menuopen');
    });

    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default action
            event.preventDefault();

            // Get the target element
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);

            // Smooth scroll to target
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});



gsap.to(".main", {
    scrollTrigger: {
        trigger: ".main",
        toggleActions: "restart none resume reset",
    },
    y: 0,
    x: 0,
    duration: 2.5,
    ease: "bounce.out"

});
let mm = gsap.matchMedia();

mm.add("(   min-width: 756px)", () => {

    gsap.to(".image1", {
        scrollTrigger: {
            trigger: ".image2",
            start: "-200 center",
            end: "-150 top",
            scrub: 2,
            snap: {
                snapTo: "",
                duration: { min: 1, max: 1.5 },
                delay: 0.2,
                ease: "power4.inOut"
            },
        },
        y: 0,
        x: 0,
    });

    gsap.to(".image2", {
        scrollTrigger: {
            trigger: ".image1",
            start: "-200 center",
            end: "-150 top",
            scrub: 2,
            snap: {
                snapTo: "",
                duration: { min: 1, max: 1.5 },
                delay: 0.2,
                ease: "power4.inOut"
            },
        },
        y: 0,
        x: 0,
    });

    gsap.to(".image3", {
        scrollTrigger: {
            trigger: ".image3",
            start: "-200 center",
            end: "-150 200",
            scrub: 2,
            snap: {
                snapTo: "",
                duration: { min: 1, max: 1.5 },
                delay: 0.2,
                ease: "power4.inOut"
            },
        },
        y: 0,
        x: 0,
    });

    gsap.to(".image4", {
        scrollTrigger: {
            trigger: ".image4",
            start: "-200 center",
            end: "-150 200",
            scrub: 2,
            snap: {
                snapTo: "",
                duration: { min: 1, max: 1.5 },
                delay: 0.2,
                ease: "power4.inOut"
            },
        },
        y: 0,
        x: 0,
    });

    gsap.to(".image5", {
        scrollTrigger: {
            trigger: ".image5",
            start: "-200 center",
            end: "-150 200",
            scrub: 2,
            snap: {
                snapTo: "",
                duration: { min: 1, max: 1.5 },
                delay: 0.2,
                ease: "power4.inOut"
            },
        },
        y: 0,
        x: 0,
    });

    gsap.to(".image6", {
        scrollTrigger: {
            trigger: ".image6",
            start: "-200 center",
            end: "-150 200",
            scrub: 2,
            snap: {
                snapTo: "",
                duration: { min: 1, max: 1.5},
                delay: 0.2,
                ease: "power4.inOut"
            },
        },
        y: 0,
        x: 0,
    });

});

gsap.to(".box1", {
    scrollTrigger: {
        trigger: ".box1",
        toggleActions: "restart pause resume reset",
    },
    x: 0,
    duration: 3,
    rotation: 0,
    ease: "bounce.out",
    delay: 0.5

});






    gsap.to(".image1", {
        scrollTrigger: {
            trigger: ".image1",
            start: "-200 center",
            end: "-150 top",
            scrub: 2,
        },
        x: 0,
    });

    gsap.to(".image2", {
        scrollTrigger: {
            trigger: ".image2",
            start: "-200 center",
            end: "-150 top",
            scrub: 2,
        },
        y: 0,
        x: 0,
    });

    gsap.to(".image3", {
        scrollTrigger: {
            trigger: ".image3",
            toggleActions: "restart pause resume reset",
            start: "-200 center",
            end: "-150 200",
            scrub: 2,
        },
        y: 0,
        x: 0,
        duration: 2,
        rotation: 0,
    });

    gsap.to(".image4", {
        scrollTrigger: {
            trigger: ".image4",
            toggleActions: "restart pause resume reset",
            start: "-200 center",
            end: "-150 200",
            scrub: 2,
        },
        y: 0,
        x: 0,
        duration: 2,
        rotation: 0,
    });

    gsap.to(".image5", {
        scrollTrigger: {
            trigger: ".image5",
            toggleActions: "restart pause resume reset",
            start: "-200 center",
            end: "-150 200",
            scrub: 2,
        },
        y: 0,
        x: 0,
        duration: 2,
        rotation: 0,
    });

    gsap.to(".image6", {
        scrollTrigger: {
            trigger: ".image6",
            toggleActions: "restart pause resume reset",
            start: "-200 center",
            end: "-300 top",
            scrub: 2,
        },
        y: 0,
        x: 0,
        duration: 2,
        rotation: 0,
    });


gsap.to(".pdiv", {
    scrollTrigger: {
        trigger: ".pdiv",
        toggleActions: "play pause resume none",
    },
    y: 0,
    duration: 2,
    rotation: 0,
    opacity: 1
})

gsap.to(".pdiv2", {
    scrollTrigger: {
        trigger: ".pdiv2",
        toggleActions: "play pause resume none",
    },
    y: 0,
    duration: 2,
    rotation: 0,
    opacity: 1
})

gsap.to(".ptext", {
    scrollTrigger: {
        trigger: ".pdiv",
        toggleActions: "play pause resume none",
    },
    y: 0,
    duration: 2,
    rotation: 0,
    opacity: 1,
    delay: 2
})

gsap.to(".ptext2", {
    scrollTrigger: {
        trigger: ".pdiv2",
        toggleActions: "play pause resume none",
    },
    y: 0,
    duration: 2,
    rotation: 0,
    opacity: 1,
    delay: 2
})


