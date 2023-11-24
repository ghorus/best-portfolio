//hero parallax//
window.addEventListener("scroll",function(){
    var target = document.querySelector(".foodImage")
    var scrolled = window.pageYOffset
    var rate = scrolled * 0.5;
    target.style.transform = 'translate3d(0px,'+rate+'px,0px)';
})
