 

// Animate progress bars on scroll (increasing animation)
const progressBars = document.querySelectorAll('.progress-bar');
const percentageElements = document.querySelectorAll('.percentage');

function animateProgressBars() {
  progressBars.forEach((bar, index) => {
    const targetWidth = bar.getAttribute('data-width');
    const targetPercentage = parseInt(targetWidth);
    let currentPercentage = 0;

    bar.style.width = '0';

    const interval = setInterval(() => {
      currentPercentage++;
      bar.style.width = currentPercentage + '%';
      percentageElements[index].textContent = currentPercentage + '%';

      if (currentPercentage >= targetPercentage) {
        clearInterval(interval);
      }
    }, 20);
  });
}

// Intersection Observer for progress bars
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateProgressBars();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelector('#skills').querySelectorAll('.skill').forEach(skill => {
  observer.observe(skill);
});

// auto type

const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Developer & Designer", "Developer & Designer"];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});

function type() {
  if (charIndex < words[index].length) {
    typedTextSpan.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}