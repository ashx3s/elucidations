export default class Point {
  constructor(
    public readonly x = 0,
    public readonly y = 0,
    public readonly label = "a"
  ) {
    this.x = Number(x);
    this.y = Number(y);
    this.label = label;
  }
  set() {
    return `${this.x} ${this.y}`;
  }
  draw() {
    return `<g id="${this.label}">
<text x="${this.x - 2}" y="${this.y - 2}" >${this.label}</text>
<circle cx="${this.x}" cy="${this.y}" r="1"/>
</g>`;
  }
}

const a = new Point(10, 10, "a");
const b = new Point(50, 30, "b");

