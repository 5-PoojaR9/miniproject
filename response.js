window.addEventListener('resize',function(){
    if (window.innerWidth<1080){
        document.querySelector('.navbar').computedStyleMap.height='50px';
    }else{
        document.querySelector('.navbar').computedStyleMap.height='60px';
    }
});
