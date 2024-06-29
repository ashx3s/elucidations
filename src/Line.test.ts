import { Point } from "./Point"
import { Line } from "./Line"

test('create a line from 10,10 to 20,20', ()=> {
  const a = new Point(10, 10, "a")
  const b = new Point( 20, 20, "b")
  const lineAB = new Line(a,b)
  console.log("Created", lineAB)
})