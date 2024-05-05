


function headerAnimation() {
  const header = document.querySelector("#header");
  window.addEventListener("wheel", function (dets) {
    console.log(dets.deltaY);
    if (dets.deltaY < 0) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  })
}
headerAnimation();

function teamAnimation() {
  const teamItem = document.querySelectorAll(".team_item");

  teamItem.forEach(function (el) {

    const crical = document.getElementById("crical");

    el.addEventListener("mouseenter", function () {
      crical.classList.add("hidden");
    });

    let beforeElem = el.querySelector('.beforeElm');

    beforeElem.addEventListener("mouseenter", function () {
      const teamImg = this.querySelector("img");
      gsap.to(teamImg, {
        opacity: 1,
        visibility: "visible",
        ease: Power1,
      });
    })

    el.addEventListener("mouseleave", function () {
      const teamImg = this.querySelector("img");
      gsap.to(teamImg, {
        opacity: 0,
        visibility: "hidden",
        ease: Power1,
      });
    });

    let rotate = 0;
    let diffrot = 0;

    el.addEventListener("mousemove", function (dets) {
      const teamImg = el.querySelector("img");

      const modiffclientY = dets.clientY - el.getBoundingClientRect().top;

      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;

      gsap.to(teamImg, {
        opacity: 1,
        visibility: "visible",
        ease: Power4,
        top: modiffclientY,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot),
      });
    });
  });
}

teamAnimation();

// const crical = document.getElementById("crical");

// window.addEventListener("mousemove", function(dets){
//     gsap.to(crical, {
//         top: dets.clientY,
//         left: dets.clientX,
//     })
// })


Shery.mouseFollower();

Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hover-circle" /* Element to target.*/, {
  images: ["./assets/img/plug.png", "./assets/img/ixperience.png"] /*OR*/,
  //videos: ["video1.mp4", "video2.mp4"],
});


gsap.to(".boundingelam", {
    y: 0,
    ease: Expo.easeInOut,
    stagger: .2,
    duration: 1,

})


const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

