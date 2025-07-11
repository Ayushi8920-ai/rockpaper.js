 let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

     updateScore();
      //  This reads any saved score from localStorage (or starts fresh with 0s). Then updateScore() immediately displays this score on the webpage (UI).o show the initial score when the page loads.Otherwise, if you don't do this it's like loading a score in the background but never showing it to the user.
     

      //we don't need function for updatemove and updateresult because we have to only use them once that is after playeruse.
      /*
      if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
      }
      */
      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }

        if (result === 'You win.') {
          score.wins += 1;
        } else if (result === 'You lose.') {
          score.losses += 1;
        } else if (result === 'Tie.') {
          score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));
        //updating score
        //saves the updated score to localStorage (so it persists even after refresh). Then updateScore() updates the UI with the new values.✅ So after each move, you see the updated score instantly.

        updateScore();
         document.querySelector('.gameResult').innerHTML=`result: ${result}`;

        document.querySelector('.moves').innerHTML=` You
      <img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${computerMove}-emoji.png" class="move-icon">
      Computermove`;
      }
      function updateScore()
      {
        document.querySelector('.gameScore').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} `;
      }

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }