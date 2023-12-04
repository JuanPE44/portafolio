import { Cubo } from "./Cubo";

const DEFAULT_WIDTH = 300;
const DEFAULT_HEIGHT = 300;
const DEFAULT_FILL_STYLE = "rgba(255, 255, 255, 0)";

export class Canvas {
  element;
  ctx;
  WIDTH = DEFAULT_WIDTH;
  HEIGHT = DEFAULT_HEIGHT;
  cubo: Cubo;
  svgCounter;

  constructor(element: HTMLCanvasElement) {
    this.element = element;
    this.ctx = element.getContext("2d");
    this.svgCounter = 0;

    if (this.ctx) {
      this.element.width = this.WIDTH;
      this.element.height = this.HEIGHT;
      this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
      this.ctx.fillStyle = DEFAULT_FILL_STYLE;
    }

    (this.cubo = new Cubo({
      x: 10,
      y: 0,
      width: 50,
      height: 50,
      ctx: this.ctx!,
      canvas: this,
    })),
      this.update();
  }

  update() {
    const loop = () => {
      if (this.ctx) {
        this.ctx.fillStyle = DEFAULT_FILL_STYLE;
        this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
      }

      this.cubo.update();

      requestAnimationFrame(loop);
    };
    loop();
  }
}
