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

    var rotation = function (){
     $(".star-five").rotate({
        angle:0,
        animateTo:360,
        callback: rotation,
        easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
        }
     });
  }
  // this.$node.rotation();
};
