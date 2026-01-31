document.addEventListener("DOMContentLoaded", () => {

    console.log("welcome to tic tac toe");

    let audioTurn = new Audio("ting.mp3"); // optional
    let isgameover = false;
    let turn = "X";

    const changeTurn = () => {
        return turn === "X" ? "O" : "X";
    };

    const checkwin = () => {
        let boxtext = document.getElementsByClassName("boxtext");

        let wins = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        wins.forEach(e => {
            if (
                boxtext[e[0]].innerText !== "" &&
                boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
                boxtext[e[1]].innerText === boxtext[e[2]].innerText
            ) {
                document.querySelector(".info").innerText =
                    boxtext[e[0]].innerText + " WON 🎉";
                isgameover = true;
            }
        });
    };

    // GAME LOGIC
    let boxes = document.getElementsByClassName("box");

    Array.from(boxes).forEach(box => {
        let boxtext = box.querySelector(".boxtext");

        box.addEventListener("click", () => {
            if (boxtext.innerText === "" && !isgameover) {
                boxtext.innerText = turn;
                turn = changeTurn();
                checkwin();

                if (!isgameover) {
                    document.querySelector(".info").innerText =
                        "Turn for " + turn;
                }
            }
        });
    });

    // RESET
    let reset = document.getElementById("reset");

    reset.addEventListener("click", () => {
        let boxtexts = document.querySelectorAll(".boxtext");
        boxtexts.forEach(e => e.innerText = "");
        turn = "X";
        isgameover = false;
        document.querySelector(".info").innerText = "Turn for X";
    });

});
