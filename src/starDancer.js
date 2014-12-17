var StarDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.oldStep = Dancer.prototype.step;
  $(this.$node).attr('class', 'star-five');
};

StarDancer.prototype = Object.create(Dancer.prototype);
StarDancer.prototype.constructor = StarDancer;

StarDancer.prototype.step = function() {
  this.oldStep();
  this.$node.animate({
    top: ( $(".dancefloor").height()-400 ) * Math.random(),
    left: ( $(".dancefloor").width()-400 )* Math.random(),
    opacity: 0.5
  });

  // this.$node.rotation();
};
