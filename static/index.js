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
