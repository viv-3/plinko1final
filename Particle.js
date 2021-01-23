class Particle {
    constructor(x, y, angle){
        var options = {
            restitution: 0.4
        }
        this.angle = angle;

        this.body = Bodies.circle(x,y,this.angle,options)
        this.color = color(random(0,255), random(0,255), random(0,255))
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
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0,0,this.angle,this.angle)
        pop();
    }

}