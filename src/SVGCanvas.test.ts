import { writeSVGFile } from "./SVGCanvas";

test('create new svg file', () => {
  try {
    writeSVGFile('test', 500, 500)
    console.log('new File written successfully')
  } catch(err) {
    console.error(err)
  }
})