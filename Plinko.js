class Plinko {
    constructor(x, y,){
        var options = {
            isStatic: true
        }
        this.angle = 10;

        this.body = Bodies.circle(x,y,this.angle,options)
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("white")
        ellipseMode(RADIUS)
        ellipse(0,0,this.angle,this.angle)
        pop();
    }

}