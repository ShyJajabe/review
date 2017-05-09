var slideIndex = 1;

showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
/****暂停******/
/*********ie8不支持*getElementsByClassName****/
var test = document.getElementsByClassName("test");
test[0].onmouseover=function(){
    clearInterval(a);
    console.log("stop")
};
test[0].onmouseleave=function(){
    a=setInterval("plusSlides(1)",2000);
    console.log("reatar")
};
var a=setInterval("plusSlides(1)",2000);
/***********************/
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    console.log('slideIndex',slideIndex)
}

