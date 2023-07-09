# GSAP-Demystified

#### ♥ GSAP-CDN

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" integrity="sha512-Ic9xkERjyZ1xgJ5svx3y0u3xrvfT/uPkV99LBwe68xjy/mGtO+4eURHZBW2xW4SZbFrF1Tf090XqB+EVgXnVjw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
#### 💛 JQUERY-CDN

```
<script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
```

#### 💜 TEXTTILLATE-CDN
###### => ANIMATE CSS-CDN link in header =AND=  TEXTTILLATE CDN

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/textillate@0.4.1/assets/animate.min.css">
<script src="https://cdn.jsdelivr.net/npm/textillate@0.4.1/jquery.textillate.min.js"></script>
```

#### 💙 LETTERING-CDN
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.6.1/jquery.lettering.min.js" integrity="sha512-VJ/iYbiu1eJ6yLimfTi65t2R9TFcG5D9X8ZCfbbEFhTfPnKJh8byoKXEawi5ScJZBYL1eiirL1+MczZDx0Tz9Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
#### ⚠️ Maintain order in the end of `<body>` tag
1. JQUERY CDN
2. TEXTTILLATE CDN
3. LETTERING CDN
4. GSAP CDN
5. JS script tag

#### ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
#### ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
#### 📝 GSAP concepts understanding

#### 1️⃣✔️ gsap.from(" `<CSS Selectors>` " , { `<changes that you want like css properties>` } );
#### 📃 starting property changes
```
gsap.from(".nav1",{
    color:"red",
    duration: 5,
    y:20
})
```

Here in the starting for the 5 sec for NAVBAR 1 the font color is red and the direction on Y-axis is 20px for 5 sec
And then after 5 sec it will get the original css attributes from `<style>` 

#### 2️⃣✔️ gsap.to(" `<CSS Selectors>` " , { `<changes that you want like css properties>` } );
#### 📃 Ending properties changes

```
gsap.to(".nav2",{
    color:"white",
    duration: 5
})
```

Here in the starting all properties/attributes of NAVBAR 2 is same as the original css attributes from `<style>` And then the GSAP attributes will be changes according to the code

#### ♻️ Some simple gsap properties `<changes that you want like css properties>`
#### 📃 If you know the tailwind-Css then it is same as like tailwind
```
 color:"red" ,
 duration: 5 ,
 delay : 2 ,
 y:20 ,
 opacity :0 ,
 overflow:"hidden" ,
 scale : 3,

```

#### 3️⃣✔️ gsap.timeline() 
#### timeline is the same like that this animation starts first then this animation starts and then this animation starts and then.....

```
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

    .to(".mainTxt",{
        opacity:0,
        scale : 3,
        duration :2,
        overflow:"hidden"
    })
  
```

Here first the animation of NAVBAR1 starts Then the animation of NAVBAR2 starts and Then the animation of MAINTXT starts
