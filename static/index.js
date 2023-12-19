//email//
function sendEmail(){
    Email.send({
        SecureToken : "0e7e1a5b-7e41-40d0-ba41-7e97504d129b ",
        To : 'nguyen.victor4@gmail.com',
        From : "nguyen.victor4@gmail.com",
        Subject : document.getElementById("name").value + " " + document.getElementById("email").value,
        Body : document.getElementById("message").value 
    }).then(
        message => alert(message)
        );}
//message input/
const typingImage = document.querySelector(".typingImage")
window.addEventListener("click",function(){
    if(document.activeElement.className=="messageInput"){
        typingImage.style.scale="1"
    }
    else{typingImage.style.scale="0"}
})
        
//scroll animations//
let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;
    if(prevScrollPos > currentScrollPos | prevScrollPos == currentScrollPos){
        document.querySelector(".navLinks").style.top = "0"
    }
    else{
        document.querySelector(".navLinks").style.top = "-70px"
    }
    prevScrollPos = currentScrollPos
})
const options = {
    root:null,
    threshold:1,
    rootMargin:"0px 0px -50px 0px"
}
const projs =document.querySelectorAll(".project")
const obs= new IntersectionObserver((e) =>{
    e.forEach((thing) => {
        if (thing.isIntersecting==true){
            thing.target.classList.add("scrolled")}
    })
},options)
projs.forEach(proj => {
    obs.observe(proj)
})
//window load//
const cat = document.querySelector(".catLoadingContainer")
const body = document.querySelector("body")
window.addEventListener("load",function(){
    setTimeout(unloadCat,100)
})
function unloadCat(){
    cat.style.display = "none";
    body.style.overflow = "initial"
}

