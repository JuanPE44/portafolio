import { TECHNOLOGIES_LANGUAJES, TECHNOLOGIES_OTHERS } from "../utils";
import { Canvas } from "./Canvas";

const DEFAULT_WIDTH_CUBO = 50;
const DEFAULT_HEIGHT_CUBO = 50;
const DEFAULT_GRAVITY = 9;
const DEFAULT_FRICTION = 0.5;
const VELOCITY = 0.8;
const LIST_TECHNOLOGIES = Array.from(document.querySelectorAll(".technologie"));

interface PropCubo {
  x: number;
  y: number;
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  canvas: Canvas;
}

type Directions = "up" | "down" | "left" | "right";

export class Cubo {
  position;
  width;
  height;
  ctx;
  canvas;
  gravity;
  directions;
  velocity;
  friction;
  image;
  technologies;
  constructor({
    x,
    y,
    width = DEFAULT_WIDTH_CUBO,
    height = DEFAULT_HEIGHT_CUBO,
    ctx,
    canvas,
  }: PropCubo) {
    this.width = width;
    this.height = height;
    this.position = { x: x, y: y };
    this.ctx = ctx;
    this.canvas = canvas;
    this.gravity = DEFAULT_GRAVITY;
    this.friction = DEFAULT_FRICTION;
    this.velocity = { x: 0, y: 0 };
    this.directions = { up: false, down: true, left: false, right: true };

    this.technologies = TECHNOLOGIES_LANGUAJES.concat(TECHNOLOGIES_OTHERS);
    this.image = new Image();
    this.image.src =
      "data:image/svg+xml," +
      encodeURIComponent(this.technologies[this.canvas.svgCounter].svg);
  }

  update() {
    this.draw(this.position.x, this.position.y);
    this.move();
    this.whatchBorders();
  }

  move() {
    if (this.directions["down"]) {
      this.velocity.y += VELOCITY;
    }
    if (this.directions["up"]) {
      this.velocity.y -= VELOCITY;
    }
    if (this.directions["right"]) {
      this.position.x += VELOCITY;
    }
    if (this.directions["left"]) {
      this.position.x -= VELOCITY;
    }
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x *= this.friction;
    this.velocity.y *= this.friction;
  }

  whatchBorders() {
    if (this.position.y < 0) {
      this.handleBorderCollision("up", 1);
    } else if (this.position.y + this.height > this.canvas.element.height) {
      this.handleBorderCollision(
        "down",
        this.canvas.element.height - this.height - 1
      );
    } else if (this.position.x < 0) {
      this.handleBorderCollision("left", 1);
    } else if (this.position.x + this.width > this.canvas.element.width) {
      this.handleBorderCollision(
        "right",
        this.canvas.element.width - this.width - 1
      );
    }
  }

  handleBorderCollision(direction: Directions, position: number) {
    this.directions[direction] = !this.directions[direction];
    this.handleChangeDirection(direction);
    this.handleChangePosition(direction, position);

    this.canvas.svgCounter++;

    if (this.canvas.svgCounter >= this.technologies.length) {
      this.canvas.svgCounter = 0;
    }

    const elementTechnologie = LIST_TECHNOLOGIES[this.canvas.svgCounter];
    this.printTechnologie(elementTechnologie);

    this.image.src =
      "data:image/svg+xml," +
      encodeURIComponent(this.technologies[this.canvas.svgCounter].svg);
  }

  printTechnologie(element: Element) {
    const activeElement = document.querySelector(".active");

    if (activeElement instanceof HTMLElement) {
      activeElement.style.color = "";
      activeElement.classList.remove("active");
      activeElement.classList.remove("text-shadow");
    }

    if (element instanceof HTMLElement) {
      if (element.dataset.color) {
        element.style.color = element.dataset.color;
      }
      element.classList.add("active");
      element.classList.add("text-shadow");
    }
  }

  handleChangePosition(direction: Directions, position: number) {
    if (direction === "left" || direction === "right") {
      this.position.x = position;
    } else {
      this.position.y = position;
    }
  }

  handleChangeDirection(direction: Directions) {
    if (direction === "up") {
      this.directions["down"] = true;
    } else if (direction === "down") {
      this.directions["up"] = true;
    }

    if (direction === "left") {
      this.directions["right"] = true;
    } else if (direction === "right") {
      this.directions["left"] = true;
    }
  }

  draw(x: number, y: number) {
    this.ctx.drawImage(this.image, x, y, this.width, this.height);
  }
}
