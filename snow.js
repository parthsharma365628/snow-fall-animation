class createSnow{
    constructor(x, y){
this.image=loadImage("snow5.jpg");
      var options = { 
            'restitution':0.1,
            'friction':1
          }
          this.body = Bodies.circle(x, y, 0.2, options);
          this.radius = 0.2;
          World.add(world, this.body);
    }
   
    update(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0, 800), y:random(-200,-100)});
      }
    }
  
    display(){
      noStroke();
      fill(0,0,255);
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
    }
  }