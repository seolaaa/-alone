window.addEventListener('load',()=>{

    const textWrap = document.querySelectorAll('.visual-text-wrap')
    const titleSpan = document.querySelectorAll('.visual-title>span')
    const text = document.querySelectorAll('.visual-text')
   

    TextAni();


    function TextAni(){
        gsap.set(textWrap[0], {opacity:1});
        gsap.to(titleSpan[0],{opacity:1,scaleY:1,duration:0.5,ease:'power1.out',delay:0.3})
        gsap.to(titleSpan[1],{opacity:1,scaleY:1,duration:0.5,ease:'power1.out',delay:0.7})
        gsap.to(text[0],{opacity:1,scaleY:1,duration:0.7,ease:'power1.out',delay:1.2})
        gsap.set(textWrap[0],{opacity:0,delay:5,onComplete:()=>{
            gsap.set(titleSpan[0],{opacity:0,scaleY:1.5});
            gsap.set(titleSpan[1],{opacity:0,scaleY:1.5});
            gsap.set(text[0],{opacity:0,scaleY:1.5});
            TextAni2();
        }})
    }

        
         
    
    function TextAni2(){
        gsap.set(textWrap[1], {opacity:1});
        gsap.to(titleSpan[2],{opacity:1,scaleY:1,duration:0.5,ease:'power1.out',delay:0.3})
        gsap.to(titleSpan[3],{opacity:1,scaleY:1,duration:0.5,ease:'power1.out',delay:0.7})
        gsap.to(text[1],{opacity:1,scaleY:1,duration:0.7,ease:'power1.out',delay:1.2})
        gsap.set(textWrap[1],{opacity:0,delay:5,onComplete:()=>{
            gsap.set(titleSpan[2],{opacity:0,scaleY:1.5})
            gsap.set(titleSpan[3],{opacity:0,scaleY:1.5})
            gsap.set(text[1],{opacity:0,scaleY:1.5})
            TextAni();
        }})
    }
        
    })