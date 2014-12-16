var StarDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.oldStep = Dancer.prototype.step;
  $(this.$node).attr('class', 'star-five');
};

StarDancer.prototype = Object.create(Dancer.prototype);
StarDancer.prototype.constructor = StarDancer;

StarDancer.prototype.step = function() {
  this.oldStep();
  this.$node.fadeToggle('slow');

  // this.$node.rotation();
};
