let boxes = document.querySelectorAll(".box");

let resetButton = document.querySelector("#reset-btn");

let newGameButton = document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.innerHTML = "<span style='color:#c1121f;'>O</span>";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    msgContainer.classList.add("hide");
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner} `;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let position1Value = boxes[pattern[0]].innerText;
    let position2Value = boxes[pattern[1]].innerText;
    let position3Value = boxes[pattern[2]].innerText;

    if (position1Value != "" && position2Value != "" && position3Value != "") {
      if (
        position1Value === position2Value &&
        position2Value === position3Value
      ) {
        console.log("We have a winner", position1Value);
        showWinner(position1Value);
      }
    }
  }
};

newGameButton.addEventListener("click", resetGame);

resetButton.addEventListener("click", resetGame);
