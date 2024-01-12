//============================================
let sec = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".our-skills .container ul li .rate span");
window.onscroll = function () {
    if (window.scrollY >= sec.offsetTop - 100) {
        spans.forEach((span) => {
            span.style.width = span.getAttribute("data");
        }
        )
    }
}
//============================================
let section=document.querySelector(".price")
let unitSpan=document.querySelectorAll(".price .box .head .pr")

window.onscroll=function(){
    if(window.scrollY>=section.offsetTop){
       unitSpan.forEach(function(span){
span.innerHTML=span.getAttribute("data")
       })
    }
}

