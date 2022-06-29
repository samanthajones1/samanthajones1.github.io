/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 10;
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
  snakeArray = [head];
  var score = [];
  var boardWidth = $('#board').width();
  var squareWidth = apple.width;

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
    redrawitem("#snake0", head);
    redrawitem("#apple", apple);
    checkCollison();
    managePieceMaking();
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
      head.speedX = -20;
      head.speedY = 0;
    } 
    
    if (event.which === slither.UP) {
      head.speedY = -20;
      head.speedX = 0;
    } 
    
    if (event.which === slither.RIGHT) {
      head.speedX = 20;
      head.speedY = 0;

    } 
  
    
    if (event.which === slither.DOWN) {
      head.speedY = 20;
      head.speedX = 0;

    } 


  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


    function checkCollison(){

      if(head.x === apple.x && head.y === apple.y){
        apple.x = Math.floor(Math.random() * (boardWidth - squareWidth) / squareWidth) * squareWidth;
        apple.y = Math.floor(Math.random() * (boardWidth - squareWidth) / squareWidth) * squareWidth;
      }

    }
     
    function managePieceMaking(){

      var newId = getNextId();
      createElement(newId);
      var newPiece = factory("#" + newId);
      snakeArray.push(newPiece);

    }
   
    function getNextId(){
      return "snake" + snakeArray.length;
    }
    
  
    function createElement(newId){
      $('<div>').attr('id', newId)
                .addClass('snake')
                .appendTo("#board");
    }
    
    


  function repositionhead(object){
    
    object.x += object.speedX;
    object.y += object.speedY; 

  }

  function redrawitem(id, obj){

    $(id).css("left", obj.x);    
    $(id).css("top", obj.y);   


  }
  
 

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
  }
