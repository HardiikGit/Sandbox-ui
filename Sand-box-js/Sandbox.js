// Navigation Bar JS
const navToggle = document.querySelector(".nav-toggle-open");
const navClose = document.querySelector(".x-mark");
const bgOverlay = document.querySelector(".bg-overlay");
const openSlider = document.querySelector(".nav-list");

// Open Navigation
navToggle.addEventListener("click", () => {
  openSlider.classList.add("open");
  bgOverlay.classList.add("open");
});

// Close navigation
navClose.addEventListener("click", () => {
  openSlider.classList.remove("open");
  bgOverlay.classList.remove("open");
});

// Also close nav when background overlay is clicked
bgOverlay.addEventListener("click", () => {
  openSlider.classList.remove("open");
  bgOverlay.classList.remove("open");
});

// Banner Section Slider Js
const bannerSlider = $(".banner-slider").owlCarousel({
  loop: true,
  center: true,
  nav: false,
  dots: false,
  items: 3,
  stagePadding: 100,
  responsive: {
    0: {
      items: 1,
      stagePadding: 30,
    },
    768: {
      items: 1,
      stagePadding: 80,
    },
    1200: {
      items: 2,
      stagePadding: 80,
    },
    2000: {
      items: 2,
      stagePadding: 80,
    },
  },
});
// Custom navigation buttons
$(".prev-slide").click(() => bannerSlider.trigger("prev.owl.carousel"));
$(".nxt-slide").click(() => bannerSlider.trigger("next.owl.carousel"));

// Happy Customer Slilder
const happySlider = $(".happy-slider-Cm").owlCarousel({
  items: 6, // Show one item at a time
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000, // 3 seconds
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    567: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1094: {
      items: 3,
    },
  },
});

// Photo Shoots Section JS
const buttons = document.querySelectorAll(".filter-nav button");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    items.forEach((item) => {
      item.classList.remove("animate");

      if (filter === "all" || item.classList.contains(filter)) {
        item.classList.remove("hide");
        void item.offsetWidth; // Reflow to re-trigger animation
        item.classList.add("animate");
      } else {
        item.classList.add("hide");
      }
    });
  });
});

// Info Section JS
const infoClick = document.querySelector(".info-click");
const closeClick = document.querySelector(".info-x-mark");
const overlayBg = document.querySelector(".bg-overlay-1");
const addClassInfo = document.querySelector(".main-page-sec");

infoClick.addEventListener("click", () => {
  addClassInfo.classList.add("active-info");
  overlayBg.classList.add("active-info");
});
closeClick.addEventListener("click", () => {
  addClassInfo.classList.remove("active-info");
  overlayBg.classList.remove("active-info");
});
overlayBg.addEventListener("click", () => {
  addClassInfo.classList.remove("active-info");
  overlayBg.classList.remove("active-info");
});

// Input Search bar Pop up
const searchClick = document.querySelector(".search-click");
const closeX = document.querySelector(".close-btn-cl");
const popTopClassAdd = document.querySelector(".search-pop-up");
const overLayAdd = document.querySelector(".bg-overlay-2");

searchClick.addEventListener("click", () => {
  popTopClassAdd.classList.add("active-top");
  overLayAdd.classList.add("active-top");
});
closeX.addEventListener("click", () => {
  popTopClassAdd.classList.remove("active-top");
  overLayAdd.classList.remove("active-top");
});
overLayAdd.addEventListener("click", () => {
  popTopClassAdd.classList.remove("active-top");
  overLayAdd.classList.remove("active-top");
});
