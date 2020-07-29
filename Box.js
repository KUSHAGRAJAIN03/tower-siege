class box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.1,
        'friction':0.1,
        'density':0.1,
        isStatic:false,
        mass:1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    console.log(this.body);
    this.Visiblity = 100;
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity-10;
      tint(255,this.Visiblity);
    //  rect(0, 0, this.width, this.height);
      pop();
    }

  }

  Score()
  {
    if (this.Visiblity<0 && this.Visiblity>-255)
      {
       score=score+1;
      }
  }
}
