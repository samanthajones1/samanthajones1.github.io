var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var grasses = [];
        var trees = [];
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game

            var backgroundFill = draw.bitmap('../../Images/summer-forest.webp') //draws the image
                backgroundFill.x = canvasWidth - 1920; //width of the what I want
                backgroundFill.y = groundY - 500; //hieight/up and  down
                backgroundFill.scaleX = 4; //changes the witdth of the image
                backgroundFill.scaleY = 2; //changes the hieght  of the image
                background.addChild(backgroundFill);  // adds the background 
        
      

            // TODO: 3 - Add a moon and starfield
            
                            /*
                            
                            var moon = draw.bitmap('img/moon.png'); // var that holds the picture of the moon
                                moon.x = canvasWidth - 300; // holds the x value ( left to right)
                                moon.y = groundY - 300; //holds the y value (up and down)
                                moon.scaleX = .5; //changes the x scale of the moeom
                                moon.scaleY = .5; //changes the y scale of the moon 
                                background.addChild(moon); // adds the moon to the background 

                                
                                */ 

                for (var i = 0; i < 100; i++){

                    var circle = draw.circle(5,'white','LightGray',2);// a var called circle that holds each cricle
                    circle.x = canvasWidth*Math.random();// this puts the cirlce in random spots within the canvasWidth
                    circle.y = groundY*Math.random(); // this puts the cirlce within the groundY                           
                    background.addChild(circle); // puts the circle into the game 

                }
            
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?

            // each run of loop, a tree is created, and the code in pushed to the building array 
            for(var i = 0; i < 20; i++) {

                var treesHeight = groundY - 150; //height of the tree

               // var colors = ['green', 'blue', 'red'];
                
                var tree = draw.bitmap('../../Images/tree.png'); //draws the image
                    tree.scaleX = 0.5;//changes the witdth of the image
                    tree.scaleY = 0.7;//changes the hieght  of the image
                    tree.x = 300*i; //
                    tree.y = groundY - treesHeight; //where the tree stands on they axis           
                background.addChild(tree);
                trees.push(tree); 

            }

            // TODO 4: Part 1 - Add a tree

        
                                /*
                                Orginal Codind for running a tree in the fornt 

                                tree = draw.bitmap('img/tree.png');
                                tree.x = 0;
                                tree.y = 0;
                                background.addChild(tree);
                                                
                                
                                */



              for (var i = 0; i < 50; i++){
                    
                 var grass = draw.bitmap('../../Images/grass.png'); //draws the image
                    grass.scaleX = 6;//changes the witdth of the image
                    grass.scaleY = 1;//changes the hieght  of the image
                    grass.x = 300*i; 
                    grass.y = groundY - 10; //where the tree stands on they axis 
                 background.addChild(grass); 
                 grasses.push(grass)

                }
                      
                        
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            
                        /*
                        grass.x = grass.x - 5; 
                        if(grass.x < -200) {  
                            grass.x = canvasWidth;

                        }

                        */
            
            for (var i = 0; i < grasses.length; i++) {
                grasses[i].x = grasses[i].x - 5;   //runs the literation
                
            }
            
            // TODO 5: Part 2 - Parallax

            for (var i = 0; i < trees.length; i++) {
                trees[i].x = trees[i].x - 1;//runs the literation
                
            }
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
