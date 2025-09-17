let userScore = document.querySelector("#user");
let compScore = document.querySelector("#comp");

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let us =0;
let cs=0;
const showWin=(userWin,userChoice,comChoice)=> {
   
    if(userWin){
        msg.innerText = `YOU WIN 🥳 your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
        us++;
       userScore.innerHTML=us;
    } else {
        msg.innerText=`you lose! 😫 ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        cs++;
        compScore.innerHTML=cs;
    }
}

let drawgame = ()=>{
    msg.innerText="the game was draw!play again.🤞";
    msg.style.backgroundColor="blue";
    msg.style.color="white";
}

const genComChoice = ()=>{
   let  Option = ["paper","scissor","rock"]
   let comIdx =  Math.floor(Math.random()*3);
    return Option[comIdx];
}

const playGame = (userChoice) => {
    console.log("userchoice = ",userChoice);
    
    let comChoice = genComChoice();
    console.log("compchoice = ",comChoice);
    if(userChoice === comChoice){
        drawgame();
    } else {
        let userWin = true;

        if(userChoice === "rock"){
            //scissor,paper
            userWin = comChoice=== "paper" ?false:true;
        }
        else if(userChoice === "paper"){
            //rock,scissor
            userWin = comChoice === "scissor"?false:true;
        }
        else{
            //rock,paper
            userWin = comChoice === "rock"?false:true;

        }
        showWin(userWin,userChoice,comChoice);
    }

}

choices.forEach((choice)=>{

    choice.addEventListener("click",()=> {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})