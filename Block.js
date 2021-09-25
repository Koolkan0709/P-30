class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.Visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      World.add(world, this.body);
      
    }
    display(){
      //console.log(this.body.speed);
      //var pos= this.body.position;
      //rectMode(CENTER);
      //rect(pos.x,pos.y,this.width, this.height);
      if (this.body.speed < 3){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50)
        pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(this.Visiblilty, 255);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50)
        pop();
      }
    }
}
