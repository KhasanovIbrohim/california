var burgerBox = document.querySelector('.burger-box')
var closeBtn = document.querySelector('.burger-close')
var openBtn = document.querySelector('.burger-btn')
var introrow = document.querySelector('.intro-box');
function burgerOpen(){
    burgerBox.style.display = 'block';
    closeBtn.style.display = 'block';
    openBtn.style.display = 'none';
}
function burgerClose(){
    burgerBox.style.display = 'none';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
}