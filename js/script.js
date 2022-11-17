var burgerBox = document.querySelector('.burger-box')
var closeBtn = document.querySelector('.burger-close')
var openBtn = document.querySelector('.burger-btn')
var introrow = document.querySelector('.intro-box');

function burgerOpen() {
  burgerBox.className = "burger-box";
  burgerBox.style.display = 'block';
  closeBtn.style.display = 'block';
  openBtn.style.display = 'none';
}

function burgerClose() {
  burgerBox.className = "inactive-burger";
  closeBtn.style.display = 'none';
  openBtn.style.display = 'block';
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var productsBox = document.querySelector('.products-box')

try {
  fetch('https://california-phones.herokuapp.com/products')
    .then(res => res.json())
    .then(data => {
      for (i = 0; i < data.length; i++) {
        let newDiv = document.createElement(`div`);
        newDiv.className = "technic";
        let newImg = document.createElement(`div`);
        newImg.className = "technic-img";
        let newTitle = document.createElement(`h1`);
        newTitle.className = "technic-title";
        let newText = document.createElement(`p`);
        newText.className = "technic-text";
        let newPrice = document.createElement(`p`);
        newPrice.className = "technic-price";
        newTitle.textContent = `${data[i].products_name}`
        newImg.style.backgroundImage = `url(${data[i].products_image})`
        newText.textContent = `${data[i].products_description}`
        newPrice.textContent = `${data[i].products_price}`
        newDiv.appendChild(newImg)
        newDiv.appendChild(newTitle)
        newDiv.appendChild(newText)
        newDiv.appendChild(newPrice)
        productsBox.appendChild(newDiv)
      }
      console.log(data)
    })
} catch (e) {
  console.error(e.message)
}