(function(){
    'use strict'
    console.log('reading JS');

    const scoreArea = document.querySelector('#score');
    const gameArea = document.querySelector('#game');
    const actionArea = document.querySelector('#actions');
    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');

    // Audio Elements for various game events
    const snakeEyesSound = new Audio('sounds/snakeeye.m4a');
    const gameOver1Sound = new Audio('sounds/gameover1.m4a');
    const gameOver2Sound = new Audio('sounds/gameover2.m4a');

    // Game Data Initialization
    const gameData = {
        dice: ['images/1die1.png', 'images/2die2.png', 'images/3die1.png', 'images/4die2.png', 'images/5die1.png', 'images/6die2.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    // Event Listener for Start Game Button
    startGame.addEventListener("click", function(){
        // Randomly select starting player
        gameData.index = Math.round(Math.random());
        // console.log(gameData.index);

        // Set up game control buttons
        gameControl.innerHTML = '<h2>Click the Quit button to quit the game</h2>'
        gameControl.innerHTML += '<button id="quit">Quit</button>';

        // Event Listener for Quit Button
        document.getElementById('quit').addEventListener("click", function(){
            location.reload(); // Reloads the page to start a new game
        });

        // console.log("set up the turn!");
        setUpTurn(); // Set up the turn for the first player
    });

    // Function to set up player's turn
    function setUpTurn(){
        gameArea.innerHTML = `<p>It's ${gameData.players[gameData.index]}'s turn</p>`;
        actionArea.innerHTML = '<button id="roll">Roll The Dice</button>';

        // Event Listener for Roll Dice Button
        document.querySelector('#roll').addEventListener("click", function(){
            //console.log('Roll the Dice');
            throwDice(); // Trigger dice roll
        });
    }
    
    // Function to simulate dice roll
    function throwDice(){
        actionArea.innerHTML = ''; // Clear action area
        gameData.roll1 = Math.floor(Math.random() * 6) + 1; // Random roll for dice 1
        gameData.roll2 = Math.floor(Math.random() * 6) + 1; // Random roll for dice 2
        gameArea.innerHTML = `<p>It's ${gameData.players[gameData.index]}'s turn</p>`;
        gameArea.innerHTML += `<img src='${gameData.dice[gameData.roll1-1]}'><img src='${gameData.dice[gameData.roll2-1]}'>`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        // console.log(gameData.rollSum);

        //if two 1's are rolled...
        if(gameData.rollSum === 2){
            // console.log('snake eyes!');
            gameArea.innerHTML += '<p>Ooops, you got a Snake eyes!</p>'; // Snake eyes condition
            snakeEyesSound.play();
            gameData.score[gameData.index] = 0; // Reset score for current player
            gameData.index ? (gameData.index = 0) : (gameData.index = 1); // Switch player turn
            
            showCurrentScore(); // Display current score
            setTimeout(setUpTurn, 2000); // Set up next turn after delay
        }
        //if either dice is a 1...
        else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            //console.log("one of two dice was a 1");
            gameData.index ? (gameData.index = 0) : (gameData.index = 1); // Switch player turn
            gameArea.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000); // Set up next turn after delay
        }
        //if neither dice is a 1...
        else {
            //console.log("game proceeds...");
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum; // Update score
            // Display options for the current player
            actionArea.innerHTML = '<button id="rollagain">Roll again</button>  <button id="pass">Pass</button>';

            // Event Listener for Roll Again Button
            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn(); // Set up next turn
            });

            // Event Listener for Pass Button
            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1); // Switch player turn
                setUpTurn(); // Set up next turn
            });
        }

        checkWinningCondition(); // Check for winning condition
    } // end throw dice function

    // Function to check winning condition
    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            // Display winner and total points
            scoreArea.innerHTML = `<h2>${gameData.players[gameData.index]} wins! Total points: ${gameData.score[gameData.index]}</h2>`;
            
            // Play game over sound based on winner
            if(gameData.players[gameData.index] == 'player 1'){
                gameOver1Sound.play();
            }
            if(gameData.players[gameData.index] == 'player 2'){
                gameOver2Sound.play();
            }

            actionArea.innerHTML = ''; // Clear action area
            document.getElementById('quit').innerHTML = "Start a New Game?"; // Change text of quit button
        } else {
            showCurrentScore(); //Show current score
        }
    }

    // Function to display current score
    function showCurrentScore(){
        scoreArea.innerHTML = `<p>Current Score: <br>
        <strong>${gameData.players[0]}: ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: ${gameData.score[1]}</strong></p>`;
    }
})();