// gsap.from(".left",{
//     width:0,
//     duartion:2,
//     ease: Expo.easeInOut
// })

let tl = gsap.timeline();
gsap.set(".a",{opacity:0,y:10});
gsap.set(".right img",{opacity:0, y:10, scale:1.6});

tl.from(".left",{
    width:0,
    ease: Expo.easeInOut,
    duration:1.5
})
.from(".right",{
    width:0,
    ease:Expo.easeInOut,
    duration:1.5
})
.to(".a",{
    delay:-2,
    stagger:.1,
    opacity:1,
    y:0,
    ease: Expo.easeInOut,
    duration:2
})
.to(".right img",{
    delay:-1,
    stagger:.1,
    opacity:1,
    scale:1,
    y:0,
    ease:Expo.easeInOut,
    duration:1.5
})