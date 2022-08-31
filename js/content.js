window.addEventListener('load',()=>{

    const blueText = document.querySelectorAll('.blue-text')
    const bigText = document.querySelectorAll('.Big-text')
    const smallText = document.querySelectorAll('.explanation-text')
    const icon = document.querySelectorAll('.icon')




    initEvent();

    function initEvent(){

        window.addEventListener('scroll',scrollContent)
    }

    function scrollContent(){

        let scrollHeight = window.pageYOffset;

        if(scrollHeight>=100){
            gsap.to(blueText[0],{opacity:1,top:0,duration:0.3,ease:'power3.out',delay:1})
            gsap.to(bigText[0],{opacity:1,top:15,duration:0.3,ease:'power3.out',delay:1.3})
            gsap.to(smallText[0],{opacity:1,top:60,duration:0.3,ease:'power3.out',delay:1.5})
        }
        if(scrollHeight>=1000){
            gsap.to(icon[0],{scale:1,duration:0.7,ease:'power1.out',delay:0.2})
            gsap.to(icon[2],{scale:1,duration:0.7,ease:'power1.out',delay:0.3})
            gsap.to(icon[4],{scale:1,duration:0.7,ease:'power1.out',delay:0.4})
            gsap.to(icon[1],{scale:1,duration:0.7,ease:'power1.out',delay:0.5})
            gsap.to(icon[3],{scale:1,duration:0.7,ease:'power1.out',delay:0.6})
            gsap.to(icon[5],{scale:1,duration:0.7,ease:'power1.out',delay:0.7})
        }
        if(scrollHeight>=1300){
            gsap.to(blueText[1],{opacity:1,top:0,duration:0.3,ease:'power3.out',delay:1})
            gsap.to(bigText[1],{opacity:1,top:15,duration:0.3,ease:'power3.out',delay:1.3})
        }
    }


})