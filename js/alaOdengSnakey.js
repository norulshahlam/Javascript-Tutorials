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
  let snakePos = { tr: 4, td: 5 };
  let trValue = snakePos.tr;
  let tdValue = snakePos.td;
  let drawSnakePos = $("#tr" + trValue + "td" + tdValue);

  const drawSnake = () => {
    console.log("draw snake: " + tdValue);
    let drawSnakePos = $("#tr" + trValue + "td" + tdValue);
    drawSnakePos.attr("id", "snake");
  };

  const removeSnake = () => {
    console.log("remove snake: " + tdValue);

    $("#snake").attr("id", `tr${trValue}td${tdValue}`);
  };
  drawSnake();

  document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case 37: //left
        removeSnake();
        tdValue--;
        drawSnake();

      // case 39:
      //   drawSnakePos = $("#tr" + (trValue + 1) + "td" + tdValue);
      // case 40:
      //   drawSnakePos = $("#tr" + trValue + "td" + (tdValue + 1));
      // case 37:
      //   drawSnakePos = $("#tr" + (trValue - 1) + "td" + tdValue);
    }
    // console.log(e.keyCode);
  });
  // const snakeControl = () => {
  // 	$("body").keydown(function () {
  // 		console.log(e.keycode);
  // 	});
  // };
  // snakeControl();
  // snakeControl();
});
