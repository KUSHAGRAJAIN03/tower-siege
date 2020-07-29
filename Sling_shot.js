class Sling_shot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.pointB=pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        
        if (this.chain.bodyA){
            push();
        var pointA = this.chain.bodyA.position;
        var B = this.pointB;
        strokeWeight(4);
        stroke("white");
        line(pointA.x, pointA.y,B.x,B.y);
        pop();
    }
}
    fly(){
        this.chain.bodyA=null;
    }
    attach(body){
        this.chain.bodyA = body;
    }
}
