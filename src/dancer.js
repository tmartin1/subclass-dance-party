// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<div class="dancer"></div>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  Dancer.prototype.step.bind(this);
  Dancer.prototype.step.call(this);

  Dancer.prototype.setPosition.bind(this, top, left);
  Dancer.prototype.setPosition.call(this, top, left);

};

Dancer.prototype.constructor = Dancer;

Dancer.prototype.step = function(){
  // the basic Dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

