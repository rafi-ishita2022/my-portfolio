window.addEventListener("DOMContentLoaded", () => {
  let words = document.querySelectorAll(".word");

  words.forEach((word) => {
    let letters = word.textContent.trim().split("");
    let fragment = document.createDocumentFragment();
    word.textContent = "";

    letters.forEach((letter) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.className = "letter";
      fragment.appendChild(span);
    });

    word.appendChild(fragment);
  });

  let currentWordIndex = 0;
  let maxWordIndex = words.length - 1;

  words[currentWordIndex].style.opacity = "1";

  const changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
      setTimeout(() => {
        letter.className = "letter out";
      }, i * 80);
    });

    nextWord.style.opacity = "1";

    Array.from(nextWord.children).forEach((letter, i) => {
      letter.className = "letter behind";
      setTimeout(() => {
        letter.className = "letter in";
      }, 340 + i * 80);
    });

    setTimeout(() => {
      currentWord.style.opacity = "0";
    }, 3000);

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
  };

  setTimeout(() => {
    changeText();
    setInterval(changeText, 3000);
  }, 100);
});

const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxes = document.querySelectorAll('.resume-box');

const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');


// Navbar click: rotate cube and switch active nav
navs.forEach((nav, idx) => {
  nav.addEventListener('click', () => {
    document.querySelector('.nav-list li.active')?.classList.remove('active');
    nav.classList.add('active');

    cube.style.transform = `rotateY(${idx * -90}deg)`;

    document.querySelector('.section.active')?.classList.remove('active');
    sections[idx].classList.add('active');

    const array = Array.from(sections);
const arrSecs = array.slice(1, -1); // only requires indexes 1, 2, 3 or does not require start and end indexes

arrSecs.forEach(arrSec => {
  if (arrSec.classList.contains('active')) {
    sections[4].classList.add('action-contact');
  }
});

  });
});


// Resume tab click: switch active tab and content
resumeLists.forEach((list, idx) => {
  list.addEventListener('click', () => {
    document.querySelector('.resume-list.active')?.classList.remove('active');
    list.classList.add('active');

    document.querySelector('.resume-box.active')?.classList.remove('active');
    resumeBoxes[idx].classList.add('active');
  });
});


// Portfolio tab click: switch active tab and content
portfolioLists.forEach((list, idx) => {
  list.addEventListener('click', () => {
    document.querySelector('.portfolio-list.active')?.classList.remove('active');
    list.classList.add('active');

    document.querySelector('.portfolio-box.active')?.classList.remove('active');
    portfolioBoxes[idx].classList.add('active');
  });
});


