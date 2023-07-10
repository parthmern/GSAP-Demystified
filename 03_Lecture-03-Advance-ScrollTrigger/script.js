gsap.from(".section1 img",{
    scale : 1.5,
    duration : 2,
    delay : 1
})

gsap.to(".section2 img",{
    scrollTrigger :  {
        trigger : ".section2 img",
        scroller : "body",
        markers : true,
        start : "top 80%",
        end : "bottom 10%",
        // scrub matlab scrolling k saath saath animation hoga
        // scrub : true
        // scrub : value(1-5) then wo smoothness add karega in animation while scrolling
        scrub : 5,
        //pin : true ---matlab wo scroll-start hoga tab jaha hoga waha PINNED rahega and scroll-end hote he UNPINNED ho jayega
        pin:true ,
        // pinSpacing : true
    },
    rotate : 360,
    duration : 2
})