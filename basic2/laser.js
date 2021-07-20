class Laser{
    constructor(x,y,width,height,gap=false){
        var option={
            isStatic:true,
            density:3
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        this.body.inertia = Infinity
        World.add(world,this.body);
        this.gap = gap
    }
    
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("red")
        rect(pos.x,pos.y,this.width,this.height);
    }
}