window.addEventListener('load',()=>{

    const header = document.querySelector('#header-wrap')

    let headerHeight = header.offsetHeight;

    initEvent();

    function initEvent(){
        window.addEventListener('scroll',scrollHeader)
    }

    function scrollHeader(){
       
        if(headerHeight<=100){
            header.style.position = 'fixed'
            header.style.background = 'rgba(0, 0, 0, 0.7)'
        }
    }
})