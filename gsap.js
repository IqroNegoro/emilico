document.addEventListener("DOMContentLoaded", () => {
    gsap.to("#loading", {
        y: '-100%',
        ease: 'power2.in',
    })
    gsap.fromTo(".animate-up", {
        y: 10,
        opacity: 0,
        duration: 1,
    }, {
        y: 0,
        opacity: 1,
        stagger: 0.25,
        onComplete: () => {
            gsap.fromTo(".animate-right", {
                x: -10,
                opacity: 0,
                duration: 1
            }, {
                x: 0,
                opacity: 1,
                stagger: 0.25,
                onComplete: () => { 
                    gsap.fromTo("#musicPlayer", {
                        y: 10,
                        opacity: 0,
                        duration: 0
                    }, {
                        y: 0,
                        opacity: 1
                    })
                }
            })
        }
    })
})