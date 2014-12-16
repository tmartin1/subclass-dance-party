var BananaDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.oldStep = Dancer.prototype.step;
  $(this.$node).attr('class', 'banana');
  this.goingUp = true;
};

BananaDancer.prototype = Object.create(Dancer.prototype);
BananaDancer.prototype.constructor = BananaDancer;

BananaDancer.prototype.step = function(){
  this.oldStep();
  if( this.goingUp ){
    this.setPosition(this.top -= 10, this.left);
  } else {
    this.setPosition(this.top += 10, this.left);
  }

  $('.banana').on('mouseover', function(){
    if( this.goingUp ){
      this.goingUp = false;
    } else {
      this.goingUp = true;
    }
  }.bind(this));

  if(this.top+135 > $('body').height()) this.goingUp = true;
  if(this.top < 0) this.goingUp = false;
};
