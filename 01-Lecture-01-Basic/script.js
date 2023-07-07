// gsap.from -- starting property chnaged

// gsap.from(".nav1",{
//     color:"red",
//     duration: 5,
//     y:20
// })

// gsap.to -- ending property

// gsap.to(".nav2",{
//     color:"white",
//     duration: 5
// })

//----------------------------------------------
// timeline == series of events
// jo timeline k andar add kiya hai wo pehle ayega then jobaad me add kiya hai wo baad me animate hoga

let tl = gsap.timeline();

tl
    .from(".nav1",{
        opacity :0,
        y:20,
        duration :3
    })

    .from(".nav2",{
        opacity:0,
        y:20,
        duration:2
    })
    .from(".mainTxt",{
        opacity:0,
        scale : 1.5
    })
    .to(".mainTxt",{
        opacity:0,
        scale : 3,
        duration :2,
        overflow:"hidden"
    })

