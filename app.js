TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });

    tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });

    if (destination.index === 1) {
      const sneackers = document.querySelectorAll(".sneacker");
      const description = document.querySelector(".description");

      tl.fromTo(sneackers, 0.7, { x: "130%" }, { x: "-10%" })
        .fromTo(
          description,
          0.5,
          { opacity: 0, y: "50" },
          { y: "0", opacity: 1 }
        )
        .fromTo(sneackers[0], 1, { opacity: 1 }, { opacity: 1 })
        .fromTo(sneackers[1], 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(sneackers[2], 1, { opacity: 0 }, { opacity: 1 });
    } else if (destination.index === 2) {
      const ctbContainer = document.querySelector(".ctb");

      tl.fromTo(
        ctbContainer,
        0.5,
        {
          height: 5,
          width: 0,
          opacity: 0,
        },
        {
          width: "50%",
          opacity: 1,
        }
      ).fromTo(
        ctbContainer,
        0.8,
        {
          width: "50%",
          height: 5,
        },
        {
          height: "50%",
          width: "50%",
        }
      );
    }
  },
});
