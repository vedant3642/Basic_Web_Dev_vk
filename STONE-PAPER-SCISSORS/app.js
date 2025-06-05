let objs = document.querySelectorAll(".obj");
// let r = document.querySelector("#rock");
// let p = document.querySelector("#paper");
// let s = document.querySelector("#scissors");

let usersc = 0;
let compsc = 0;

let usscore = document.querySelector("#ussc");
let coscore = document.querySelector("#cosc");

let msgcont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const gencompChoice = ()=> {
    const arr = ["rock","paper","scissors"];
    let compch = Math.floor(Math.random() * 3);
    return arr[compch];
}

const Draw = () =>{
    msg.innerText = "PLAY AGAIN, The Game was DRAW";
    msg.style.backgroundColor = "rgb(5, 5, 51)";
}

const showWinner = (userwin,compchoice,userchoice) =>{
    if(userwin){
        usersc++;
        usscore.innerText = usersc;
        msg.innerText = `USER wins against COMPUTER as ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compsc++;
        coscore.innerText = compsc;
        msg.innerText = `COMPUTER defeats USER as ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }

}

const playGame = (userchoice) =>{
    console.log(`Choice was clicked ${userchoice}`);
    let compchoice = gencompChoice();
    console.log(`Computer choice is ${compchoice}`);
    if(compchoice === userchoice){
        Draw();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        }else{
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,compchoice,userchoice);
    }   
}

objs.forEach((obj) => {
    obj.addEventListener("click",()=>{
        const userchoice = obj.getAttribute("id");
        playGame(userchoice);    
    }) 
});
