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

const cubeColors = Array.from({ length: matrix }, () =>
  Array.from({ length: matrix }, () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  })
);

canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / SIZE_CUBE);
  const y = Math.floor((e.clientY - rect.top) / SIZE_CUBE);

  addCubes({ x, y });
  if (numberColor === 0) numberColor = 1;
});

canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mousePosition.x = Math.floor((e.clientX - rect.left) / SIZE_CUBE);
  mousePosition.y = Math.floor((e.clientY - rect.top) / SIZE_CUBE);
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
      } else if (cubes[i][j] === 1) {
        ctx.fillStyle = cubeColors[i][j];
      }

      ctx.fillRect(i * SIZE_CUBE, j * SIZE_CUBE, SIZE_CUBE, SIZE_CUBE);

      if (cubes[i][j] > 0) {
        ctx.fillStyle = "rgba(0,0,0,0.1)";
        ctx.fillRect(
          i * SIZE_CUBE,
          j * SIZE_CUBE + SIZE_CUBE * 0.7, // parte baja
          SIZE_CUBE,
          SIZE_CUBE * 0.3
        );
      }

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
