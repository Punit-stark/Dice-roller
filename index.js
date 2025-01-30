const buttonEl=document.getElementById("roll-button")

const diceEl=document.getElementById("dice")

let histroyList=[];

const rollhistoryEl=document.getElementById("roll-history")

function rollDice(){
    const rollResult=Math.floor((Math.random() * 6) + 1);
    console.log(rollResult)
    const alldiceFace=diceFace(rollResult)
    diceEl.innerHTML=alldiceFace
    histroyList.push(rollResult)
    updateRollHistory();
}

function updateRollHistory(){
    rollhistoryEl.innerHTML="";
    for(let i=0;i<histroyList.length;i++){
        const listItem=document.createElement("li");
        listItem.innerHTML=`Roll ${i+1}: <span> ${diceFace(histroyList[i])}</span>`
        rollhistoryEl.appendChild(listItem)
    }
}
function diceFace(rollResult){
    switch(rollResult){
        case 1:
            return "&#9856"
        case 2:
            return "&#9857"
        case 3:
            return "&#9858"  
        case 4:
            return "&#9859" 
        case 5:
            return "&#9860"          
        case 6:
            return "&#9861"    
    }
}


buttonEl.addEventListener("click",()=>{
     diceEl.classList.add("roll-animation")
     console.log("clicked")
     setTimeout(()=>{
        diceEl.classList.remove("roll-animation")
        rollDice()
     },1000)
})