const canvas = document.getElementById("canvas-sand");
const ctx = canvas.getContext("2d");
const mousePosition = { x: 0, y: 0 };

let numberColor = 1;

const WIDTH_CANVAS = 300;
const HEIGHT_CANVAS = 300;
const matrix = 20;
const SIZE_CUBE = WIDTH_CANVAS / matrix;
const COLOR_EMPTY = "#444";
const COLOR_STROKE = "#77eb26";
const COLOR_ERROR = "rgb(255,0,0)";

canvas.width = WIDTH_CANVAS;
canvas.height = HEIGHT_CANVAS;

ctx.fillStyle = COLOR_EMPTY;
ctx.fillRect(0, 0, WIDTH_CANVAS, HEIGHT_CANVAS);

let cubes = Array.from({ length: matrix }, () => Array(matrix).fill(0));
let nextCubes = Array.from({ length: matrix }, () => Array(matrix).fill(0));


function getHueColor(number) {
  number = Math.max(1, Math.min(number, 360));
  let hue = number;
  let saturation = 80;
  let lightness = 50;
  let hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  let rgbColor = hslToRgb(hue / 360, saturation / 100, lightness / 100);

  return {
    hsl: hslColor,
    rgb: `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`,
  };
}

function hslToRgb(h, s, l) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}


canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / SIZE_CUBE);
  const y = Math.floor((e.clientY - rect.top) / SIZE_CUBE);
  if(cubes[x][y] !== 0) return
  addCubes({ x, y });
  if (numberColor > 360) {
    numberColor = 0;
  }
  numberColor += 5;
});



function addCubes({ x, y }) {
  const rangoX = Math.floor(Math.random() * 2) + 1;
  const rangoY = Math.floor(Math.random() * 2) + 1;

  for (let i = x - rangoX; i < x + rangoX; i++) {
    for (let j = y - rangoY; j < y + rangoY; j++) {
      if (i >= 0 && i < matrix && j >= 0 && j < matrix) {
        cubes[i][j] = Math.random() < 0.5 ? 1 : 0;
      }
    }
  }
}

function draw() {
  const dir = Math.random() < 0.5 ? 1 : -1;

  for (let i = matrix - 1; i >= 0; i--) {
    for (let j = matrix - 1; j >= 0; j--) {
      if (cubes[i][j] === 0) {
        ctx.fillStyle = COLOR_EMPTY;
      } else if (cubes[i][j] >= 1) {
        ctx.fillStyle = getHueColor(cubes[i][j]).rgb;
      }

      ctx.fillRect(i * SIZE_CUBE, j * SIZE_CUBE, SIZE_CUBE, SIZE_CUBE);


      if (cubes[i][j] === "") {
        ctx.fillStyle = COLOR_ERROR;
      } else if (cubes[j] && cubes[j][i] > 0 && cubes[j][i + 1] < 1) {
        cubes[j][i] = 0;

        if (
          cubes[j][i + 2] > 0 &&
          i < matrix - 1 &&
          j > 0 &&
          j < matrix - 1 &&
          i > 0
        ) {
          if (cubes[j + 1][i + 2] < 1 && cubes[j - 1][i + 2] < 1) {
            cubes[j + dir][i] = numberColor;
          } else if (cubes[j + 1][i + 2] > 0 && cubes[j - 1][i + 2] < 1) {
            cubes[j - 1][i] = numberColor;
          } else if (cubes[j + 1][i + 2] < 1 && cubes[j - 1][i + 2] > 0) {
            cubes[j + 1][i] = numberColor;
          } else {
            cubes[j][i + 1] = numberColor;
          }
        } else {
          cubes[j][i + 1] = numberColor;
        }
      }
    }
  }
}

const FPS = 60;
function Animacion() {
  setTimeout(() => {
    requestAnimationFrame(Animacion);
    draw();
  }, 1000 / FPS);
}

Animacion();
