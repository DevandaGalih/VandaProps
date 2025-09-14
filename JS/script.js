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

//fungsi sendMessage
function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const url =
    "https://api.whatsapp.com/send?phone=6288996987264&text=Halo%20Admin%2C%0ASaya%20" +
    name +
    "%0AEmail%20saya%20" +
    email +
    "%0A%0APesan%3A%0A" +
    message +
    "";

  window.open(url);
}
