

gsap.from(".logo", {
    opacity: 0,
    x: -200,
    duration: 0.7,
    delay: 0.6,
    scrub: true,
}, "orange")

gsap.from(".login", {
    x: 200,
    duration: 0.7,
    delay: 0.7,
    scrub: true,
}, "orange")

gsap.from("nav li a", {
    opacity: 0,
    y: -200,
    duration: 0.7,
    stagger: 0.1,
    scrub: true,
    delay: 0.7,
})

var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
    }
})

tl1.to("#fanta", {
    y: "130%",
    left: "3%",
    duration: 1,
},"Kamal")

tl1.to("#orange-cut", {
    y: "230%",
    left: "5%",
    duration: 1,
},"Kamal")

tl1.to("#leaf", {
    y: "310%",
    left: "26%",
    rotate: "40deg",
    duration: 1,
    width: "14%",
},"Kamal")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
    }
})

tl2.to("#fanta", {
    y: "239%",
    left: "32%",
    duration: 1,
},"Kamal")

tl2.to("#orange-cut", {
    y: "345%",
    left: "37.5%",
    duration: 1,
    width:"25%"
},"Kamal")

tl2.to("#leaf", {
    y: "630%",
    left: "80%",
    rotate: "300deg",
    duration: 1,
    width: "12%",
},"Kamal")