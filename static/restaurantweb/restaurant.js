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
const options2 = {
    root:null,
    threshold:0.3,
    rootMargin:"-200px 0px 0px 0px"
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
//menuNav anim
// .menuNav{
//     flex:1;
//     height:60px;
//     left:0px;
//     rotate:0deg;
//     top:70px;
//     width:100vw;
// }
const menuContainer = document.querySelector(".menuContainer")
const menuNav = document.querySelector(".menuNav")
const obs2 = new IntersectionObserver((e) =>{
    e.forEach(entry => {
        if(entry.isIntersecting == false && window.innerWidth>1025){
            menuNav.style.left = "300px"
        }
        else if(entry.isIntersecting == false && window.innerWidth<1025){
            menuNav.style.bottom = window.innerHeight - 70 + "px"
        }
        else if (entry.isIntersecting == true && window.innerWidth > 1025){
            menuNav.style.left = "355px"
        }
        else if (entry.isIntersecting == true && window.innerWidth < 1025){
            menuNav.style.bottom = window.innerHeight - 130 + "px"
        }
    })
},options2)
obs2.observe(menuContainer)
//Menu-Nav anim Click//
const menuNavItems = document.getElementsByClassName("menuNavItem")
Array.from(menuNavItems).forEach(menuItem=> {
    menuItem.addEventListener("click",function(e){
        for(m in menuNavItems){
            if (e.target.className == menuNavItems[m].className){
                menuNavItems[m].style.borderBottom="3px solid orange"
            }
            else{menuNavItems[m].style.borderBottom="none"}
        }
    })
    menuItem.addEventListener("mouseenter",function(e){
        // .menuNavItem:hover{border-bottom:3px solid orange;padding:20px 40px 17px 40px;}
        for(m in menuNavItems){
            if (e.target.className == menuNavItems[m].className && menuNavItems[m].style.borderBottom != "3px solid orange"){
                menuNavItems[m].style.borderBottom="3px solid gray"
            }

            else if(menuNavItems[m].className != e.target.className){
                menuNavItems[m].style.borderBottom == "none"
            }
        }
    })
})
//nav-close anim//
// .navig{
//     height:70px;
//     max-width: 100%;
//     overflow: hidden;
//     width:100vw;
// }
// .bookOnlineBtn{margin:20px 0px 0px 0px;}
//     .logoImage{margin:0px 0px 30px 0px;height:70px;width:70px;}
//     .socialContainer{margin:0px;}
//     .socialImage{height:25px;}
const bookOnlineBtn = document.querySelector(".bookOnlineBtn")
const navig = document.querySelector(".navig")
const navImage = document.querySelector(".logoImage")
const socialContainer = document.querySelector(".socialContainer")
const socialImage = document.querySelector(".socialImage")
navImage.addEventListener("click",function(){
   if(navig.offsetHeight==70){
    navig.style.height = "585px"
   }
   else if(navig.offsetHeight==585){
    navig.style.height="70px"
   }
// .menuNav{
//     height:60px;
//     left:0px;
//     rotate:0deg;
//     top:70px;
//     width:100vw;
// }
})
window.addEventListener("resize",function(){
    if(window.innerWidth<1025){
        bookOnlineBtn.style.margin = "20px 0px 0px 0px"
        menuNav.style.height = "60px"
        menuNav.style.left = "0"
        menuNav.style.rotate = "0deg"
        menuNav.style.bottom = window.innerHeight - 130 + "px"
        menuNav.style.width = "100vw"
        navig.style.height = "70px";
        navig.style.maxWidth = "100%";
        navig.style.overflow = "hidden"
        navig.style.width = "100vw"
        navImage.style.height = "70px"
        navImage.style.margin = "0px 0px 30px 0px"
        navImage.style.width = "70px"
        socialContainer.style.margin = "0";
        socialImage.style.height = "25px"
    }
    else if(window.innerWidth>1025){
        bookOnlineBtn.style.margin = "60px 0px 0px 0px"
        menuNav.style.bottom = "0"
        menuNav.style.height = "60px"
        menuNav.style.left = "360px"
        menuNav.style.rotate = "-90deg"
        menuNav.style.width = "100vh"
        navig.style.height = "100vh";
        navig.style.width = "300px"
        navImage.style.height = "140px"
        navImage.style.margin = "50px 0px 80px 0px"
        navImage.style.width = "140px"
        socialContainer.style.margin = "100px 0px 0px 0px"
        socialImage.style.height = "33px"
    }
    console.log(document.querySelector(".menuNav").offsetWidth)
})
//nav load//
window.addEventListener("load",function(){
    if(window.innerWidth<1025){
        bookOnlineBtn.style.margin = "20px 0px 0px 0px"
        menuNav.style.height = "60px"
        menuNav.style.left = "0"
        menuNav.style.rotate = "0deg"
        menuNav.style.bottom = window.innerHeight - 130 + "px"
        menuNav.style.width = "100vw"
        navig.style.height = "70px";
        navig.style.maxWidth = "100%";
        navig.style.overflow = "hidden"
        navig.style.width = "100vw"
        navImage.style.height = "70px"
        navImage.style.margin = "0px 0px 30px 0px"
        navImage.style.width = "70px"
        socialContainer.style.margin = "0";
        socialImage.style.height = "25px"
    }
})
