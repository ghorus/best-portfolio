//Hero-Parallax//
window.addEventListener("scroll",function(){
    Array.from(foodImages).forEach(foodImage => {
    var scrolled = window.pageYOffset
    var rate = scrolled * 0.7;
    foodImage.style.transform = 'translate3d(0px,'+rate+'px,0px)';})
})
//Menu-intersection observer
const options = {
    root:null,
    threshold:1,
    rootMargin:"0px 0px -60px 0px"
}
const menuItems =document.querySelectorAll(".menuItemContainer")
const obs= new IntersectionObserver((e) =>{
    e.forEach((thing) => {
        if (thing.isIntersecting==true){
            thing.target.classList.add("scrolledThrough")}
        else{thing.target.classList.remove("scrolledThrough")}
    })
},options)
menuItems.forEach(item => {
    obs.observe(item)
})

const menuContainer = document.querySelector(".menuContainer")
const menuNav = document.querySelector(".menuNav")
const obs2 = new IntersectionObserver((e) =>{
    e.forEach(entry => {
        if (entry.isIntersecting == true){menuNav.style.left = "-150px";}
        else{menuNav.style.left = "-210px";}
    })
})
obs2.observe(menuContainer)
//nav-close anim//
const navImage = document.querySelector(".logoImage")
const navig = document.querySelector(".navig")
navImage.addEventListener("click",function(){
    if(navig.offsetHeight==70 && window.innerWidth<1025){navig.style.height="585px"}
    else if(navig.offsetHeight!=70 && window.innerWidth<1025){navig.style.height="70px"}

})
window.addEventListener("resize",function(){
    console.log(window.innerWidth)
})
