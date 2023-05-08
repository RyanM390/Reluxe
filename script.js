const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    items.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.style = 'opacity: 0.5';
        
      }
      if (otherItem == item) {
        otherItem.style = 'opacity: 1';
      }
    });
  });
  
  item.addEventListener('mouseleave', () => {
    items.forEach(otherItem => {
      otherItem.style = 'opacity: 1';
    });
  });
});

// SCRIPT CARROSSEL PÁGINA DE COMPRA //

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

//  FIM SCRIPT PÁGINA DE COMPRA  //