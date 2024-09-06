let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const option = ["Rock","Paper","Scessors"];
   const ranidx = Math.floor(Math.random()*3);
   return option[ranidx];
}

const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "Game was draw, play again!";
    msg.style.background = "#081b38";
}

    let showWinner = (userwin,userchoice,compchoice) => {
        if(userwin) {
            // console.log("You win");
            userscore++;
            userscorepara.innerText = userscore;
            msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
            msg.style.background = "green";
            msg.style.border = "3px solid white";
        }
        else {
            // console.log("You lose");
            compscore++;
            compscorepara.innerText = compscore;
            msg.innerText = `You lose! ${compchoice} beats Your ${userchoice}`;
            msg.style.background = "red";
            msg.style.border = "3px solid darkblue";
        }
    }


const playgame = (userchoice) => {
    // console.log("user choise = ",userchoice);
    // Generate computer choice
    const compchoice = genCompChoice();
    // console.log("computer choice = ", compchoice);
   
    if(userchoice === compchoice) {
        drawGame();
    }
    else {
        let userwin = true;
        if(userchoice === "Rock") {
            // Paper,Scessors
            userwin = compchoice === "Paper" ? false : true;
        }
        else if(userchoice === "Paper") {
            // Rock, Scessors
            userwin = compchoice === "Rock" ? true : false;
        }
        else {
            //Rock,Paper
            userwin = compchoice === "Rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
    }

}




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})

