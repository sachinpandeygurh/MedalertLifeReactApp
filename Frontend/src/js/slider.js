// select all the image elements in the carousel
const imgElements = document.querySelectorAll('.carousel-item img');

// define the sources for large and small screens for each image
const largeScreenSrcs = ['./images/slider.png', './images/ambslider1 (2).jpg', './images/ambslider1 (3).jpg'];
const smallScreenSrcs = ['./images/slider/1.png', './images/slider/4.png', './images/slider/5.png'];

// define the breakpoint
const breakpoint = 520;

// function to handle the resize event
function handleResize() {
  // check the screen width
  const screenWidth = window.innerWidth;

  // set the src for each image based on screen width
  for (let i = 0; i < imgElements.length; i++) {
    if (screenWidth > breakpoint) {
      imgElements[i].src = largeScreenSrcs[i];
    } else {
      imgElements[i].src = smallScreenSrcs[i];
    }
  }
}

// add event listener for the resize event
window.addEventListener('resize', handleResize);

// call the function once on page load
handleResize();
