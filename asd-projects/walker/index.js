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
      var walkerX = 0; 
      var walkerY = 0; 

      //SPEED 
      var walkerspeedX = 0 ; 
      var walkerspeedY = 0;

    //POSITIONS 
    var runnerX = 0;
    var runnerY = 0; 

    //SPEED 
    var runnerSpeedX = 0; 
    var runnerSpeedY = 0; 

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

    repositionWalker();
    redrawWalker();

  }
  
  /* 
  Called in response to events.
  */

  
  function handleKeyDown(event) {
    
    /////////////////// WALKER ///////////////////////////////////////
    if (event.which === walker.LEFT){ 
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
    
    ////////////////// RUNNER ///////////////////////////////
    if (event.which === runner.A){ 
      console.log('A pressed');
    }
    if (event.which === runner.W){
      console.log('W pressed');
    }
    if (event.which === runner.D){
      console.log('D pressed');
    }
    if (event.which === runner.S){
      console.log('S pressed');
    }

    if (event.which === runner.A) {
      runnerSpeedX = -5;
    } 
    
    if (event.which === runner.W) {
      runnerSpeedY = -5;
    }
    
    if (event.which === runner.D) {
      runnerSpeedX = 5;
    }
    
    if (event.which === runner.S) {
      runnerSpeedY = 5;
    }
    

  }

  function handleKeyUp(event){

    ///// WALKER ////////////
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
    

    
      /////////// RUNNER //////////////////
    if (event.which === runner.A) {
      runnerSpeedX = 0;
    } 
    
    if (event.which === runner.W) {
      runnerSpeedY = 0;
    }
    
    if (event.which === runner.D) {
      runnerSpeedX = 0;
    }
    
    if (event.which === runner.S) {
      runnerSpeedY = 0;
    }
    
  }



  }


  
 
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  //TODO 5 -- 5a - decalring functions 
  function repositionWalker(){
    
    walkerX += walkerspeedX;
    walkerY += walkerspeedY; 

    runnerX += runnerSpeedX;
    runnerY += runnerSpeedY;
  }

  function redrawWalker(){

    $("#walker").css("left", walkerX);    
    $("#walker").css("top", walkerY);   

    $("#runner").css("left", runnerX);    
    $("#wrunner").css("top", runnerY);

  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

