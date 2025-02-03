const canvas = document.getElementById("canvas-sand");
const ctx = canvas.getContext("2d");
const mousePosition = { x: 0, y: 0 };

let numberColor = 1;

const WIDTH_CANVAS = 300;
const HEIGHT_CANVAS = 300;
const matrix = 30;
const SIZE_CUBE = WIDTH_CANVAS / matrix;

canvas.width = WIDTH_CANVAS;
canvas.height = HEIGHT_CANVAS;

ctx.fillStyle = "#52525252";
ctx.fillRect(0, 0, WIDTH_CANVAS, HEIGHT_CANVAS);

let cubes = [];
let nextCubes = [];

for (let i = 0; i < matrix; i++) {
  cubes[i] = [];
  nextCubes[i] = [];
  for (let j = 0; j < matrix; j++) {
    cubes[i][j] = 0;
    nextCubes[i][j] = 0;
  }
}

document.addEventListener("click", (e) => {
  console.log(e);
  const { clientX, clientY } = e;
  const coordenadasX = clientX - canvas.getBoundingClientRect().left;
  const coordenadasY = clientY - canvas.getBoundingClientRect().top;
  const x = Math.floor(coordenadasX / SIZE_CUBE);
  const y = Math.floor(coordenadasY / SIZE_CUBE);

  addCubes({ x, y });

  if (numberColor === 0) {
    numberColor = 1;
  }
});

document.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const coordenadasX = clientX - canvas.getBoundingClientRect().left;
  const coordenadasY = clientY - canvas.getBoundingClientRect().top;

  mousePosition.x = Math.floor(coordenadasX / SIZE_CUBE);
  mousePosition.y = Math.floor(coordenadasY / SIZE_CUBE);
});

function animate({ timing, draw, duration }) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction va de 0 a 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calcular el estado actual de la animación
    let progress = timing(timeFraction);

    draw(progress); // dibujar

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

function addCubes({ x, y }) {
  const rangoX = Math.floor(Math.random() * 2) + 1;
  const rangoY = Math.floor(Math.random() * 2) + 1;

  for (let i = x - rangoX; i < x + rangoX; i++) {
    for (let j = y - rangoY; j < y + rangoY; j++) {
      const numeroAleatorio = Math.random();
      if (numeroAleatorio < 0.5) {
        cubes[i][j] = 1;
      } else {
        cubes[i][j] = 0;
      }
    }
  }
}

function draw() {
  const numeroAleatorio = Math.random();
  let dir = numeroAleatorio < 0.5 ? 1 : -1;
  const colorPrimary = "#e126eb";
  const colorSecondary = "#77eb26";

  for (let i = matrix - 1; i >= 0; i--) {
    for (let j = matrix - 1; j >= 0; j--) {
      if (cubes[i][j] === 0) {
        ctx.fillStyle = `#52525252`;
      } else if (cubes[i][j] === 1) {
        ctx.fillStyle = colorPrimary;
        ctx.strokeStyle = colorSecondary;
        ctx.lineWidth = 1;
        ctx.strokeRect(i * SIZE_CUBE, j * SIZE_CUBE, SIZE_CUBE, SIZE_CUBE);
      }
      ctx.fillRect(i * SIZE_CUBE, j * SIZE_CUBE, SIZE_CUBE, SIZE_CUBE);
      if (cubes[i][j] === "") {
        ctx.fillStyle = `rgb(255,0,0)`;
      } else if (cubes[j][i] > 0 && cubes[j][i + 1] < 1) {
        cubes[j][i] = 0;

        if (
          cubes[j][i + 2] > 0 &&
          i < matrix - 1 &&
          j > 0 &&
          j < matrix - 1 &&
          i > 0 &&
          i < matrix - 1
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

var fotogramasPorSegundo = 60;
function Animacion() {
  setTimeout(function () {
    window.requestAnimationFrame(Animacion);
    draw();
  }, 1000 / fotogramasPorSegundo);
}

Animacion();
