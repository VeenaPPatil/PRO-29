class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            //'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);

        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        rectMode(CENTER);
        fill("blue");
        rect(0,0, this.width, this.height);
        pop();
      }
}