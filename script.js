//selectors
const p1scoreElm=document.querySelector('#p1score')
const p2scoreElm=document.querySelector('#p2score')
const playingtoElm=document.querySelector('.playingto')
const p1btnElm=document.querySelector('#p1btn')
const p2btnElm=document.querySelector('#p2btn')
const resetbtnElm=document.querySelector('#resetbtn')
const inputscoreElm=document.querySelector('#inputscore')
const formElm=document.querySelector('form')

//Single responsibility check
let p1Score=0;
let p2Score=0;
let winningScore=5;
let gameOver=false;
const players=['p1','p2'];
let turnPlayer=players[Math.floor(Math.random()*players.length)];

//function handling winning score
function handlingWinningScore(){
    if(p1Score===winningScore){  
    alert('Player 1 is winner')
} 
else if(p2Score===winningScore){
alert('Player 1 is winner')
}
if (p1Score===winningScore || p2Score===winningScore){
    gameOver=true;
    //disable player 1 or player 2 button
    p1btnElm.setAttribute('disabled','disabled')
    p2btnElm.setAttribute('disabled','disabled') 
}}
//update winning score //playing to score DOM
playingtoElm.textContent=winningScore;
//disable player button based on turn
turnPlayer==='p1'
?p2btnElm.setAttribute('disabled','disabled')
:p1btnElm.setAttribute('disabled','disabled')
//function for validation check
function validationInput(score){
    if(score<1){
        alert('Please provide a value more than 0')
    }
}
//function for reset value
function resetValues(){
    p1Score=0;
    p2Score=0;
    winningScore=5;
    gameOver=false;
    turnPlayer='p2'; 
    p1btnElm.removeAttribute('disabled')
    p2btnElm.removeAttribute('disabled')
    p1scoreElm.textContent=p1Score;
    p2scoreElm.textContent=p2Score;
    playingtoElm.textContent=winningScore;
}
//User input and updating Playing the score
formElm.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    //reset previous state
    resetValues();
    //getting the input
    const inputScore=inputscoreElm.value;
    //validation check
    validationInput(inputScore);
    //saving it into data layer
    winningScore=+inputScore;
    //showing the value on DOM
    playingtoElm.textContent=inputScore
    //reset the input
    inputScore='';
})


p1btnElm.addEventListener('click',(evt)=>{
    //increase the count
    //increase conditionals
    if(turnPlayer=='p1' && !gameOver && p1Score<winningScore){
        p1Score++
    //update DOM
    p1scoreElm.textContent=p1Score;
    //change player turn
    turnPlayer='p2'
    //disable player 1 button
    p1btnElm.setAttribute('disabled','disabled')
    //enable player 2 button 
    p2btnElm.removeAttribute('disabled') 
    }
 handlingWinningScore();    
})

p2btnElm.addEventListener('click',(evt)=>{
    //increase the count
    //increase conditionals
    if(turnPlayer='p2' && !gameOver && p2Score<winningScore){
        p2Score++
    //update DOM
    p2scoreElm.textContent=p2Score; 
    //change player turn 
    turnPlayer='p1';
    //disable player 2 button
    p2btnElm.setAttribute('disabled','disabled') 
    //enable player 1 button
    p1btnElm.removeAttribute('disabled') 
    }
  handlingWinningScore();   
})


resetbtnElm.addEventListener('click',resetValues)

