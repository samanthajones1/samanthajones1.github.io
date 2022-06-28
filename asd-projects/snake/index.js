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

  var headX = 0;
  var headY = 0;
  var headSpeedX = 0;
  var headSpeedY = 0;
  var tail = factory('#snake');
  var apple = factory('#apple');
  snakeArray = [head, tail];

  var slither = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39, 
    DOWN: 40,
  };

 

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('KeyDown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    
    repositionhead();
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
      headSpeedX = -20;
    } 
    
    if (event.which === slither.UP) {
      headSpeedY = -20;
    }
    
    if (event.which === slither.RIGHT) {
      headSpeedX = 20;
    }
    
    if (event.which === slither.DOWN) {
      headSpeedY = 20;
    }
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionhead(){
    
    headX += headSpeedX;
    headY += headSpeedY; 

  }

  function redrawhead(){

    $("#snake0").css("left", headX);    
    $("#snake0").css("top", headY);   

  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
  }
