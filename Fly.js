class Fly {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
       stiffness: 0.50,
       length: 150
      };
      this.fly = Matter.Constraint.create(options);
      World.add(world, this.fly);
    }
  
 /*   remove() {
      this.fly.bodyA = null;
    }
  
    attacher(bodyA)
    {
        this.fly.bodyA=bodyA;
    }*/
  
    display() {
     if (this.fly.bodyA) {
        var pointA = this.fly.bodyA.position;
        var pointB = this.fly.pointB;
        strokeWeight(4);
      //  line(pointA.x, pointA.y, pointB.x, pointB.y);
      } 
  
  
    }
  }