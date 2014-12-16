var MarioDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.oldStep = Dancer.prototype.step;
  $(this.$node).attr('class', 'mario');

  console.log('a');
};

MarioDancer.prototype = Object.create(Dancer.prototype);
MarioDancer.prototype.constructor = MarioDancer;

MarioDancer.prototype.step = function(){

  this.oldStep();
  
  // this.$node.toggle();
};