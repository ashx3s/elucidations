import Point from "../Point";
export function getDistance(a: Point, b: Point) {
  if (b.x === a.x && b.y !== a.y) {
    return b.y - a.y;
  } else if (b.y === a.y && b.x !== a.x) {
    return b.x - a.x;
  } else {
    // Apply the pythagorean theorem to get the distance
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const cx2 = Math.sqrt(dx * dx + dy * dy);
    return cx2.toFixed(2);
  }
}
