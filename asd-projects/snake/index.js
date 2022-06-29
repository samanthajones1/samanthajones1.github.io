/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  function factory(id){
  
    var gameObject = {};
    
          gameObject.id = id;
          gameObject.x = parseFloat($(id).css('left'));
          gameObject.y = parseFloat($(id).css('top'));
          gameObject.width = $(id).width();
          gameObject.height = $(id).height();
          gameObject.speedX = 0;
          gameObject.speedY = 0;
    
    return gameObject;
    
  }
  
  var head = factory('#snake0');

  var tail = factory('.snake');
  var apple = factory('#apple');
  snakeArray = [head, tail];
  var score = [];

  var slither = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39, 
    DOWN: 40,
  };

 

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    
    repositionhead(head);
    redrawhead();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {

    if (event.which === slither.LEFT){ 
      console.log('LEFT pressed');
    }
    if (event.which === slither.UP){
      console.log('UP pressed');
    }
    if (event.which === slither.RIGHT){
      console.log('RIGHT pressed');
    }
    if (event.which === slither.DOWN){
      console.log('DOWN pressed');
    }

      
    
    if (event.which === slither.LEFT) {
      head.speedX = -2;
    } 
    
    if (event.which === slither.UP) {
      head.speedY = -2;
    } 
    
    if (event.which === slither.RIGHT) {
      head.speedX = 2;
    } 
  
    
    if (event.which === slither.DOWN) {
      head.speedY = 2;
    } 

    if (doCollide(head, apple)) {
      console.log(true);
  } else {
      console.log(false);
  }


  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function doCollsion(object1, object2){

    object1.leftX = object1.x;
    object1.topY = object1.y;
    object1.rightX = object1.x + $(object1.id).width();
    object1.bottomY = object1.y + $(object1.id).height();;
  
    object2.leftX = object2.x;
    object2.topY =  object2.y;
    object2.rightX =  object2.x + $(object2.id).width();
    object2.bottomY =  object2.y + $( object2.id).height();;

	
	if (object1.rightX >  object2.leftX && object1.leftX <  object2.rightX &&
    object1.bottomY > object2.topY && object1.topY < object2.bottomY){
      return true;
    } else {
      return false;
    }	


  }


  function repositionhead(object){
    
    object.x += object.speedX;
    object.y += object.speedY; 

  }

  function redrawhead(){

    $("#snake0").css("left", head.x);    
    $("#snake0").css("top", head.y);   

  }
  
 

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
  }
