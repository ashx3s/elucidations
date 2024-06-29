import {Canvas } from "./Canvas"
test('create new svg canvas', () => {
  try {
    const canvas = new Canvas(100, 100, 'canvas') 
    console.log(canvas)
    console.log('Canvas created successfully')
  } catch(err) {
    console.error(err)
  }
})