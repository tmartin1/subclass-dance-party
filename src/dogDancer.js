var DogDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.oldStep = Dancer.prototype.step;
  $(this.$node).attr('class', 'dog');
  console.log('a');
};

DogDancer.prototype = Object.create(Dancer.prototype);
DogDancer.prototype.constructor = DogDancer;

DogDancer.prototype.step = function(){

  this.oldStep();
 
  // this.$node.toggle();
};