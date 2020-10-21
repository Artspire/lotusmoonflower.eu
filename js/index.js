// Set a variable for the button element
const scrollToTopButton = document.getElementById("scroll-button");

const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;

  // If the scroll value is greater than the window height, show the button
  if (y > 0) {
    if (!scrollToTopButton.classList.contains("btnEntrance")) {
      scrollToTopButton.classList.remove("btnExit");
      scrollToTopButton.classList.add("btnEntrance");
      scrollToTopButton.style.display = "block";
    }
  } else {
      if (scrollToTopButton.classList.contains("btnEntrance")) {
        scrollToTopButton.classList.remove("btnEntrance");
        scrollToTopButton.classList.add("btnExit");
        // Delay for exit animation
        setTimeout(() => {
          scrollToTopButton.style.display = "none";
        }, 250);
    }
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Set a variable for the number of pixels the user is from the top of the document
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  // If that number is greater than 0, scroll back to 0, or the top of the document
  // Animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate
    // Increase the '15' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 15);
  }
};

// When the button is clicked, run the ScrolltoTop function above
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}

// Navigation bar animation
TweenMax.from(".logo", 1, {
  delay: 0.4,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom("#menu li a", 1, {
  delay: 0.4,
  opacity: 0,
  ease: Expo.easeInOut
}, 0.1);
