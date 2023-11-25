//Parallax - Hero//
window.addEventListener("scroll",function(){
    Array.from(foodImages).forEach(foodImage => {
    var scrolled = window.pageYOffset
    var rate = scrolled * 0.7;
    foodImage.style.transform = 'translate3d(0px,'+rate+'px,0px)';})
})
//nav close//
const navImage = document.querySelector(".logoImage")
const navig = document.querySelector("nav")
navImage.addEventListener("click",function(){
    console.log(navImage.height)

})
//menu intersection observer
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
