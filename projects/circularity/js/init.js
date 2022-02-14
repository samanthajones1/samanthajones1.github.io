var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables

        var circle;             //underfined var that will hold idv. circle
        var circles = [];       //empty array to hold mul. circles
        


        // TODO 2 : Create a function that draws a circle 

        function drawCircle(){

            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2); //call random circle > creates a circel > then stores in var circle 
            physikz.addRandomVelocity(circle, canvas); // adds random velocity 
            view.addChild(circle); // add circle to canvas
            circles.push(circle); // push method to push circle into array 

        }

        // TODO 3 / 8 : Call the drawCircle() function 

      /*  Draw circles manually each times 
                drawCircle();
                drawCircle();
                drawCircle();
                drawCircle();
                drawCircle();
     */

        /* 1.) var i -s the start startment at 0 > 
        then the stop statment at 100 cirlces >
         then add 1 circle until 100 */

        for (var i = 0;i <= 100; i++){
            drawCircle();
        }
        
        


        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
            /*
                physikz.updatePosition( circles[0] ); // redraws the circle in a new location 
                physikz.updatePosition( circles[1] );
                physikz.updatePosition( circles[2] );
                physikz.updatePosition( circles[3] );
                physikz.updatePosition( circles[4] );
            */
            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
            /*  game.checkCirclePosition( circles[0] ); // keep circles that stray off screen on screen
                game.checkCirclePosition( circles[1] ); this is the manual way to keep the circle positions onto the screen 
                game.checkCirclePosition( circles[2] );
                game.checkCirclePosition( circles[3] );
                game.checkCirclePosition( circles[4] );
             */
            
                
            // TODO 9 : Iterate over the array


            /* the start statment -- var j = 0 -- starts te loop at 0 >
            then the stop statment -- j < circles.length -- runs the code until the end of the array "circles[];" >
            then the update statment -- j++ -- goes for all circles add */
           for (var j = 0; j < circles.length; j++){
                var eachCircle = circles[j];
                physikz.updatePosition( eachCircle );   // a loop to keep the circles moving 
                game.checkCirclePosition( eachCircle ); // a loop to keep circles onto the screen 
             
          }

            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x - circle.radius > canvas.width ) {
                circle.x = 0; // makes the circle reset at 0 if the x is > canvas.width
            }

            // TODO 7 : YOUR CODE STARTS HERE //////////////////////
        
            // left side of screen 
            if ( circle.x + circle.radius < 0){
                circle.x = canvas.width;
            }
            // height check 
            if ( circle.y - circle.radius > canvas.height){ //bottom of screen
                circle.y = 0;  
            }
            if ( circle.y + circle.radius < 0){ // top f screen 
                circle. y = canvas.height; 
            }

            // YOUR TODO 7 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
