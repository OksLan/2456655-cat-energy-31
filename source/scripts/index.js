/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

/* slider */
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const beforeImage = document.querySelector(".slider__pic-container--before");
  const sliderButton = document.querySelector(".slider__button");

  if (!slider || !beforeImage || !sliderButton) return;

  const updateSlider = (clientX) => {
    const { left, width } = slider.getBoundingClientRect();
    let newWidth = ((clientX - left) / width) * 100;
    newWidth = Math.max(0, Math.min(100, newWidth));

    beforeImage.style.width = `${newWidth}%`;
    sliderButton.style.left = `calc(${newWidth}%)`;
  };

  const startMove = (event) => {
    const moveHandler = (e) => updateSlider(e.touches?.[0]?.clientX || e.clientX);
    const stopHandler = () => document.removeEventListener(event.type === "mousedown" ? "mousemove" : "touchmove", moveHandler);

    document.addEventListener(event.type === "mousedown" ? "mousemove" : "touchmove", moveHandler);
    document.addEventListener(event.type === "mousedown" ? "mouseup" : "touchend", stopHandler, { once: true });
  };

  sliderButton.addEventListener("mousedown", startMove);
  sliderButton.addEventListener("touchstart", startMove);
});


