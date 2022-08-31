window.addEventListener('load',()=>{

    const textWrap = document.querySelectorAll('.visual-text-wrap')
    const titleSpan = document.querySelectorAll('.visual-title>span')
    const text = document.querySelectorAll('.visual-text')
    const st = document.querySelectorAll('.st')
    const normal = document.querySelectorAll('.normal')


    let timer=null;

    console.log(st.length)
    console.log(normal.length)


  


    let animation = true;

    TextAni();


    function TextAni(){
        console.log(1);
        gsap.set(textWrap[0], {opacity:1});
        gsap.to(normal[0],{opacity:1,scaleY:1,duration:0.5,ease:'power1.out',delay:0.3})
        gsap.to(st[0],{opacity:1,scaleY:1,duration:0.5,ease:'power1.out',delay:0.7})
        gsap.to(text[0],{opacity:1,scaleY:1,duration:0.7,ease:'power1.out',delay:1.2})
        gsap.set(textWrap[0],{opacity:0,delay:5,onComplete:()=>{
            gsap.set(normal[0],{opacity:0,scaleY:1.5,});
            gsap.set(st[0],{opacity:0,scaleY:1.5,});
            gsap.set(text[0],{opacity:0,scaleY:1.5});
            TextAni2();
        }})
    }

        
         
    
    function TextAni2(){
        console.log(2);
        gsap.set(textWrap[1], {opacity:1});
        gsap.to(normal[1],{opacity:1,scaleY:1,duration:0.5,ease:'power1.out',delay:0.3})
        gsap.to(st[1],{opacity:1,scaleY:1,duration:0.5,ease:'power1.out',delay:0.7})
        gsap.to(text[1],{opacity:1,scaleY:1,duration:0.7,ease:'power1.out',delay:1.2})
        gsap.set(textWrap[1],{opacity:0,delay:5,onComplete:()=>{
            gsap.set(normal[1],{opacity:0,scaleY:1.2,})
            gsap.set(st[1],{opacity:0,scaleY:1.2,})
            gsap.set(text[1],{opacity:0,scaleY:1.2})
            TextAni();
        }})
    }
        
    })