// ------------- Burger menu ----------------
const burger = document.querySelector('.burger');
const nav = document.querySelector('.bottom-part');

document.addEventListener('click', function (e) {
  if (e.target.closest('.burger')) {
    burger.classList.toggle('change');
    nav.classList.toggle('active');
  }
  if (e.target.closest('.nav') || e.target.closest('.burger')) return;
  nav.classList.remove('active');
  burger.classList.remove('change');
});

// ------------- Swiper ----------------
var elements = document.querySelectorAll('.fader__slide');
var sliderElement = document.getElementById('my-keen-slider');
const frontTextimg = document.querySelectorAll('.front-textimg');
const author = document.querySelectorAll('.author');

var interval = 0;
function autoplay(run) {
  clearInterval(interval);
  interval = setInterval(() => {
    if (run && slider) {
      slider.next();
    }
  }, 3900);
}

var slider = new KeenSlider('#my-keen-slider', {
  slides: elements.length,
  loop: true,
  duration: 3000,
  move: s => {
    var opacities = s.details().positions.map(slide => slide.portion);
    elements.forEach((element, idx) => {
      element.style.opacity = opacities[idx];
    });
  },
  dragStart: () => {
    autoplay(false);
  },
  dragEnd: () => {
    autoplay(true);
  },
  created: function (instance) {
    document
      .getElementById('arrow-left')
      .addEventListener('click', function () {
        instance.prev();
      });

    document
      .getElementById('arrow-right')
      .addEventListener('click', function () {
        instance.next();
      });
  },

  slideChanged: slider => {
    const currentSlide = slider.details().relativeSlide;
    const absoluteSlide = slider.details().absoluteSlide;
    let id1, id2;
    console.log(absoluteSlide);
    Array.from(frontTextimg).map((text, index, list) => {
      if (text.id == currentSlide) {
        id1 = setTimeout(() => {
          text.style.opacity = '1';
        }, 400);

        if (text.id == absoluteSlide) {
          list[0].style.opacity = '1';
        }

        id1 = setTimeout(() => {
          text.style.opacity = '0';
          console.log(id1);
        }, 3350);
      }

      if (currentSlide == 5) {
        list[0].style.opacity = '0';
        list[1].style.opacity = '0';
        list[2].style.opacity = '0';
        list[3].style.opacity = '0';
        list[4].style.opacity = '0';
        // if (text.id != 5) {
        //   clearTimeout(id1);
        // }
      }
      if (currentSlide == 1) {
        list[5].style.opacity = '0';
      }
    });
  },
});

// sliderElement.addEventListener('mouseover', () => {
//   autoplay(false);
// });
// sliderElement.addEventListener('mouseout', () => {
//   autoplay(true);
// });
autoplay(true);

// ------------- Scrol button header section ----------------
const swiperSection = document.querySelector('.swiper-section');
const btnScrollUp = document.querySelector('.btn-scroll-up');

const myFunction = (entries, observer) => {
  if (!entries[0].isIntersecting) {
    btnScrollUp.classList.add('active');
  } else {
    btnScrollUp.classList.remove('active');
  }
};

const swiperSectionObserver = new IntersectionObserver(myFunction, {
  root: null,
  threshold: 0.2,
});

swiperSectionObserver.observe(swiperSection);

// ------------- Scroll Up ----------------
const header = document.querySelector('.header');

btnScrollUp.addEventListener('click', function () {
  header.scrollIntoView({ behavior: 'smooth', header });
});
