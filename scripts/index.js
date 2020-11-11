gsap.registerPlugin(ScrollTrigger);

let prevScroll = window.pageYOffset;
window.onscroll = function () {
  let currentScrollpos = window.pageYOffset;
  if (prevScroll < currentScrollpos) {
    document.querySelector(".scroll-icon").style.opacity = "0%";
  }
};

gsap.from(".right", { duration: 1, y: -300, opacity: 0 });
gsap.from(".left-up", { duration: 1, y: -300, opacity: 0 });
gsap.from(".left-down", { duration: 1, y: -100, opacity: 0, delay: 1 });

gsap.set(".card", { y: 100 });

ScrollTrigger.batch(".card", {
  interval: 0.1,
  batchMax: 3,
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: { each: 0.15, grid: [1, 3] },
    }),
  onLeave: (batch) => gsap.set(batch, { opacity: 0, y: -100 }),
  onEnterBack: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
  onLeaveBack: (batch) => gsap.set(batch, { opacity: 0, y: 100 }),
  start: "20px bottom",
  end: "top top",
});

ScrollTrigger.addEventListener("refreshInit", () =>
  gsap.set(".card", { y: 0 })
);
gsap.set(".about-left", { y: 100 });

ScrollTrigger.batch(".about-left", {
  interval: 0.1,
  batchMax: 3,
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: { each: 0.15, grid: [1, 3] },
      overwrite: true,
    }),
  onLeave: (batch) => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
  onEnterBack: (batch) =>
    gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
  onLeaveBack: (batch) =>
    gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
});

ScrollTrigger.addEventListener("refreshInit", () =>
  gsap.set(".about-left", { y: 0 })
);
gsap.set(".about-right", { y: 100 });

ScrollTrigger.batch(".about-right", {
  interval: 0.1,
  batchMax: 3,
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: { each: 0.15, grid: [1, 3] },
      overwrite: true,
    }),
  onLeave: (batch) => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
  onEnterBack: (batch) =>
    gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
  onLeaveBack: (batch) =>
    gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
});

ScrollTrigger.addEventListener("refreshInit", () =>
  gsap.set(".about-right", { y: 0 })
);

gsap.set(".how-we-work-right", { y: 100 });

ScrollTrigger.batch(".how-we-work-right", {
  interval: 0.1,
  batchMax: 3,
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: { each: 0.15, grid: [1, 3] },
      overwrite: true,
    }),
  onLeave: (batch) => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
  onEnterBack: (batch) =>
    gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
  onLeaveBack: (batch) =>
    gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
});

ScrollTrigger.addEventListener("refreshInit", () =>
  gsap.set(".how-we-work-right", { y: 0 })
);
gsap.set(".how-we-work-left", { y: 100 });

ScrollTrigger.batch(".how-we-work-left", {
  interval: 0.1,
  batchMax: 3,
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: { each: 0.15, grid: [1, 3] },
      overwrite: true,
    }),
  onLeave: (batch) => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
  onEnterBack: (batch) =>
    gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
  onLeaveBack: (batch) =>
    gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
});

ScrollTrigger.addEventListener("refreshInit", () =>
  gsap.set(".how-we-work-left", { y: 0 })
);
gsap.set(".top", { y: 100 });

ScrollTrigger.batch(".top", {
  interval: 0.1,
  batchMax: 3,
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
      y: 0,
      stagger: { each: 0.15, grid: [1, 3] },
      overwrite: true,
    }),
  onLeave: (batch) => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
  onEnterBack: (batch) =>
    gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
  onLeaveBack: (batch) =>
    gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
});

ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".top", { y: 0 }));
