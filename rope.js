class Rope{
    constructor(body2,body2,offsetX,offsetY){ 
    this.offsetX=offsetX;
    this.offsetY=offsetY;
var options = {
bodyA :body1,
bodyB :body2,
pointB:{x:this.offsetX,y:this.offsetY}
}
this.rope=Constraints.create(options)
World.add(world,this.rope)
    }
    display(){

        var pointA=this.rope.bodyA.position;
var pointB=this.rope.bodyB.position;
strokeweight(2)
var Anchor1x=pointA.x
var Anchor1y=pointA.y

var Anchor2x=pointB.x+this.offsetX
var Anchor2Y=pointB.y+this.offsetY

line(Anchor1x,Anchor1y,Anchor2x,Anchor2Y)



    }


}