class Box{
    constructor(x,y,width,height){
        var options={
            restitution :0.2,
            density:1.0,
            friction :1.0
           }
    
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    
    display(){
        var pos=this.body.position
        var angle=this.body.angle
    
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("orange");
        stroke("purple");
        strokeWeight(5);
        rect(0,0,this.width,this.height);
        pop();
    
    }
    
    }