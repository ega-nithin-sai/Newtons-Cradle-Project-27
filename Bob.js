class Bob{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 50;

        var bobOption = {
            dencity: 1.03,
            restitution: 1.25
            // friction: 0.5
        }
        this.body = Bodies.circle(x,y,this.r,bobOption);
        World.add(world,this.body);
    }
    display(){
        push();
        fill("blue");
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}