console.group("Reference");
console.log(
  "Vector Background: ",
  "https://www.vecteezy.com/vector-art/34614990-black-and-white-geometric-pattern-abstract-geometric-seamless-pattern-black-and-white-squares-mosaic-modern-stylish-texture-monochrome-trellis-wallpaper-backdrop-wrapping-vector-illustration"
);
console.groupEnd();

const d = document;
const $ = (el) => d.querySelector(el);

/*************************** CARD ANIMATION ***************************/

const { width, height } = $(".am-card").getBoundingClientRect();
const halfWidth = width / 2;
const halfHeight = height / 2;

function mover(e) {
  if (e.target.matches(".am-card")) {
    let { offsetX, offsetY } = e;

    let rotationX = ((offsetX - halfWidth) / halfWidth) * 10;
    let rotationY = ((offsetY - halfHeight) / halfHeight) * 10;

    e.target.style.transform = `
      rotateX(${rotationX}deg)
      rotateY(${rotationY}deg)
    `;
  }
}

d.addEventListener("mousemove", mover);
d.addEventListener("touchstart", (e) => {
  if (e.target.matches(".am-card")) {
    d.removeEventListener("mousemove", mover);
  }
});
