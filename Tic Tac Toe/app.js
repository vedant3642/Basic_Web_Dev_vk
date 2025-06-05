let boxes = document.querySelectorAll(".box");
let rst = document.querySelector("#reset");
let newGbtn = document.querySelector("#ng");
let para = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");
let turnO = true;
 
let winsit = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]
]

const resetgame = () =>{
    turnO = true;
    enableBox();
    msgcontainer.classList.add("hide");
    
}

const draw = () =>{
    para.innerText = "Ohh, there is no Winner the game is Draw.";
    msgcontainer.classList.remove("hide");
}

let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        count++;
        if(turnO){
            box.innerText= "O";
            box.style.color = "#082D0F";
            turnO = false;
        }else{
            box.innerText= "X";
            box.style.color = "#DEE5E5";
            turnO = true;    
        }
        box.disabled = true;
        if(count === 9){
            draw();
        }
        checkwinner();
    })
});

const disableBox = () => {
    for(box of boxes){
        box.disabled = true;
    }    
}

const enableBox = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }   
}

const showWinner = (winner) =>{
    para.innerText = `Congratulations!! Winner is ${winner}.`;
    msgcontainer.classList.remove("hide");
}

const checkwinner = () => {
    for (let pattern of winsit){
        let val1 =  boxes[pattern[0]].innerText;
        let val2 =  boxes[pattern[1]].innerText;
        let val3 =  boxes[pattern[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != ""){
            if((val1 === val2) && (val2 === val3)){
                console.log("winner ",val1);
                showWinner(val1);
            }
        }
    } 
}

newGbtn.addEventListener("click",resetgame);
rst.addEventListener("click",resetgame);

