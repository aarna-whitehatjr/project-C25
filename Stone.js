class Stone{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction: 0.9,
            density:12
        
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(this.x, this.y,width,height, options);
        World.add(world, this.body);
    }
    display(){
        var stonepos = this.body.position;
        push()
     rectMode(CENTER)
     strokeWeight (5);
     stroke("black");
     fill("grey");
     rect(stonepos.x, stonepos.y, this.width, this.height);
    }
}