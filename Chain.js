class Chain{
    constructor(body1,body2,g){
        this.temp = g;
        var options = {
            bodyA: body1,
            pointA:{x:g, y:100},
            bodyB: body2,
            length: 200,
            stiffness: 0.3,
            damping: 0.02
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        push();
        // var pointA = this.chain.bodyA.position;
        // var pointB = this.chain.bodyB.position;

        // var Anchor1X = this.temp;
        // var Anchor1Y = pointA.y;

        // var Anchor2X = pointB.x;
        // var Anchor2Y = pointB.y;

        stroke(250);
        strokeWeight(5);
        line(this.temp + 600,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
        pop();
    }
}