/**
firstTimeLoad();
startGame();
endGame();
restartGame()

 */

$(() => {
  //creaete table
  const $table = $("<table>");
  $table.attr("id", "ring").attr("cellspacing", "0").attr("border", "black");
  $("body").append($table);
  const rowCell = 20;

  for (let i = 0; i < rowCell; i++) {
    //rows
    const $row = $("<tr>").attr("id", `tr${i}`);
    $table.append($row);
    for (let j = 0; j < rowCell; j++) {
      const $cell = $("<td>");
      $cell.attr("id", `tr${i}td${j}`);
      $table.append($cell);
    }
  }

  //gloabal variable
  const $start = $("<button>").text("Start").attr("id", "start");
  $("body").append($start);
  let snakePos;
  let randPeletteTrVal;
  let randPeletteTdVal;
  let $drawPelette;
  let $score;
  let currentScore;
  let lastTail;
  let pelette = { tr: randPeletteTrVal, td: randPeletteTdVal };
  let direction = { tr: 1, td: 0 };
  let check = false;

  startGame();

  function startGame() {
    $("#start").hide();
    snakePos = [{ tr: 9, td: 10 }];
    $score = $("div").attr("id", "score").text(0);
    currentScore = 0;
    randPeletteTrVal = 0;
    randPeletteTdVal = 0;
    $drawPelette = $("#tr" + randPeletteTrVal + "td" + randPeletteTdVal);
    randomPelette();
    direction = { tr: 1, td: 0 };
    check = false;

    drawSnake();
  }

  /************event listeners **************/
  $("#start").click(startGame);

  document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case 38:
        if (direction.tr === 0) {
          direction.tr = 1;
          direction.td = 0;
          break;
        } else return;
      case 39:
        if (direction.td === 0) {
          direction.tr = 0;
          direction.td = -1;
          break;
        } else return;
      case 40:
        if (direction.tr === 0) {
          direction.tr = -1;
          direction.td = 0;
          break;
        } else return;
      case 37:
        if (direction.td === 0) {
          direction.tr = 0;
          direction.td = 1;
          break;
        } else return;
    }
  });

  /***************  FUNCTION DECLARATION  *****************/

  function randomPelette() {
    randPeletteTrVal = Math.floor(Math.random() * rowCell);
    randPeletteTdVal = Math.floor(Math.random() * rowCell);

    snakePos.forEach((i) => {
      if (pelette.tr === i.tr && pelette.td === i.td) {
        randomPelette();
      } else {
        $drawPelette.attr("class", "pelette");
      }
    });
  }

  function gameOver() {
    alert("Game over");
    check = true;
    $("#start").show();
  }

  function updateScore() {
    // add up to score value
    currentScore++;
    $score = $("div").attr("id", "score").text(currentScore);
  }
  //add snake tails
  function addSnake() {
    snakePos.push(lastTail);
  }

  //render snake
  function drawSnake() {
    if (snakePos[0].tr === pelette.tr && snakePos[0].td === pelette.td) {
      addSnake(); // snake length increasess
      randomPelette(); // make new pelette once its being hit
      updateScore();
      console.log("working");
    } else {
      $("td").removeClass("snake");
    }
    lastTail = snakePos[snakePos.length - 1];
    snakePos.unshift({
      tr: snakePos[0].tr - direction.tr,
      td: snakePos[0].td - direction.td,
    });
    snakePos.pop();

    for (let i = 0; i < snakePos.length; i++) {
      let $drawSnakePos = $("#tr" + snakePos[i].tr + "td" + snakePos[i].td);
      $drawSnakePos.attr("class", "snake");
      // console.log(3, snakePos);
    }

    //snake hit its own body
    snakePos.forEach((i, j) => {
      if (j > 0) {
        if (snakePos[0].tr == i.tr && snakePos[0].td == i.td) {
          gameOver();
        }
      }
    });
    if (
      snakePos[0].tr === -1 || // going outside of top border
      snakePos[0].tr === rowCell || // going outside of bottom border
      snakePos[0].td === -1 || // going outside of left border
      snakePos[0].td === rowCell //going outside of right border
    )
      gameOver();
  }

  setInterval(() => {
    if (check == false) {
      drawSnake();
    }
  }, 200);
});
