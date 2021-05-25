class Dustbin{

    constructor(x,y, width, height){
        var a ={restitution:0.8, density:1, friction:2}
        this.body = Bodies.rectangle(x,y,width,height, a)
        World.add(world, this.body)
        this.w=width
        this.h=height
    }


    display(){
        var ang = this.body.angle
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(ang * 180/PI)
        rectMode(CENTER)
        rect(0,0, this.w, this.height)
        pop()
    }





}

