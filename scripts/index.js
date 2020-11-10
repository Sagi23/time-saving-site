let prevScroll = window.pageYOffset;
window.onscroll = function () {
  let currentScrollpos = window.pageYOffset;
  if (prevScroll < currentScrollpos) {
    document.querySelector(".scroll-icon").style.opacity = "0%";
  }
};

gsap.from(".right", { duration: 0.7, opacity: 0, y: 100 });
gsap.from(".left-up", { duration: 0.7, y: -200, opacity: 0, stagger: 0.9 });
gsap.from(".left-down", { duration: 1, y: -100, delay: 0.8, opacity: 0 });
