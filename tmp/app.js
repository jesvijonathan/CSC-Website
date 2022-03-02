TweenMax.defaultEase = Linear.easeOut;
new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  anchors: ["sec1", "sec2", "sec3", "sec4"],
  navigationTooltips: ["Intro", "Home", "About", "Services"],
  showActiveTooltip: false,
  lockAnchors: true,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });

    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
  },
  //   }
  // onLeave: (origin, destination, direction) => {
  //   const section = destination.item;
  //   const title = section.querySelector("h1");
  //   const tl = new TimelineMax({ delay: 0.5 });

  //   if (destination.index == 1) {
  //     tl.fromTo(
  //       title,
  //       0.5,
  //       { x: "-50%", opacity: 0 },
  //       { x: "-80%", opacity: 1 }
  //     );
  //   } else {
  //     tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
  //   }

  //   if (destination.index == 2) {
  //     const chairs = document.querySelectorAll(".chair");
  //     const description = document.querySelector(".description");
  //     tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-10%" })
  //       .fromTo(
  //         description,
  //         0.5,
  //         { opacity: 0, y: "50" },
  //         { y: "0", opacity: 1 }
  //       )
  //       .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
  //       .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
  //       .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
  //   }
  // }
});
// window.location.hash = "sec0";

// setTimeout(function () {
//   window.location.hash = "sec1";
// }, 1200);

// setTimeout(function () {
//   window.location.hash = "";
// }, 1500);

fullpage.silentMoveTo("sec1", 1);
