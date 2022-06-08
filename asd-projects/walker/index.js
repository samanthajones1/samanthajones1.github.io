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

      //TODO 3 -- declare key varible with object -- as well ad the keys and their numbers 
    var walker = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39, 
        DOWN: 40,
      };
  
      var runner = {
        A: 65,
        W: 87,
        D: 68, 
        S: 83,
      };

      var boardWidth = board.width;
      
      //TODO 4

      //POSITIONS 
      var walkerX = 0; // the x-coordinate 
      var walkerY = 0; // the y-coordinate 

      //SPEED 
      var walkerspeedX = 0 ; // the x-axis
      var walkerspeedY = 0; // the y-axis

    //POSITIONS 
    var runnerX = 0; // the x-coordinate 
    var runnerY = 0; // the y-coordinate 

    //SPEED 
    var runnerspeedX ; // the x-axis
    var runnerspeedY ; // the y-axis

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* TODO 2 --- 2a and 2b - changing the names of even and the function */


  $(document).on('keydown',handleKeyDown);                           // change 'eventType' to the type of event you want to handle  

  $(document).on('keyup',handleKeyUp);   

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {

    //TODO 6 -- calling the update functions 
    repositionWalker();
    redrawWalker();

  }
  
  /* 
  Called in response to events.
  */

  /* TODO 2 --- changing the name of the function and adding console.log to check each key -- 2c */
  function handleKeyDown(event) {
    //Player one
    if (event.which === walker.LEFT){ //TODO 3 -- getting the press function down for keys 
      console.log('LEFT pressed');
    }
    if (event.which === walker.UP){
      console.log('UP pressed');
    }
    if (event.which === walker.RIGHT){
      console.log('RIGHT pressed');
    }
    if (event.which === walker.DOWN){
      console.log('DOWN pressed');
    }

      //TODO 6 -- moving 
    if (event.which === walker.LEFT) {
      walkerspeedX = -5;
    } 
    
    if (event.which === walker.UP) {
      walkerspeedY = -5;
    }
    
    if (event.which === walker.RIGHT) {
      walkerspeedX = 5;
    }
    
    if (event.which === walker.DOWN) {
      walkerspeedY = 5;
    }
    
    

  }

  function handleKeyUp(event){
    if (event.which === walker.LEFT) {
      walkerspeedX = 0;
    } 
    
    if (event.which === walker.UP) {
      walkerspeedY = 0;
    }
    
    if (event.which === walker.RIGHT) {
      walkerspeedX = 0;
    }
    
    if (event.which === walker.DOWN) {
      walkerspeedY = 0;
    }
    
  }


  
 
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  //TODO 5 -- 5a - decalring functions 
  function repositionWalker(){
    
  
    walkerX += walkerspeedX;// update the position of the box along the x-axis
    walkerY += walkerspeedY; // update the position of the box along the y-axis

  }

  function redrawWalker(){

    $("#walker").css("left", walkerX);    // draw the box in the new location, positionX pixels away from the "left"
    $("#walker").css("top", walkerY);    // draw the box in the new location, positionX pixels away from the "top"

  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}
