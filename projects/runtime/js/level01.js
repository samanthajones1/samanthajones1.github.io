var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function (game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Sir Derek",
            "number": 1,
            "speed": -3,
            "gameItems": [
                /* 
                These are all the calls of the functions added into the game 
                */


                { "type": "crow", "x": 400, "y": groundY - 120 },
                { "type": "crow", "x": 2300, "y": groundY - 120 },
                { "type": "crow", "x": 3400, "y": groundY - 120 },
                { "type": "crow", "x": 4400, "y": groundY - 120 },

                { "type": "thorn", "x": 700, "y": groundY },
                { "type": "thorn", "x": 2000, "y": groundY },
                { "type": "thorn", "x": 3500, "y": groundY },
                { "type": "thorn", "x": 4000, "y": groundY },

                { "type": "goblin", "x": 900, "y": groundY - 50 },
                { "type": "goblin", "x": 3000, "y": groundY - 50 },
                { "type": "goblin", "x": 7000, "y": groundY - 50 },

                { "type": "dimond", "x": 900, "y": groundY - 80 },
                { "type": "dimond", "x": 1700, "y": groundY - 80 },
                { "type": "dimond", "x": 3500, "y": groundY - 80 },
                { "type": "dimond", "x": 4500, "y": groundY - 80 },
                { "type": "dimond", "x": 8500, "y": groundY - 80 },
                { "type": "dimond", "x": 8600, "y": groundY - 80 },
                { "type": "dimond", "x": 8700, "y": groundY - 80 },

                { "type": "orge", "x": 8000, "y": groundY - 80 },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE


        /*    function createSawBlade(x, y){
                  var hitZoneSize = 30; // increase the size of the hit zone
                var damageFromObstacle = 10; // the damage the robort gets from the obstacle 
                var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);// actually creates the obstacle in the game
                sawBladeHitZone.x = x; // is the x-value of the hit zone
                sawBladeHitZone.y = y;// is the y-vlaue of the hit zone 
                game.addGameItem(sawBladeHitZone);  // adds the histzone to the game
                var obstacleImage = draw.bitmap('../../Images/crows(1).png'); // draws and stores the images ub the variable 
                sawBladeHitZone.addChild(obstacleImage); // adds the image to the hitzone so we can see it 
                obstacleImage.x = -250//lines up the images to the hit zone via x-value
                obstacleImage.y = -250; // lines up the images to the hit zone via y -value
            
            }
         */


        function createThorn(x, y) {
            var hitZoneSize = 30; // increase the size of the hit zone
            var damageFromObstacle = 10; // the damage the robort gets from the thorn
            var thornHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);// actually creates the thorn in the game
            thornHitZone.x = x - 20; // is the x-value of the hit zone
            thornHitZone.y = y - 20;// is the y-vlaue of the hit zone 
            game.addGameItem(thornHitZone);  // adds the histzone to the game
            var obstacleImage = draw.bitmap('../../Images/thorn bush(1).png'); // draws and stores the images ub the variable
            obstacleImage.scaleX = 0.21; // changes the width of the thorn
            obstacleImage.scaleY = 0.21; //changes the height of the thorn
            thornHitZone.addChild(obstacleImage); // adds the image to the hitzone so we can see it 
            obstacleImage.x = -30//lines up the images to the hit zone via x-value
            obstacleImage.y = -35; // lines up the images to the hit zone via y -value

        }


        function createCrow(x, y) {
            var crow = game.createGameItem('crow', 30); // creates emeny game item and stores it in the varoable 
            var crowImage = draw.bitmap('../../Images/crows(1).png'); //adds the image of the goblin
                crowImage.scaleX = 0.1; //changes the size of the image -- width
                crowImage.scaleY = 0.1; //changes the size of the image -- height
                crowImage.x = -30; // moves the x axis closer to the hit zone
                crowImage.y = -30; // moves the y axis closer to the hit zone
                        //redSquare.x = -25; //the size of one side of the square
                        // redSquare.y = -25; //the size of one side of the square 
            crow.addChild(crowImage); //adds the goblin to the game
            crow.x = x;  //create the x paramentar function
            crow.y = y;// creates the y paraemetner function
            game.addGameItem(crow); //adds the enemy to the game items 
            crow.velocityX = -3; // moves enemy to the left
            crow.rotationalVelocity = 0; // roataes enemy by 20 pilxes

            crow.onPlayerCollision = function () { // this function detects if the enemy colldies with halle, and decreses the health 
                console.log('The crow has hit Halle'); //console logs this message 
                game.changeIntegrity(-20); // decreses heatlh by 20 
            };

            crow.onProjectileCollision = function () { // detects if halle hits the enemy with her balls -- adds score and gets rid of enemies
                console.log('Halle shot a crow'); // console logs this mesages after Halle shots an enemy 
                game.increaseScore(50); // this is the score for hitting the enemy 
                crow.fadeOut(); // after being hit, the enemy will fade out off the screen

            };
        }





        function createGoblin(x, y) {
            var goblin = game.createGameItem('goblin', 10); // creates emeny game item and stores it in the varoable 
            var goblinImage = draw.bitmap('../../Images/goblin.png'); //adds the image of the goblin
                goblinImage.scaleX = 0.50; //chnages the size -- width
                goblinImage.scaleY = 0.50; //changes the size -- height
                goblinImage.x = -90; //moves the Image to the hit zone viz x axis -- left and right
                goblinImage.y = -125; //moves the Image closer to thehit zone  via y axis -- up and down
                        //redSquare.x = -25; //the size of one side of the square
                        // redSquare.y = -25; //the size of one side of the square 
            goblin.addChild(goblinImage); //adds the goblin to the game
            goblin.x = x; //paraementer
            goblin.y = y; //paramtner
            game.addGameItem(goblin); //adds the enemy to the game items 
            goblin.velocityX = -4; // moves enemy to the left
            goblin.rotationalVelocity = 0; // roataes enemy by 20 pilxes

            goblin.onPlayerCollision = function () { // this function detects if the enemy colldies with halle, and decreses the health 
                console.log('The goblin has hit Halle'); //console logs this message 
                game.changeIntegrity(-20); // decreses heatlh by 20 
            };

            goblin.onProjectileCollision = function () { // detects if halle hits the enemy with her balls -- adds score and gets rid of enemies
                console.log('Halle shot a goblin'); // console logs this mesages after Halle shots an enemy 
                game.increaseScore(20); // this is the score for hitting the enemy 
                goblin.fadeOut(); // after being hit, the enemy will fade out off the screen

            };
        }

        function createOrge(x, y) {
            var orge = game.createGameItem('Orge', 30); // creates emeny game item and stores it in the varoable 
            var orgeImage = draw.bitmap('../../Images/orge.png'); //adds the image of the goblin
                orgeImage.scaleX = 0.50; //chnages the size -- width
                orgeImage.scaleY = 0.50; //changes the size -- height
                orgeImage.x = -90; //moves the Image to the hit zone viz x axis -- left and right
                orgeImage.y = -125; //moves the Image closer to thehit zone  via y axis -- up and down
                        //redSquare.x = -25; //the size of one side of the square
                        // redSquare.y = -25; //the size of one side of the square 
            orge.addChild(orgeImage); //adds the goblin to the game
            orge.x = x; //paraementer
            orge.y = y; //paramtner
            game.addGameItem(orge); //adds the enemy to the game items 
            orge.velocityX = -4; // moves enemy to the left
            orge.rotationalVelocity = 0; // roataes enemy by 20 pilxes

            orge.onPlayerCollision = function () { // this function detects if the enemy colldies with halle, and decreses the health 
                console.log('The orge has hit Halle'); //console logs this message 
                game.changeIntegrity(-100); // decreses heatlh by 20 
            };

            orge.onProjectileCollision = function () { // detects if halle hits the enemy with her balls -- adds score and gets rid of enemies
                console.log('Halle shot a orge'); // console logs this mesages after Halle shots an enemy 
                game.increaseScore(100); // this is the score for hitting the enemy 
                orge.fadeOut(); // after being hit, the enemy will fade out off the screen

            };
        }




        function createDimond(x, y) {
            var dimond = game.createGameItem('dimond', 25); // creates reward game item and stores it in the varoable 
            var dimondImage = draw.bitmap('../../Images/dimond-gem.png'); //draws a blueSquare and stores it to the varibale 
            dimondImage.scaleX = 0.20; // changes the size of the image via width
            dimondImage.scaleY = 0.20; //chnages the size via height 
            dimondImage.x = -21; // cmoes the image via x asix -- left and right
            dimondImage.y = -22; //moves the image via y axis -- up and down
            //blueSquare.x = -25;
            //blueSquare.y = -25;
            dimond.addChild(dimondImage); // add the image to the screen 
            dimond.x = x; //pareamentor 
            dimond.y = y; //parementor
            game.addGameItem(dimond); //adds the item to the game
            dimond.velocityX = -1; // moves reward to the left
            dimond.rotationalVelocity = 0; // roataes reward by 20 pilxes

            dimond.onPlayerCollision = function () { // this function detects if the reward colldies with halle
                console.log('Halle has collected the reward'); //will say in the console log to show what halle has done
                game.changeIntegrity(10); // increases heatlh by 10
                game.increaseScore(10);   // increases score by 10 
                dimond.shrink(); // makes the reward shrink after halle collectes it 

            };

        }



        for (var i = 0; i < levelData.gameItems.length; i++) {
            var gameItem = levelData.gameItems[i];

            
            if (gameItem.type === 'crow') {  //adds the item to the game y clarifings the type of item
                createCrow(gameItem.x, gameItem.y)  //runs the function with the new arguments 
            }
            

            if (gameItem.type === 'thorn') {  //adds the item to the game y clarifings the type of item
                createThorn(gameItem.x, gameItem.y) //runs the function with the new arguments 
            }

            if (gameItem.type === 'goblin') {  //adds the item to the game y clarifings the type of item
                createGoblin(gameItem.x, gameItem.y) //runs the function with the new arguments 
            }

            if (gameItem.type === 'dimond') { //adds the item to the game y clarifings the type of item
                createDimond(gameItem.x, gameItem.y) //runs the function with the new arguments 
            }

            if (gameItem.type === 'orge') { //adds the item to the game y clarifings the type of item
                createOrge(gameItem.x, gameItem.y) //runs the function with the new arguments 
            }


        }


        // DO NOT EDIT CODE BELOW HERE
    }

};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
