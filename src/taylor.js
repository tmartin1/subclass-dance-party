var Taylor = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top -100, 0, 400);
  this.oldStep = Dancer.prototype.step;
  $(this.$node).attr('class', 'taylor');
  this.bounce = false;
};

Taylor.prototype = Object.create(Dancer.prototype);
Taylor.prototype.constructor = Taylor;

Taylor.prototype.step = function() {
  this.oldStep();
  if(!this.bounce) {
    this.setPosition(this.top, this.left += 10);
  } else {
    this.setPosition(this.top, this.left -= 10);
  }
  if(this.left+480 > $('.dancefloor').width()) {this.bounce = true;}
  if(this.left < 0){ this.bounce = false;}
};

