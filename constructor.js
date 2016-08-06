var time =0;
var gravity = .5;

function Particle(startX, startY){
  this.x = startX;
  this.y = startY;
  this.velocity = {x:0,y:0};

}

Particle.prototype = {getVelocity:function(){return time*gravity},
move:function(){
  this.getVelocity() + this.y;
  if (this.y >= 500)
    console.log("this is the bottom")
  }
}

var particles = [];

for(var i =0;i<100;i++){
  particles[i] = new Particle(i,Math.random()*500);
}

//console.log(particles[1].getVelocity());
//console.log(particles[1].move());

setInterval(function(){
    time++;
    particles.filter(function(p){
        console.log(p.x)
        return p.y < 500;
    })
    .forEach(function(p){
        p.move();
    })
},100)
