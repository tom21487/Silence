class Room {
  constructor(){

  }
  draw(){
    fill(0, 256, 0, 50)
  }
}

class RoomSquare extends Room{
  constructor(top, bottom, left, right){
    this.x = left;
    this.y = top;
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
    this.width = this.right - this.left;
    this.height = this.bottom - this.top;
  }
  draw(){
    super.draw();
    rect(this.x, this.y, this.width, this.height)
  }
}

