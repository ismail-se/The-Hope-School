const carouselSlide = document.querySelector('.carousal-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons 
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter 
let counter = 1;
const size = carouselImages[0].clientWidth;