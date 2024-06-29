
export class Canvas {
  height: Number;
  width: Number;
  id: String;
  constructor(height: Number, width: Number, id: String) {
    this.height = height;
    this.width = width;
    this.id = id;
  }
  draw(){
    return `<svg viewbox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' height="${this.height}vmin' width="${this.width}vmin" id="${this.id}"> </svg>`
  }
}