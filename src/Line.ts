import { Point } from "./Point"
export class Line {
  label: String;
  constructor(public readonly a: Point, public readonly b: Point) {
    this.a = a;
    this.b = b;
    this.label = `${a.label}${b.label}`;
  }
  draw() {
    return `<path d="M${this.a.set()} L${this.b.set()}" stroke="black" />`;
  }
  getLength() {
    if (this.b.x === this.a.x && this.b.y !== this.a.y) {
      return this.b.y - this.a.y;
    } else if (this.b.y === this.a.y && this.b.x !== this.a.x) {
      return this.b.x - this.a.x;
    } else {
      // Apply the pythagorean theorem to get the distance
      const dx = this.b.x - this.a.x;
      const dy = this.b.y - this.a.y;
      const cx2 = Math.sqrt(dx * dx + dy * dy);
      return cx2.toFixed(2);
    }
  }
}