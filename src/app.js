import Model from "./Model";
import { canvas, c, randomIntFromRange } from "./utils";

canvas.width = innerWidth;
canvas.height = innerHeight;

// Event Listeners
addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

addEventListener("click", () => init());

// Implementation
let models;

function init() {
  models = [];

  for (let i = 0; i < 1; i++) {
    const radius = randomIntFromRange(5, 50);
    const x = randomIntFromRange(radius, canvas.width - radius);
    const y = randomIntFromRange(radius, canvas.height - radius);

    models.push(new Model(x, y, radius));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  models.forEach(model => {
    model.update();
  });
}

init();
animate();
