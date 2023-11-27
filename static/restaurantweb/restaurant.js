//fudPic &Hero-Parallax//
window.addEventListener("scroll",function(){
    Array.from(foodImages).forEach(foodImage => {
    var scrolled = window.pageYOffset
    var rate = scrolled * 0.7;
    foodImage.style.transform = 'translate3d(0px,'+rate+'px,0px)'})

        var fudPic1Container = document.querySelector(".fudPic1Container")
        var rate2 = (fudPic1Container.getBoundingClientRect().y * 0.15) - 40
        fudPic1Container.style.transform = 'translateY('+rate2 +"px)"
        var fudTexts = document.querySelector(".fudTexts")
        var rate3 = (fudTexts.getBoundingClientRect().y * (-0.14))
        fudTexts.style.transform = 'translateY('+rate3 +"px)"
        //fud3 pics//
        var fud3 = document.querySelector(".fud3Pic2")
        var fud3Pic2Container = document.querySelector(".fud3Pic2Container")
        var rate4 = fud3Pic2Container.getBoundingClientRect().y * (-0.99)
        fud3.style.transform = 'translateY('+rate4 +"px)"
        //fud4 pics//
        var fud4Pic2 = document.getElementsByClassName("fud4Pic2")
        var fud4Pic2Container = document.querySelector(".fud4Pic2Container")
        var burgerRate1 = (fud4Pic2Container.getBoundingClientRect().y * (-0.19))
        var burgerRate2 = (fud4Pic2Container.getBoundingClientRect().y * (-0.13))
        var burgerRate3 = (fud4Pic2Container.getBoundingClientRect().y * (-0.09))
        var burgerRate4 = (fud4Pic2Container.getBoundingClientRect().y * (0.09))
        var burgerRate5 = (fud4Pic2Container.getBoundingClientRect().y * (0.13))
        var burgerRate6 = (fud4Pic2Container.getBoundingClientRect().y * (0.19))
        fud4Pic2[0].style.transform = 'translateY('+ burgerRate1 +"px)" 
        fud4Pic2[1].style.transform = 'translateY('+ burgerRate2 +"px)" 
        fud4Pic2[2].style.transform = 'translateY('+ burgerRate3 +"px)" 
        fud4Pic2[4].style.transform = 'translateY('+ burgerRate4 +"px)" 
        fud4Pic2[5].style.transform = 'translateY('+ burgerRate5 +"px)"
        fud4Pic2[6].style.transform = 'translateY('+ burgerRate6 +"px)"
        //tradition pics//
        var traditionPicContainer = document.querySelector(".traditionPicContainer")
        var traditionRate = (traditionPicContainer.getBoundingClientRect().y * (-0.39)) + 80
        traditionPicContainer.style.transform = 'translateY('+traditionRate +"px)"
        var traditionPicContainer2 = document.querySelector(".traditionPic2Container")
        var traditionRate2 = traditionPicContainer2.getBoundingClientRect().y * (0.2)
        traditionPicContainer2.style.transform = 'translateY('+traditionRate2 +"px)"
})
//Menu-intersection observer
const options = {root:null,threshold:1,rootMargin:"0px 0px -60px 0px"}
const options2 = {root:null,threshold:0.3,rootMargin:"-200px 0px 0px 0px"}
const menuItems =document.querySelectorAll(".menuItemContainer")
const obs= new IntersectionObserver((e) =>{
    e.forEach((thing) => {
        if (thing.isIntersecting==true){thing.target.classList.add("scrolledThrough")}
        else{thing.target.classList.remove("scrolledThrough")}})},options)
    menuItems.forEach(item => {obs.observe(item)})
//menuNav anim
const menuContainer = document.querySelector(".menuContainer")
const menuNav = document.querySelector(".menuNav")
const obs2 = new IntersectionObserver((e) =>{
    e.forEach(entry => {
        if(entry.isIntersecting == false && window.innerWidth>1025){menuNav.style.left = "300px"}
        else if(entry.isIntersecting == false && window.innerWidth<1025){menuNav.style.bottom = window.innerHeight - 70 + "px"}
        else if (entry.isIntersecting == true && window.innerWidth > 1025){menuNav.style.left = "355px"}
        else if (entry.isIntersecting == true && window.innerWidth < 1025){menuNav.style.bottom = window.innerHeight - 130 + "px"}})},options2)
obs2.observe(menuContainer)
//Menu-Nav anim Click//
const menuDesc = document.getElementsByClassName("menuDescription")
var mDesc = []
const menuItemz = document.getElementsByClassName("menuItem")
var mItemz = []
const menuPrice = document.getElementsByClassName("menuPrice")
var mPrice = []
for(i=0;i<menuDesc.length;i++){mDesc.push(menuDesc[i].innerHTML)}
for(i=0;i<menuItemz.length;i++){mItemz.push(menuItemz[i].textContent)}

