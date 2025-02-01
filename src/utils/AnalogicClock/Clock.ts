export class AnalogClock {
  private hour: number;
  private minute: number;
  private second: number;
  private readonly GRADE_HOUR = 360 / 12;
  private readonly GRADE_MINUTE = 360 / 60;
  private readonly HOURS = 12;
  private readonly MINUTES = 60;
  private gradeSecond = 0;
  private gradeMinute = 0;
  private gradeHour = 0;
  private FPS = 1;
  private lastTime = 0;
  private requestID = 0;

  private counterclockwiseHour = this.createElementDiv("counterclockwise-hour");
  private counterclockwiseMinute = this.createElementDiv(
    "counterclockwise-minute"
  );
  private counterclockwiseSecond = this.createElementDiv(
    "counterclockwise-second"
  );

  constructor() {
    const now = new Date();
    this.hour = now.getHours();
    this.minute = now.getMinutes();
    this.second = now.getSeconds();
  }

  public init() {
    this.lastTime = 0; // Inicializar el tiempo
    this.requestID = window.requestAnimationFrame(this.loop.bind(this));
  }

  private loop(currentTime: number) {
    const deltaTime = (currentTime - this.lastTime) / 1000;

    if (deltaTime >= 1 / this.FPS) {
      this.updateCounterclockwises();
      this.lastTime = currentTime;
    }

    this.requestID = window.requestAnimationFrame(this.loop.bind(this));
  }
  public render() {
    const containerClock = this.createElementDiv("container-clock");
    const clock = this.createElementDiv("clock");
    // punto central
    const center = this.createElementDiv("center");
    containerClock.appendChild(clock);
    clock.appendChild(center);
    clock.appendChild(this.counterclockwiseHour);
    clock.appendChild(this.counterclockwiseMinute);
    clock.appendChild(this.counterclockwiseSecond);

    // lineas de las horas
    for (let i: number = 1; i <= this.HOURS; i++) {
      const hourElement = this.createHourElement(i);
      clock.appendChild(hourElement);
    }

    // lineas de los minutos
    for (let i: number = 1; i <= this.MINUTES; i++) {
      const minuteElement = this.createMinuteElement(i);
      clock.appendChild(minuteElement);
    }

    this.initCounterclockwisesTime();

    return containerClock;
  }

  private initCounterclockwisesTime() {
    this.gradeSecond = this.second * this.GRADE_MINUTE;
    this.gradeMinute = this.minute * this.GRADE_MINUTE;
    this.gradeHour =
      this.hour * this.GRADE_HOUR + (this.GRADE_HOUR / 60) * this.minute;
  }

  private updateCounterclockwises() {
    //const ampm = this.hour >= 12 ? "PM" : "AM";
    this.hour = this.hour % 12 || 12;
    this.gradeSecond += this.GRADE_MINUTE;
    if (this.gradeSecond % 360 === 0) {
      this.gradeMinute += this.GRADE_MINUTE;
      this.gradeHour += this.GRADE_HOUR / 60;
    }

    this.counterclockwiseHour.style.setProperty(
      "transform",
      `rotate(${this.gradeHour}deg)`
    );
    this.counterclockwiseMinute.style.setProperty(
      "transform",
      `rotate(${this.gradeMinute}deg)`
    );
    this.counterclockwiseSecond.style.setProperty(
      "transform",
      `rotate(${this.gradeSecond}deg)`
    );
  }

  private createMinuteElement(i: number) {
    const containerMinute = this.createElementDiv("container-minute");
    const line = this.createElementDiv("line-minute");
    containerMinute.style.transform = `rotate(${i * this.GRADE_MINUTE}deg)`;

    containerMinute.appendChild(line);
    return containerMinute;
  }
  private createHourElement(i: number) {
    const containerHour = this.createElementDiv("container-hour");
    const hour = this.createElementDiv("hour");
    const line = this.createElementDiv("line-hour");
    containerHour.style.transform = `rotate(${i * this.GRADE_HOUR}deg)`;

    hour.style.transform = `rotate(-${i * this.GRADE_HOUR}deg)`;
    //line.style.transform = `rotate(${i * this.GRADE_HOUR + 45}deg)`;

    containerHour.appendChild(line);
    hour.innerHTML = i.toString();
    containerHour.appendChild(hour);
    return containerHour;
  }
  private createElementDiv(className: string) {
    const element = document.createElement("div");
    element.classList.add(className);
    return element;
  }
}
