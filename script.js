let user = 0;
let computer = 0;

let choices = document.querySelectorAll(".choice");

let genCompChoice = (() => {
    const option = ["rock","paper","scissor"];
    const Idx = Math.floor(Math.random()*3);
    return option[Idx];

});

const Draw = (() => {
    let draw = document.querySelector("#button");
    draw.innerHTML = "GAME DRAW! TRY AGAIN";
    draw.style.backgroundColor = "black";
    

});

const winner = ((Win,compChoice,userChoice) => {
    let win = document.querySelector("#button");
    let userCount = document.querySelector("#user-count");
    let compCount = document.querySelector("#computer-count");

        if(Win) {
            // console.log("YOU WIN!");
            win.innerHTML = `YOU WIN! ${userChoice} beats ${compChoice}`;
            user++;
            userCount.innerHTML = user;
            // win.classList.add("green");
            win.style.backgroundColor = "green";
        }
        else {
            // console.log("YOU LOSE");
            win.innerHTML = `YOU LOSE! ${compChoice} beats ${userChoice}`;
            computer++;
            compCount.innerHTML = computer;
            win.style.backgroundColor = "red";
            
            
        }

});




const playGame = ((choiceId) => {
    let userChoice = choiceId;
    // console.log("user choice is",userChoice);



    const compChoice = genCompChoice();
    // console.log("computer choice ", compChoice);

    if(userChoice == compChoice) {
        Draw();
        
    }

    else {
        let Win = true;



        if(userChoice === "rock") {
         Win = compChoice === "paper"? false : true; 
        }
        else if (userChoice === "paper") {
            Win = compChoice === "scissor"? false : true;
        }
        else {
            Win = compChoice === "rock"? false : true; 
        }
        winner(Win,compChoice,userChoice);
    }
    

});



choices.forEach((choice) => {
    //   console.log(choice);
      choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        // console.log("clicked",choiceId);
        playGame(choiceId);
        
      });
      

});