class Block {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.1,
      friction: 0.75,
      density: 2.0,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.b = 255;
  }
  display() {
    push();
    /*var angle = this.body.angle;
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);*/
    strokeWeight(2);
    stroke("black");
    fill("#77C6F2");

    rectMode(CENTER);

    rect(this.body.position.x, this.body.position.y, this.width, this.height);

    pop();
  }
}
