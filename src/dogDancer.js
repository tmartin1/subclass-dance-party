var DogDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.oldStep = Dancer.prototype.step;
  $(this.$node).attr('class', 'dog');
};

DogDancer.prototype = Object.create(Dancer.prototype);
DogDancer.prototype.constructor = DogDancer;

DogDancer.prototype.step = function(){
  this.oldStep();

  this.$node.animate({
    top: (( $(".dancefloor").height() ) * Math.random())/ 3,
    left: (( $(".dancefloor").width() )* Math.random())/ 3,

  });

  // var direction = [-10,0,10];
  // var movement = Math.floor(Math.random() * direction.length);
  // this.setPosition(this.top+direction[movement], this.left+direction[movement]);
};
