const titleContent = ["Character Creation", "Animation States","Player Controls","Game Mechanics"]
const subtitleContent = ["art style: pixel art &bull; total characters: 6","hit &bull; dialogue &bull; reactions","shoot &bull; move &bull; skip scene",
"bullet angle &bull; switch scenes &bull; attack patterns &bull; spawn rates &bull; move speed &bull; reset health bar"]
const numContent = ["01","02","03","04"]
const paragraphContent=["Each character was made on a website called Piskel to create animated sprites with pixel art. The game consists of 3 bosses (IRS agent, \"The Cleaner\", & the main character's mom), the main character, along with 3 other enemies(trash bags, poop, credit cards) in total.",
"Character reactions and animation states are triggered based on what scene players are on and whether the characters collide with each other.",
"Simply move around the player, use the spacebar to skip through scenes, and use the mouse to click.",
"Each settings for the game mechanics were enough to be challenging and fun, yet not impossible to beat."]
const explainNumContainer = document.querySelector(".explainNumContainer")
const explainTexts = document.querySelector(".explainTexts")
const image1s = document.getElementsByClassName("image1")
const imagesContainer = document.querySelector(".imagesContainer")
const imageContainers = document.querySelectorAll(".imagesContainer")
const synopsisTitle = document.querySelector(".synopsisTitle")
const synopsisContainer = document.querySelector(".synopsisContainer")
window.addEventListener("scroll",function(e){
    var pos = synopsisContainer.getBoundingClientRect().y - 200
    var scrollRate = pos * 0.9
    synopsisTitle.style.transform = "translateX(" + scrollRate + "px)"
    var imagePos = imageContainers[0].getBoundingClientRect().y
    var imageScrollRate1 = (imagePos) * 0.7
    var imageScrollRate2 = (imagePos) * 0.2 
    var imageScrollRate3 = (imagePos) * 0.5
    var imageScrollRate4 = (imagePos) * 0.8
    var imageScrollRate5 = (imagePos) * 0.9 
    var imageScrollRate6 = (imagePos) * 0.5
    image1s[0].style.transform = "translateY(" + imageScrollRate1 + "px)"
    image1s[1].style.transform = "translateY(" + imageScrollRate2 + "px)"
    image1s[2].style.transform = "translateY(" + imageScrollRate3 + "px)"
    image1s[3].style.transform = "translateY(" + imageScrollRate4 + "px)"
    image1s[4].style.transform = "translateY(" + imageScrollRate5 + "px)"
    image1s[5].style.transform = "translateY(" + imageScrollRate6 + "px)"
    //2nd container
    var imagePos2 = imageContainers[1].getBoundingClientRect().y
    var imageScrollRate7 = (imagePos2) * 0.7
    var imageScrollRate8 = (imagePos2) * 0.2 
    var imageScrollRate9 = (imagePos2) * 0.9
    var imageScrollRate10 = (imagePos2) * 0.8
    var imageScrollRate11 = (imagePos2) * 0.5 
    image1s[6].style.transform = "translateY(" + imageScrollRate7 + "px)"
    image1s[7].style.transform = "translateY(" + imageScrollRate8 + "px)"
    image1s[8].style.transform = "translateY(" + imageScrollRate9 + "px)"
    image1s[9].style.transform = "translateY(" + imageScrollRate10 + "px)"
    image1s[10].style.transform = "translateY(" + imageScrollRate11 + "px)"
    //last container
    var vidPos3 = imageContainers[3].getBoundingClientRect().y
    var vidScrollRate1 = (vidPos3) * 0.9
    var vidScrollRate2 = (vidPos3) * 0.3
    var vidScrollRate3 = (vidPos3) * 0.8
    var vidScrollRate4 = (vidPos3) * 0.4
    var vidScrollRate5 = (vidPos3) * 0.7
    var vidScrollRate6 = (vidPos3) * 0.6 
    const image2s = document.getElementsByClassName("image2")
    image2s[0].style.transform = "translateY(" + vidScrollRate1 + "px)"
    image2s[1].style.transform = "translateY(" + vidScrollRate2 + "px)"
    image2s[2].style.transform = "translateY(" + vidScrollRate3 + "px)"
    image2s[3].style.transform = "translateY(" + vidScrollRate4 + "px)"
    image2s[4].style.transform = "translateY(" + vidScrollRate5 + "px)"
    image2s[5].style.transform = "translateY(" + vidScrollRate6 + "px)"
})
const options = {
    root:null,
    threshold:0.3,
    rootMargin:"0px 0px 0px 0px"
}
const obs= new IntersectionObserver((e) =>{
    e.forEach((thing) => {
        var explainContainer = document.querySelector('.explainContainer')
        if (thing.isIntersecting==true && thing.target.className=="imagesContainer iCont1"){
            explainContainer.style.opacity = "1"
            // //newNumber
            const eNum = document.querySelector(".eNum")
            const explainNum = document.querySelector(".explainNum")
            eNum.remove()
            var neweNum = document.createElement("span")
            neweNum.classList.add("eNum")
            explainNum.innerHTML = numContent[0]
            explainNum.appendChild(neweNum)
            // //newExplainTitle
            const eTitle = document.querySelector(".eTitle")
            const explainTitle = document.querySelector(".explainTitle")
            eTitle.remove()
            var neweTitle = document.createElement("span")
            neweTitle.classList.add("eTitle")
            explainTitle.innerHTML = titleContent[0]
            explainTitle.appendChild(neweTitle)
            //newExplainSubtitle
            const eSubtitle = document.querySelector(".eSubtitle")
            const explainSubtitle = document.querySelector(".explainSubtitle")
            eSubtitle.remove()
            var neweSubtitle = document.createElement("span")
            neweSubtitle.classList.add("eSubtitle")
            explainSubtitle.innerHTML = subtitleContent[0]
            explainSubtitle.appendChild(neweSubtitle)
            //newExplainParagraph
            const eParagraph = document.querySelector(".eParagraph")
            const explainParagraph = document.querySelector(".explainParagraph")
            eParagraph.remove()
            var neweParagraph = document.createElement("span")
            neweParagraph.classList.add("eParagraph")
            explainParagraph.innerHTML = paragraphContent[0]
            explainParagraph.appendChild(neweParagraph)
               }
        else if (thing.isIntersecting==true && thing.target.className=="imagesContainer iCont2"){
            explainContainer.style.opacity = "1"
            // //newNumber
            const eNum = document.querySelector(".eNum")
            const explainNum = document.querySelector(".explainNum")
            eNum.remove()
            var neweNum = document.createElement("span")
            neweNum.classList.add("eNum")
            explainNum.innerHTML = numContent[1]
            explainNum.appendChild(neweNum)
            // //newExplainTitle
            const eTitle = document.querySelector(".eTitle")
            const explainTitle = document.querySelector(".explainTitle")
            eTitle.remove()
            var neweTitle = document.createElement("span")
            neweTitle.classList.add("eTitle")
            explainTitle.innerHTML = titleContent[1]
            explainTitle.appendChild(neweTitle)
            //newExplainSubtitle
            const eSubtitle = document.querySelector(".eSubtitle")
            const explainSubtitle = document.querySelector(".explainSubtitle")
            eSubtitle.remove()
            var neweSubtitle = document.createElement("span")
            neweSubtitle.classList.add("eSubtitle")
            explainSubtitle.innerHTML = subtitleContent[1]
            explainSubtitle.appendChild(neweSubtitle)
            //newExplainParagraph
            const eParagraph = document.querySelector(".eParagraph")
            const explainParagraph = document.querySelector(".explainParagraph")
            eParagraph.remove()
            var neweParagraph = document.createElement("span")
            neweParagraph.classList.add("eParagraph")
            explainParagraph.innerHTML = paragraphContent[1]
            explainParagraph.appendChild(neweParagraph)
            }
        else if (thing.isIntersecting==true && thing.target.className=="imagesContainer iCont3"){
            explainContainer.style.opacity = "1"
            // //newNumber
            const eNum = document.querySelector(".eNum")
            const explainNum = document.querySelector(".explainNum")
            eNum.remove()
            var neweNum = document.createElement("span")
            neweNum.classList.add("eNum")
            explainNum.innerHTML = numContent[2]
            explainNum.appendChild(neweNum)
            // //newExplainTitle
            const eTitle = document.querySelector(".eTitle")
            const explainTitle = document.querySelector(".explainTitle")
            eTitle.remove()
            var neweTitle = document.createElement("span")
            neweTitle.classList.add("eTitle")
            explainTitle.innerHTML = titleContent[2]
            explainTitle.appendChild(neweTitle)
            //newExplainSubtitle
            const eSubtitle = document.querySelector(".eSubtitle")
            const explainSubtitle = document.querySelector(".explainSubtitle")
            eSubtitle.remove()
            var neweSubtitle = document.createElement("span")
            neweSubtitle.classList.add("eSubtitle")
            explainSubtitle.innerHTML = subtitleContent[2]
            explainSubtitle.appendChild(neweSubtitle)
            //newExplainParagraph
            const eParagraph = document.querySelector(".eParagraph")
            const explainParagraph = document.querySelector(".explainParagraph")
            eParagraph.remove()
            var neweParagraph = document.createElement("span")
            neweParagraph.classList.add("eParagraph")
            explainParagraph.innerHTML = paragraphContent[2]
            explainParagraph.appendChild(neweParagraph)
            }
        else if (thing.isIntersecting==true && thing.target.className=="imagesContainer iCont4"){
            explainContainer.style.opacity = "1"
            // //newNumber
            const eNum = document.querySelector(".eNum")
            const explainNum = document.querySelector(".explainNum")
            eNum.remove()
            var neweNum = document.createElement("span")
            neweNum.classList.add("eNum")
            explainNum.innerHTML = numContent[3]
            explainNum.appendChild(neweNum)
            // //newExplainTitle
            const eTitle = document.querySelector(".eTitle")
            const explainTitle = document.querySelector(".explainTitle")
            eTitle.remove()
            var neweTitle = document.createElement("span")
            neweTitle.classList.add("eTitle")
            explainTitle.innerHTML = titleContent[3]
            explainTitle.appendChild(neweTitle)
            //newExplainSubtitle
            const eSubtitle = document.querySelector(".eSubtitle")
            const explainSubtitle = document.querySelector(".explainSubtitle")
            eSubtitle.remove()
            var neweSubtitle = document.createElement("span")
            neweSubtitle.classList.add("eSubtitle")
            explainSubtitle.innerHTML = subtitleContent[3]
            explainSubtitle.appendChild(neweSubtitle)
            //newExplainParagraph
            const eParagraph = document.querySelector(".eParagraph")
            const explainParagraph = document.querySelector(".explainParagraph")
            eParagraph.remove()
            var neweParagraph = document.createElement("span")
            neweParagraph.classList.add("eParagraph")
            explainParagraph.innerHTML = paragraphContent[3]
            explainParagraph.appendChild(neweParagraph)
            }
        else{
            explainContainer.style.opacity = "0"
        }

    })
},options)
Array.from(imageContainers).forEach(iContainer =>{
    obs.observe(iContainer)
})
//window resize
 