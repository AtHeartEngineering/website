let NUM_BITS = 137;
let HUE_START = 120;
let HUE_END = 200;
let canvas = document.getElementById('bg-canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

let bits = [];

// Event handler to resize the canvas when the document view is changed
window.addEventListener('resize', resizeCanvas, false);

function generateBit() {
  let hue = randomRange(HUE_START, HUE_END)
  let lightness = randomRange(33, 67);
  let saturation = 100;
  let bit = {
    x: randomRange(0, width),
    y: randomRange(0, height),
    size: Math.random() + 0.5,
    color: "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)",
    angle: randomRange(0, 135) + 202 % 360
  }
  bits.push(
    bit
  );
  return bit;
}

function generateBits() {
  for (let i = 0; i < NUM_BITS; i++) {
    generateBit();
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  width = canvas.width;
  height = canvas.height;
  bits = [];
  generateBits();
}

function randomRange(min = 0, max = 360) {
  return Math.floor(Math.random() * (max - min) + min);
}

function move(x, y, angle) {
  x = x + Math.cos(angle * Math.PI / 180);
  y = y + Math.sin(angle * Math.PI / 180);

  if (x < 0 || x > width || y < 0 || y > height) {
    return false;
  }
  return {
    x: x,
    y: y
  };
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < bits.length; i++) {
    let bit = bits[i];
    ctx.fillStyle = bit.color;
    ctx.fillRect(bit.x, bit.y, bit.size, bit.size);
    let newPos = move(bit.x, bit.y, bit.angle);
    if (newPos) {
      bit.x = newPos.x;
      bit.y = newPos.y;
    } else {
      bits.splice(i, 1);
      generateBit()
    }
  }
}

resizeCanvas();
setInterval(draw, 50);