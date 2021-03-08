$(() => {
  const $table = $("<table>");
  $table.attr("id", "ring").attr("cellspacing", "0");
  $("body").append($table);
  const rowCell = 10;

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
  const $start = $("<button>").text("Start").attr("id", "start");
  $("body").append($start);

  let snakePos = [
    { tr: 4, td: 5 },
    { tr: 3, td: 5 },
    { tr: 2, td: 5 },
  ];
  let prevTrValue = 0;
  let prevTdValue = 0;

  let randPelletteTrVal = Math.floor(Math.random() * rowCell);
  let randPelletteTdVal = Math.floor(Math.random() * rowCell);

  let $score = $("div").attr("id", "score").text(0);
  let currentScore = 0;

  // auto move

  // random pellette
  const randomPellette = () => {
    randPelletteTrVal = Math.floor(Math.random() * rowCell);
    randPelletteTdVal = Math.floor(Math.random() * rowCell);

    if()
    let $drawPellete = $("#tr" + randPelletteTrVal + "td" + randPelletteTdVal);
    $drawPellete.attr("class", "pellette");
  };
  randomPellette();

  const updateScore = () => {
    // add up to score value
    currentScore++;
    $score = $("div").attr("id", "score").text(currentScore);
  };

  const addSnake = () => {
    snakePos.push({ tr: prevTrValue, td: prevTdValue });
  };

  const drawSnake = () => {
    if (
      $("#tr" + snakePos[0].tr + "td" + snakePos[0].td).attr("class") ===
      "pellette"
    ) {
      addSnake();
      randomPellette(); // make new pellette once its being hit
      updateScore();
    } else {
      $("td").removeClass("snake");
    }

    // snakePos.unshift({ tr: prevTrValue, td: prevTdValue });
    // snakePos.pop();
    // console.log(snakePos);
    for (let i = 0; i < snakePos.length; i++) {
      let $drawSnakePos = $("#tr" + snakePos[i].tr + "td" + snakePos[i].td);
      $drawSnakePos.attr("class", "snake");
      // snakePos.unshift($drawSnakePos);
      // snakePos.pop();
    }

    if (
      snakePos[0].tr === -1 || // going outside of top border
      snakePos[0].tr === rowCell || // going outside of bottom border
      snakePos[0].td === -1 || // going outside of left border
      snakePos[0].td === rowCell //going outside of right border
    )
      alert("GAME OVER!");
  };

  drawSnake();
  console.log(snakePos);
  document.addEventListener("keydown", (e) => {
    console.log(snakePos);
    switch (e.keyCode) {
      case 37:
        snakePos.unshift({ tr: snakePos[0].tr, td: snakePos[0].td - 1 });
        snakePos.pop();
        drawSnake();

        break;
      case 38:
        snakePos.unshift({ tr: snakePos[0].tr - 1, td: snakePos[0].td });
        snakePos.pop();
        drawSnake();

        break;
      case 39:
        snakePos.unshift({ tr: snakePos[0].tr, td: snakePos[0].td + 1 });
        snakePos.pop();
        drawSnake();
        break;
      case 40:
        snakePos.unshift({ tr: snakePos[0].tr + 1, td: snakePos[0].td });
        snakePos.pop();
        drawSnake();

        break;
    }

    e.preventDefault();
  });

  // setInterval(() => {
  // 	drawSnake();
  // }, 1000);
  //start button/reset
  //snake auto moves
  // const movSnake = () => {
  //      snakePos[0].tr ++,
  // }
  //add snake tails
  // const addSnake = () => {
  // 	snakePos.push({ tr: prevTrValue, td: prevTdValue });
  // };
  //snake hit its own body
});
// document.addEventListener("keydown", (e) => {
//      switch (e.keyCode) {
//           case 38:
//                prevTdValue = snakePos[0].td;
//                prevTrValue = snakePos[0].tr;
//                console.log(prevTrValue, prevTdValue);
//                snakePos[0].tr--;
//                drawSnake();
//                break;
//           case 39:
//                prevTdValue = snakePos[0].td;
//                prevTrValue = snakePos[0].tr;
//                snakePos[0].td++;
//                drawSnake();
//                break;
//           case 40:
//                prevTdValue = snakePos[0].td;
//                prevTrValue = snakePos[0].tr;
//                snakePos[0].tr++;
//                drawSnake();
//                break;
//           case 37:
//                prevTdValue = snakePos[0].td;
//                prevTrValue = snakePos[0].tr;
//                snakePos[0].td--;
//                drawSnake();
//                break;
//      }
