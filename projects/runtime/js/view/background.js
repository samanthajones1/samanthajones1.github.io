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
        var tree;
        var buildings = [];
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth, canvasHeight - 490, 'purple') //creates a var called backgroundFill and stores a rectraingle that acts as out background  
                        
            background.addChild(backgroundFill); //adds background to the canas so we can see it
      

            // TODO: 3 - Add a moon and starfield
            
            var moon = draw.bitmap('img/moon.png'); // var that holds the picture of the moon
                moon.x = canvasWidth - 300; // holds the x value ( left to right)
                moon.y = groundY - 300; //holds the y value (up and down)
                moon.scaleX = .5; //changes the x scale of the moeom
                moon.scaleY = .5; //changes the y scale of the moon 
                background.addChild(moon); // adds the moon to the background 

                for (var i = 0; i < 100; i++){
                    var circle = draw.circle(5,'white','LightGray',2);// a var called circle that holds each cricle
                    circle.x = canvasWidth*Math.random();// this puts the cirlce in random spots within the canvasWidth
                    circle.y = groundY*Math.random(); // this puts the cirlce within the groundY                           
                    background.addChild(circle); // puts the circle into the game 

                }
            
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            // each run of loop, a building is created, and the code in pushed to the building array 
            for(var i=0;i<10;i++) {
                var buildingHeight = groundY*Math.random(); // declare var called buldingHeight that holds the height of the buldings i pixels 
                var colors = ['green', 'blue', 'red'];
                var building = draw.rect(75,buildingHeight,colors,1); //var called building that holds each building
                building.x = 300*i; // adds 200 pixels everytime it runs
                building.y = groundY-buildingHeight; //sets the building's y position by subtracting the height of the buildings from groundY                
                background.addChild(building);// adds building to background for viewng
                buildings.push(building); // pushes the code of the indvual. buildings to the empty array, to be stored as a index 
            }

            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap('img/tree.png'); // gives the tree an image 
            tree.x = canvasWidth - 300; // 
            tree.y = groundY - 220; // changes the highet of the tree -- where it is on the y - axis 
            background.addChild(tree); // push the tree to show on the game
            
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            
            tree.x = tree.x - 5; // takes the current value of tree.x and suntracts 1 pixel 60/second to move tree left
            if(tree.x < -200) { // rest sets the tree to the right, create a loop type affect 
                tree.x = canvasWidth;
            }
            
            // TODO 5: Part 2 - Parallax

            for (var i = 0; i < buildings.length; i++) {
                buildings[i].x = buildings[i].x - 1;
                
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
