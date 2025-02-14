import type { Board } from "./Board";

export class GameControls {
  flag = false;
  startX = 0;
  startY = 0;
  endX = 0;
  endY = 0;
  board: Board;

  constructor(board: Board) {
    this.board = board;
    this.touchStartHandler = this.touchStartHandler.bind(this);
    this.touchEndHandler = this.touchEndHandler.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
  }

  enableMoves() {
    document.addEventListener("touchstart", this.touchStartHandler);
    document.addEventListener("touchend", this.touchEndHandler);
    document.addEventListener("keydown", this.keyDownHandler);
    document.addEventListener("keyup", this.keyUpHandler);
  }

  disableMoves() {
    document.removeEventListener("touchstart", this.touchStartHandler);
    document.removeEventListener("touchend", this.touchEndHandler);
    document.removeEventListener("keydown", this.keyDownHandler);
    document.removeEventListener("keyup", this.keyUpHandler);
  }

  touchStartHandler(e: TouchEvent) {
    this.startX = e.touches[0].clientX;
    this.startY = e.touches[0].clientY;
  }

  touchEndHandler(e: TouchEvent) {
    this.endX = e.changedTouches[0].clientX;
    this.endY = e.changedTouches[0].clientY;

    let diffX = this.endX - this.startX;
    let diffY = this.endY - this.startY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 50) {
        console.log("Deslizamiento a la derecha detectado");
        this.board.handleMoveX(true);
      } else if (diffX < -50) {
        console.log("Deslizamiento a la izquierda detectado");
        this.board.handleMoveX(false);
      }
    } else {
      if (diffY > 50) {
        console.log("Deslizamiento hacia abajo detectado");
        this.board.handleMoveY(true);
      } else if (diffY < -50) {
        console.log("Deslizamiento hacia arriba detectado");
        this.board.handleMoveY(false);
      }
    }
  }

  keyDownHandler(e: KeyboardEvent) {
    if (!this.flag) {
      this.flag = true;
      this.board.handleMove(e);
    }
  }

  keyUpHandler(e: KeyboardEvent) {
    this.flag = false;
  }
}
