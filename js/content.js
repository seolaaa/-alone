window.addEventListener('load',()=>{

    const blueText = document.querySelectorAll('.blue-text')
    const bigText = document.querySelectorAll('.Big-text')
    const smallText = document.querySelectorAll('.explanation-text')

    const icon = document.querySelectorAll('.icon')

    const stacoreText = document.querySelector('#stacore-title')
    const line = document.querySelector('.line')

    const proList = document.querySelectorAll('#projects-list>li')

    const fish = document.querySelectorAll('#fish-wrap>img')

    console.log(fish.length)


    let n = 0;
    const content = 'THIS IS A STACORE!                     '
   

    


    initEvent();
    setInterval(typing,100);
    
   

    function initEvent(){

        window.addEventListener('scroll',scrollContent)
        window.addEventListener('scroll',scrollBall)
        window.addEventListener('scroll',scrollFish)
        window.addEventListener('scroll',scrollPro)
        

    }


    function scrollContent(){

        let scrollHeight = window.pageYOffset;

        if(scrollHeight>=80){
            gsap.to(blueText[0],{opacity:1,top:0,duration:0.3,ease:'power3.out',delay:1})
            gsap.to(bigText[0],{opacity:1,top:15,duration:0.3,ease:'power3.out',delay:1.3})
            gsap.to(smallText[0],{opacity:1,top:60,duration:0.3,ease:'power3.out',delay:1.5})
        }
    }


    function scrollBall(){

        let scrollHeight = window.pageYOffset;
        
        if(scrollHeight>=900){

            console.log(1);
            gsap.to(icon[0],{left:0,opacity:1,duration:0.7,ease:'power2.out',delay:0.2})
            gsap.to(icon[3],{left:0,right:0,opacity:1,duration:0.7,ease:'power2.out',delay:0.3})
            gsap.to(icon[5],{left:0,opacity:1,duration:0.7,ease:'power2.out',delay:0.4})
            gsap.to(icon[4],{left:0,right:0,opacity:1,duration:0.7,ease:'power2.out',delay:0.6})
            gsap.to(icon[2],{left:0,right:0,opacity:1,duration:0.7,ease:'power2.out',delay:0.7})
            gsap.to(icon[1],{left:0,opacity:1,duration:0.7,ease:'power2.out',delay:0.8})
            
           
        }
        
    }

    function scrollFish(){

        let scrollHeight = window.pageYOffset;

        if(scrollHeight>=1500){
            gsap.to(fish[0],{opacity:1,top:100,duration:1,ease:'power1.out',delay:0.2})
            gsap.to(fish[1],{opacity:1,top:350,duration:1,ease:'power1.out',delay:0.4})
            gsap.to(fish[2],{opacity:1,top:550,duration:1,ease:'power1.out',delay:0.6})
            gsap.to(fish[3],{opacity:1,top:0,duration:1,ease:'power1.out',delay:1})
            gsap.to(fish[4],{opacity:1,top:500,duration:1,ease:'power1.out',delay:1})
        }


    }

    function scrollPro(){

        

        let scrollHeight = window.pageYOffset;

        if(scrollHeight>=2300){
            gsap.to(blueText[1],{opacity:1,top:0,duration:0.3,ease:'power3.out',delay:1})
            gsap.to(bigText[1],{opacity:1,top:15,duration:0.3,ease:'power3.out',delay:1.3})
            gsap.to(line,{width:1000,duration:0.1,ease:'power4.out',delay:2,onComplete:()=>{
                if(scrollHeight>=2000){
                    for(let i=0; i<proList.length; i++){
                        gsap.to(proList[i],{top:0,opacity:1,duration:0.3,ease:'power4.out',delay:i*0.2})
                    }
                }
            }})
        }
    }

    function typing(){
        stacoreText.innerHTML += content[n++]; 
        if(n > content.length){ 
            stacoreText.innerHTML = '';
            n = 0;
        }
    }


    function random(min, max) { 
       
        return parseFloat((Math.random() * (max - min) + min).toFixed(2))
    }

    function floatingCircle(item, delayAfter, size, xsize) {
        gsap.to(item,random(1, 3.5),{
                delay: random(0, delayAfter),x: xsize,y: size,repeat: -1,yoyo: true,ease: Power2.easeInOut 
            }
        )
    }

    //   floatingCircle('.icon1',30,10)
    //   floatingCircle('.icon2',30,10)
    //   floatingCircle('.icon3',10,30)
    //   floatingCircle('.icon4',10,30)
    //   floatingCircle('.icon5',30,10)
    //   floatingCircle('.icon6',10,30)

      floatingCircle('#fish1',1,30,10)
      floatingCircle('#fish2',5,20,30)
      floatingCircle('#fish3',1,30,30)
      floatingCircle('#fish4',2,10,30)
      floatingCircle('#fish5',8,20,35)


   
   


})