for(i=0;i<menuPrice.length;i++){mPrice.push(menuPrice[i].innerHTML)}
const menuNavItems = document.getElementsByClassName("menuNavItem")
var menuSubtitle = document.querySelector(".menuSubtitle")
var menuTitle = document.querySelector(".menuTitle")
Array.from(menuNavItems).forEach(menuItem=> {
    menuItem.addEventListener("click",function(e){
        //change menu items
        if(e.target.id=="DESSERT"){
            //get rid of everything
            menuSubtitle.innerHTML = "SWEETS"
            for(md in menuDesc){menuDesc[md].innerHTML=""}
            for(mp in menuPrice){menuPrice[mp].innerHTML=""}
            for(miz in menuItemz){menuItemz[miz].innerHTML=""}
            var dItems = ["PUUDING CHÔMEUR WITH MAPLE & ENGLISH CREAM","CREME BRULEE","BROWNIE","CHOCOLATE FONDANT"]
            var dDesc = ["","Custard, pecans","Vanilla ice cream, curable is chocolate syrup","Custard"]
            var dPrice = ["10","10","10","10"]
            for(i=0;i<dItems.length;i++){
                menuDesc[i].innerHTML = dDesc[i]
                menuItemz[i].innerHTML = dItems[i]
                menuPrice[i].innerHTML = dPrice[i]}}
        else if(e.target.id=="BISTRO MENU"){
            menuSubtitle.innerHTML = "AT TABLE"
            for(i=0;i<mItemz.length;i++){
                menuDesc[i].innerHTML = mDesc[i]
                menuItemz[i].innerHTML = mItemz[i]
                menuPrice[i].innerHTML = mPrice[i]}}
        else if(e.target.id=="TO DRINK"){
            //get rid of everything
            for(md in menuDesc){menuDesc[md].innerHTML=""}
            for(mp in menuPrice){menuPrice[mp].innerHTML=""}
            for(miz in menuItemz){menuItemz[miz].innerHTML=""}
            menuSubtitle.innerHTML = "WINE MENU"
            var drItems = ["CDR*, LA CABOTTE","GAMAY, MORGON CORCELETTE, DOMAINE BODILLARD","MERLOT*, SUPERIOR BORDEAUX, HAUT GAUSSENS FLOWER",
            "CABERNET FRANC, PHILIPPE DELMÉE","MERLOT, DOMINIQUE ANDIRAN","MANSOIS, CABERNET SAUVIGNON, DOMAINE LAURENS, CUVÉE FLARS","CÔTE D’OR, MICHEL GAY & FILS",
            "GAMAY, MORGON CORCELETTE, DOMAINE BODILLARD","SAINT-ESTÈPHE*, ARNAUD VINEYARDS","GRENACHE, ADARAS","MONTEPULCIANO D'ABRUZZO, CANTINA TOLLO",
            "CHIANTI RESERVA, RENZO MASI","BARBERA DEL MONFERRATO, SCARPETTA","VALPOLICELLA RIPASSO, THE BIGNELE","SUPER TUSCAN, CASALBOSCO"]
            var drDesc = ["Colline Rouge*, France 2020 (ORGANIC DYNAMIC)","Alexia, Beaujolais, France 2020","Earth, France 2016","It's twelve, Anjou, France 2020","Magnus, South-West, France 2019",
            "South-West, France 2018","BURGUNDY, France 2018","L'Auguste, France 2017","Bordeaux, France 2015","Kalizo, Almansa, Spain 2020 (VEGAN)","Abruzzo, Italy 2020","Tuscany, Italy 2019",
            "Piedmont, Italy 2019","Veneto, Italy 2019","Orchidea, Tuscany, Italy 2018"]
            var drPrice = ["V. 13 / Btl. 56","V. 13 / Btl. 58","V. 13. / Btl. 58","V. 13. / Btl. 56","60","70","96","126","105",'45','47','56','62','V. 14 / 65','92']
            for(i=0;i<drItems.length;i++){
                menuDesc[i].innerHTML = drDesc[i]
                menuItemz[i].innerHTML = drItems[i]
                menuPrice[i].innerHTML = drPrice[i]}}
        //change title//
        menuTitle.innerHTML = e.target.id
        for(m in menuNavItems){
            if (e.target.className == menuNavItems[m].className){menuNavItems[m].style.borderBottom="3px solid orange"}
            else{menuNavItems[m].style.borderBottom="none"}}})})
//nav-close anim//
const bookOnlineBtn = document.querySelector(".bookOnlineBtn")
const navig = document.querySelector(".navig")
const navImage = document.querySelector(".logoImage")
const socialContainer = document.querySelector(".socialContainer")
const socialImage = document.querySelector(".socialImage")
navImage.addEventListener("click",function(){
   if(navig.offsetHeight==70){navig.style.height = "585px"}
   else if(navig.offsetHeight==585){navig.style.height="70px"}})
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
        menuNav.style.left = "300px"
        menuNav.style.rotate = "-90deg"
        menuNav.style.width = "100vh"
        navig.style.height = "100vh";
        navig.style.width = "300px"
        navImage.style.height = "140px"
        navImage.style.margin = "50px 0px 80px 0px"
        navImage.style.width = "140px"
        socialContainer.style.margin = "100px 0px 0px 0px"
        socialImage.style.height = "33px"}})
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
        socialImage.style.height = "25px"}})
