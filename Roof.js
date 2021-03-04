class Roof {
    constructor(x,y,w) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,20,options);
      this.width = w;
      World.add(world, this.body);
    }
    display(){
      // var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(this.body.position.x, this.body.position.y, this.width, 20);
    }
}