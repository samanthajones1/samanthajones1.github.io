var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Sir Derek",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY - 50 } ,
                { "type": "sawblade", "x": 600, "y": groundY - 50 },
                { "type": "sawblade", "x": 900, "y": groundY - 50 },

                { "type": "enemy", "x": 400, "y": groundY - 50 } ,
                { "type": "enemy", "x": 600, "y": groundY - 50 },
                { "type": "enemy", "x": 800, "y": groundY - 50 },

                { "type": "reward", "x": 500, "y": groundY - 50 } ,
                { "type": "reward", "x": 700, "y": groundY - 50 },
                { "type": "reward", "x": 900, "y": groundY - 50 },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y){
              var hitZoneSize = 25; // increase the size of the hit zone
            var damageFromObstacle = 10; // the damage the robort gets from the obstacle 
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);// actually creates the obstacle in the game
            sawBladeHitZone.x = x; // is the x-value of the hit zone
            sawBladeHitZone.y = y;// is the y-vlaue of the hit zone 
            game.addGameItem(sawBladeHitZone);  // adds the histzone to the game
            var obstacleImage = draw.bitmap('img/sawblade.png'); // draws and stores the images ub the variable 
            sawBladeHitZone.addChild(obstacleImage); // adds the image to the hitzone so we can see it 
            obstacleImage.x = -25; //lines up the images to the hit zone via x-value
            obstacleImage.y = -25; // lines up the images to the hit zone via y -value
        
        }
          

        function createEnemy(x, y){
            var enemy = game.createGameItem('enemy',25); // creates emeny game item and stores it in the varoable 
            var redSquare = draw.rect(50,50,'red'); //draws a red square and stores it to the varibale 
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -1; // moves enemy to the left
            enemy.rotationalVelocity = 10; // roataes enemy by 20 pilxes
    
            enemy.onPlayerCollision = function() { // this function detects if the enemy colldies with halle, and decreses the health 
                console.log('The enemy has hit Halle');
            };
            
            enemy.onProjectileCollision = function(){ // detects if halle hits the enemy with her balls -- adds score and gets rid of enemies
                game.increaseScore(10); // this is the score for hitting the enemy 
                enemy.fadeOut(); // after being hit, the enemy will fade out off the screen
    
            };
        }

        function createReward(x, y){
            var reward = game.createGameItem('reward',25); // creates emeny game item and stores it in the varoable 
            var blueSquare = draw.rect(50,50,'blue'); //draws a blueSquare and stores it to the varibale 
            blueSquare.x = -25;
            blueSquare.y = -25;
            reward.addChild(blueSquare);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -1; // moves reward to the left
            reward.rotationalVelocity = 10; // roataes reward by 20 pilxes
    
            reward.onPlayerCollision = function() { // this function detects if the enemy colldies with halle, and decreses the health 
                console.log('The reward has hit Halle');
                game.changeInterity(10);
                game.increaseScore(10);   
                reward.fadeOut();
            
            };  
            
            reward.onProjectileCollision = function(){ // detects if halle hits the enemy with her balls -- adds score and gets rid of enemies
                game.changeInterity(10);
              
            };
        }

    
        for (var i = 0;i < levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];

            if(gameItem.type === 'sawblade'){
                createSawBlade(gameItem.x, gameItem.y)
            }

            if(gameItem.type === 'enemy'){
                createEnemy(gameItem.x, gameItem.y)
            }

            if(gameItem.type === 'reward'){
                createReward(gameItem.x, gameItem.y)
            }

        }
    
    
        // DO NOT EDIT CODE BELOW HERE
    }

};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
