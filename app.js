TweenMax.defaultEase = Linear.easeOut;

const tl3 = new TimelineMax();

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });

    if (destination.index !== 2)
      tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
    else
      tl.fromTo(
        title,
        0.7,
        { x: "-200%", opacity: 0 },
        { x: "-50%", opacity: 1 }
      );

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

      const buyButton = document.querySelector("#buy-button");

      tl.fromTo(
        ctbContainer,
        0.5,
        {
          height: 5,
          width: 0,
          opacity: 0,
        },
        {
          width: "34%",
          opacity: 1,
        }
      )
        .fromTo(
          ctbContainer,
          0.8,
          {
            width: "34%",
            height: 5,
          },
          {
            height: "50%",
            width: "34%",
          }
        )
        .fromTo(buyButton, 1, { opacity: 0 }, { opacity: 1 });

      tl3.to(document.querySelector("#buy-button").children[0], 0.4, {
        attr: { width: 220 },
        ease: Power4.easeInOut,
      });
      tl3.to("text", 0.4, { fill: "#fff", ease: Linear.easeNone }, 0);
      tl3.to("polyline, line", 0.4, { x: 14, ease: Power4.easeInOut }, 0);
      tl3.to("line", 0.4, { attr: { x2: 3 }, ease: Power4.easeInOut }, 0);
      tl3.reversed(true);

      buyButton.addEventListener("mouseenter", doCoolStuff);
      buyButton.addEventListener("mouseleave", doCoolStuff);
    }
  },
});

function doCoolStuff() {
  tl3.reversed(!tl3.reversed());
}
