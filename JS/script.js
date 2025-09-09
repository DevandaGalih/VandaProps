// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghiangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//js unntuk slide foto
new Swiper(".foto-wrapper", {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});
