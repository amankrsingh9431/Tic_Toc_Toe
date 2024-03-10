let moveturn=document.querySelector("#moveturn");
const reset=document.querySelector("#reset");
let boxcontain=document.querySelectorAll(".boxcontain");
let happy=document.getElementById("happy");
let winteam=document.getElementById("winteam");
let ting=new Audio("sound/ting.mp3")
let gameend=new Audio("sound/game over.mp3")
let turno=true;
let count=0;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
boxcontain.forEach((boxcontainer)=>{
    boxcontainer.addEventListener('click',function(){
        if(turno){
       boxcontainer.innerText="x";
        turno=false;
    }
    else{
        boxcontainer.innerText="o";
       turno=true;
    }
    ting.play();
    boxcontainer.disabled=true;
    count++;
    gamedraw();
   moveturno();
})})
function gamedraw(){
    let iswinner=checkwinner();
    if(count===9 && !iswinner){
        document.getElementById("msg").style.display="block";
        gameend.play();
        }
}
function checkwinner(){
   for(let pattern of winpatterns){
    let one=boxcontain[pattern[0]].innerText;
    let two=boxcontain[pattern[1]].innerText;
    let three=boxcontain[pattern[2]].innerText;
   if(one !="" && two!="" && three!=""){
    if(one===two && two===three){
       showwiner(one); 
      
        return true;
    }
   }
   }
  
}
function showwiner(one){
    happy.style.display="block";
    moveturn.style.display="none"
    winteam.style.display="block"
    winteam.innerHTML=`Congurgulation winner is "${one}"`
    boxcontain.forEach((bocon)=>{
        bocon.disabled="true";
    })
   
}
function resets(){
    boxcontain.forEach((boxcontainer)=>{
        boxcontainer.innerText="";
        moveturn.style.display="block"
        boxcontainer.disabled=false;
        winteam.style.display="none"
        document.getElementById("msg").style.display="none";
        count=0;
        happy.style.display="none";
    })
}
function moveturno(){
    if(turno){
        moveturn.innerHTML=`This turn "x"`
    }
    else{
        moveturn.innerHTML=`This turn "o"`

    }
}
