let prevScroll = window.pageYOffset;
window.onscroll = function () {
  let currentScrollpos = window.pageYOffset;
  if (prevScroll < currentScrollpos) {
    document.querySelector(".scroll-icon").style.opacity = "0%";
  }
};
