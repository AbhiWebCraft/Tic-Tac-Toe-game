let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 5],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
   msgContainer.classList.add("hide")
};



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "White"
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "#25283D";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});
const gameDraw = () => {
    msg.innerText = `Game is Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    };
};



const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    };
};

const showWinner = (winner) => {
    msg.innerText = `congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for (let pattern of winpatterns) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if (posVal1 === posVal2 && posVal2 === posVal3){
                showWinner(posVal1);
                return true;
            }
        }
    }
};
newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
// const = function resetGame()