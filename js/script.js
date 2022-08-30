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
var introTitle = document.querySelector('.intro-title')
var introText = document.querySelector('.intro-text')
var introPhone = document.querySelector('.intro-phone')
var introWatch = document.querySelector('.intro-watch')
var introLaptop = document.querySelector('.intro-laptop')

setInterval(function () {
    introTitle.textContent = "The best quality and price."
    introText.textContent = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    introPhone.style.display = "none";
    introWatch.style.display = "none";
    introLaptop.style.display = "block";
}, 4000);

setInterval(function () {
    introTitle.textContent = "Ideas have a place here..."
    introText.textContent = "We Make It Easy To Find The Great Design Talent, Easier... Road Design Handbook For The International Road..."
    introPhone.style.display = "none";
    introWatch.style.display = "block";
    introLaptop.style.display = "none";
}, 8000);

setInterval(function () {
    introTitle.textContent = "The new phones are here take a look."
    introText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis."
    introPhone.style.display = "block";
    introWatch.style.display = "none";
    introLaptop.style.display = "none";
}, 12000);