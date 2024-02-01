let btns = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let landing = document.querySelector("#landing");
let newGameBtn = document.querySelector("#newGame");
let winner = document.querySelector("#winner");
let winMsg = document.querySelector("#winMsg");
let gotoGameBtn = document.querySelector("#goToGame");
let game = document.querySelector("#game");

let turnsX = true; //playerX, playerO"

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const newGame = () => {
  turnsX = true;
  enablebtns();
  landing.classList.add("hide");
  winner.classList.add("hide");
  game.classList.remove("hide");
};

const resetGame = () => {
  turnsX = true;
  enablebtns();
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("button was clicked");
    if (turnsX) {
      //player X
      btn.innerText = "X";
      turnsX = false;
    } else {
      // player O
      btn.innerText = "O";
      turnsX = true;
    }
    btn.disabled = true;

    checkWinner(); //when click on any btns will check the function checkWinner
  });
});

const disablebtns = () => {
  for (let btn of btns) {
    btn.disabled = true;
  }
};

const enablebtns = () => {
  for (let btn of btns) {
    btn.disabled = false;
    btn.innerText = " ";
  }
};

const theWinner = (win) => {
  winMsg.innerText = `congratulations, Winner is player ${win}`;
  winner.classList.remove("hide");
  game.classList.add("hide");
  disablebtns();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern) = give then array of patterns that will be winning patterns after click
    //console.log(pattern[0], pattern[1], pattern[2]); //give 0idx, 1idx, 2idx value
    //console.log(btns[pattern[0]].innerText, btns[pattern[1]].innerText, btns[pattern[2]].innerText)

    let pos1text = btns[pattern[0]].innerText;
    let pos2text = btns[pattern[1]].innerText;
    let pos3text = btns[pattern[2]].innerText;

    if (pos1text != "" && pos2text != "" && pos3text != "") {
      //need to check that any positon is not empty befor checking winning condition
      if (pos1text === pos2text && pos2text === pos3text) {
        // wins.innerText = `congratulation, player${pos2text}`;
        theWinner(pos1text);
      }

      // btns.innerText.disabled = true;
    }
  }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", newGame);
gotoGameBtn.addEventListener("click", newGame);
