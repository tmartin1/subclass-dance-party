// var assembleTop = function() {
//   var dancers = window.dancers;
//   for( var i = 0; i < dancers.length; i++){
//     dancers[i].top = 0;
//     dancers[i].setPosition(dancers[i].top, dancers[i].left);
//   }
// };

// var assembleLeft = function() {
//   var dancers = window.dancers;
//   for( var i = 0; i < dancers.length; i++){
//     dancers[i].left = 0;
//     dancers[i].setPosition(dancers[i].top, dancers[i].left);
//   }
// };

$(document).ready(function() {
  $('#assemble').on('change', function(){
    var dancers = window.dancers;
    console.log('a');
    console.log($('#assemble').val());
    for( var i = 0; i < dancers.length; i++){
      if( $('#assemble').val() === 'Top' ){
        dancers[i].top = 0;
        dancers[i].setPosition(dancers[i].top, dancers[i].left);
      } else if ( $('#assemble').val() === 'Left' ){
        dancers[i].left = 0;
        dancers[i].setPosition(dancers[i].top, dancers[i].left);
      } else if ($('#assemble').val() === 'Random'){
        dancers[i].top = ( $("body").height()-200 ) * Math.random();
        dancers[i].left = ( $("body").width()-200 )* Math.random();
        dancers[i].setPosition(dancers[i].top, dancers[i].left);
      }
    }
  });
});
