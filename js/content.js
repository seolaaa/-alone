window.addEventListener('load',()=>{

    const blueText = document.querySelectorAll('.blue-text')
    const bigText = document.querySelectorAll('.Big-text')
    const smallText = document.querySelectorAll('.explanation-text')
    const icon = document.querySelectorAll('.icon')
    const stacoreText = document.querySelector('#stacore-title')




    let n = 0;
    const content = 'THIS IS A STACORE!   '

    


    initEvent();
    setInterval(typing,100);
    
   

    function initEvent(){

        window.addEventListener('scroll',scrollContent)
        window.addEventListener('scroll',scrollBall)
        

    }


    function scrollContent(){

        let scrollHeight = window.pageYOffset;

        if(scrollHeight>=100){
            gsap.to(blueText[0],{opacity:1,top:0,duration:0.3,ease:'power3.out',delay:1})
            gsap.to(bigText[0],{opacity:1,top:15,duration:0.3,ease:'power3.out',delay:1.3})
            gsap.to(smallText[0],{opacity:1,top:60,duration:0.3,ease:'power3.out',delay:1.5})
        }

        if(scrollHeight>=1300){
            gsap.to(blueText[1],{opacity:1,top:0,duration:0.3,ease:'power3.out',delay:1})
            gsap.to(bigText[1],{opacity:1,top:15,duration:0.3,ease:'power3.out',delay:1.3})
        }
    }


    function scrollBall(){

        let scrollHeight = window.pageYOffset;
        
        if(scrollHeight>=1000){

            console.log(1);
            gsap.to(icon[0],{top:0,opacity:1,duration:0.7,ease:'power1.out',delay:0.2})
            gsap.to(icon[3],{top:0,opacity:1,duration:0.7,ease:'power1.out',delay:0.3})
            gsap.to(icon[5],{top:0,opacity:1,duration:0.7,ease:'power1.out',delay:0.4})
            gsap.to(icon[4],{bottom:0,opacity:1,duration:0.7,ease:'power1.out',delay:0.6})
            gsap.to(icon[2],{bottom:0,opacity:1,duration:0.7,ease:'power1.out',delay:0.7})
            gsap.to(icon[1],{bottom:0,opacity:1,duration:0.7,ease:'power1.out',delay:0.8})
            
           
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

      floatingCircle('.icon1',20,10,)
      floatingCircle('.icon2',30,10)
      floatingCircle('.icon3',10,20)
      floatingCircle('.icon4',10,20)
      floatingCircle('.icon5',30,10)
      floatingCircle('.icon6',10,10)


   
   


})