export const canvas = document.querySelector("canvas");
export const c = canvas.getContext("2d");

export function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomColor() {
  const letters = "0123456789ABCDEF".split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

export function getDistance(object1, object2) {
  const xDist = object2.x - object1.x;
  const yDist = object2.y - object1.y;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

export function getObjectDistance(object1, object2) {
  const xDist = object2.x - object1.x;
  const yDist = object2.y - object1.y;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
