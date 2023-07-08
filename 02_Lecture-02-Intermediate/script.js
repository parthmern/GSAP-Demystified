// function in GSAP
// onStart function -- in: out:
// onUpdate function

// gsap.from(".lowest",{
//     onStart : function(){
//         $('.lowest').textillate({ 
//                                     in: { 
//                                         effect: 'fadeInUp',

//                                         // OUT bhi karna hai toh CALLBACKFUNCTION use karna padega
//                                         callback : function(){
//                                             $('.lowest').textillate('out')
//                                         } 
//                                         } , 

//                                     out:{effect: 'fadeOutUp'} 
//                                 });
//     }
// })



let tl = gsap.timeline();

tl
    .from(".lowest",{
        
    onStart : function(){
        $('.lowest').textillate({ 
                                    in: { 
                                        effect: 'fadeInUp',

                                        // OUT bhi karna hai toh CALLBACKFUNCTION use karna padega
                                        callback : function(){
                                            $('.lowest').textillate('out')
                                        } 
                                        } , 

                                    out:{
                                        effect: 'fadeOutUp'
                                        } 
                                });
    }
    })

    .from(".second-lowest",{

        opacity : 0,
        delay : 1,

        onStart : function(){
            $('.second-lowest').textillate({ 
                                        in: { 
                                            effect: 'fadeInUp',
    
                                            // OUT bhi karna hai toh CALLBACKFUNCTION use karna padega
                                            callback : function(){
                                                $('.second-lowest').textillate('out')
                                            } 
                                            } , 
    
                                        out:{
                                            effect: 'fadeOutUp'
                                            } 
                                    });
        }
        })

    .from(".second-top",{

            opacity : 0,
            delay : 1,
    
            onStart : function(){
                $('.second-top').textillate({ 
                                            in: { 
                                                effect: 'fadeInUp',
        
                                                // OUT bhi karna hai toh CALLBACKFUNCTION use karna padega
                                                callback : function(){
                                                    $('.second-top').textillate('out')
                                                } 
                                                } , 
        
                                            out:{
                                                effect: 'fadeOutUp'
                                                } 
                                        });
            }
            })

    .from(".top",{

                opacity : 0,
                delay : 1,
        
                onStart : function(){
                    $('.top').textillate({ 
                                                in: { 
                                                    effect: 'fadeInUp',
            
                                                    // OUT bhi karna hai toh CALLBACKFUNCTION use karna padega
                                                    callback : function(){
                                                        $('.top').textillate('out')
                                                    } 
                                                    } , 
            
                                                out:{
                                                    effect: 'fadeOutUp'
                                                    } 
                                            });
                }
                })    
    
    .to(".loader",{
                top : "-100%" ,
                deplay : 1,
                duration : 1.2 ,
                ease : Power4.easeOut

                    })



