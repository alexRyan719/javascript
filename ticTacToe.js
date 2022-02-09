document.getElementById("gameBoard").style.display = "none";
document.getElementById("submitMove").style.display = "none";
document.getElementById("difSelect").style.display = "none";
document.getElementById("startButton").style.display = "none";
// document.getElementById(2).innerHTML = "FFS";
var spaces = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
var turn = "human";
var gameOver = "false";
//document.getElementById("consoleBox").innterHTML = spaces[0].toString();
document.getElementById("consoleBox").innerHTML = spaces;

var XO = "X";
var cpuXO = "O";
var difficulty = "easy";
function selectXO(choice){
  if(choice == 'O'){
    XO = 'O';
    cpuXO = 'X';
  }
  document.getElementById("xoSelect").style.display = "none";
  document.getElementById("xoSelecth2").innerHTML = "What difficulty would you like?"
  document.getElementById("difSelect").style.display = "inline";
}
function selectDif(choice){
  if(choice == 'hard'){
    difficulty = 'hard';
  }else if(choice == 'normal'){
    difficulty = 'normal';
  }else if(choice == 'impossible'){
    difficulty = 'impossible';
  }
  document.getElementById("xoSelect").style.display = "none";
  document.getElementById("xoSelecth2").innerHTML = "What difficulty would you like?"
  document.getElementById("difSelect").style.display = "none";
  document.getElementById("xoSelecth2").style.display = "none";
  document.getElementById("startButton").style.display = "inline";
}
function newGame(){
   document.getElementById("gameBoard").style.display = "block";
  // document.getElementById("submitMove").style.display = "inline";
  document.getElementById("startButton").style.display = "none";
  document.getElementsByClass("location").innterHTML = "-";
}
function move(index){
  if(spaces[index] == -1){
    document.getElementById(index).innerHTML = XO;
    document.getElementById(index).style.disable = true;
    spaces[index] = 1;
    if(gameOver == "false"){
    checkWin("human");   
    }
  }
  document.getElementById("consoleBox").innerHTML = spaces;
  cpuMove();
}
function cpuMove(){
  var cpuMoved = "false";
  var cpuIndex = 0;
  if(difficulty == "easy"){
      while(cpuMoved == "false"){
        if(spaces[cpuIndex] == -1){
          spaces[cpuIndex] = 2;
          document.getElementById(cpuIndex).innerHTML = cpuXO;
          cpuMoved = "true"; 
        }
        cpuIndex += 1;
        if(cpuIndex == spaces.length -1){
          cpuMoved = "true";
        }
      }
    }else if(difficulty == "normal"){
      cpuIndex = 4
      while(cpuMoved == "false"){
        if(spaces[cpuIndex] == -1){
          spaces[cpuIndex] = 2;
          document.getElementById(cpuIndex).innerHTML = cpuXO;
          cpuMoved = "true";
        }
        cpuIndex += 1;
        if(cpuIndex == spaces.length -1){
          cpuIndex = 0;
        }
      }
    }else if(difficulty == "hard"){
      while(cpuMoved == "false"){
        if(spaces[cpuIndex] == -1){
          spaces[cpuIndex] = 2;
          document.getElementById(cpuIndex).innerHTML = cpuXO;
          cpuMoved = "true";
        }
        cpuIndex += 1;
        if(cpuIndex == spaces.length -1){
          cpuMoved = "true";
        }
      }
    }else if(difficulty == "impossible"){
      while(cpuIndex < 9){
        if(spaces[cpuIndex] == -1){
          spaces[cpuIndex] = 2;
          document.getElementById(cpuIndex).innerHTML = cpuXO;          
        }
        cpuIndex += 1;
      }
    }
    if(gameOver == "false"){
    checkWin("cpu");   
    }}
function checkWin(player){
  if(player == "human"){
    if((spaces[0] == 1) && (spaces[4] == 1) && (spaces[8] == 1)){
      win("human");
    }else if((spaces[0] == 1) && (spaces[1] == 1) && (spaces[2] == 1)){
      win("human");
    }else if((spaces[0] == 1) && (spaces[3] == 1) && (spaces[6] == 1)){
      win("human");
    }else if((spaces[1] == 1) && (spaces[4] == 1) && (spaces[7] == 1)){
      win("human");
    }else if((spaces[2] == 1) && (spaces[5] == 1) && (spaces[8] == 1)){
      win("human");
    }else if((spaces[3] == 1) && (spaces[4] == 1) && (spaces[5] == 1)){
      win("human");
    }else if((spaces[6] == 1) && (spaces[7] == 1) && (spaces[8] == 1)){
      win("human");
    }else if((spaces[2] == 1) && (spaces[4] == 1) && (spaces[6] == 1)){
      win("human");
    }
  } 
  if(player == "cpu"){  
    if((spaces[0] == 2) && (spaces[3] == 2) && (spaces[6] == 2)){
      win("cpu");
    }else if((spaces[0] == 2) && (spaces[1] == 2) && (spaces[2] == 2)){
      win("cpu");
    }else if((spaces[1] == 2) && (spaces[4] == 2) && (spaces[7] == 2)){
      win("cpu");
    }else if((spaces[2] == 2) && (spaces[5] == 2) && (spaces[8] == 2)){
       win("cpu");
     }else if((spaces[3] == 2) && (spaces[4] == 2) && (spaces[5] == 2)){
      win("cpu");
    }else if((spaces[6] == 2) && (spaces[7] == 2) && (spaces[8] == 2)){
      win("cpu");
    }else if((spaces[2] == 2) && (spaces[4] == 2) && (spaces[6] == 2)){
      win("cpu");
    }else if((spaces[0] == 2) && (spaces[4] == 2) && (spaces[8] == 2)){
      win("cpu");
    }
  }
}
function win(player){
  if(player == "human"){
    document.getElementById("titleBanner").innerHTML = "You win!";
    var choice = confirm("You win!!! Play again?");
    if (choice == true) {
        location.reload(true);
        gameOver = "true";
    } else {
        
    }
  }else if(player == "cpu"){
    document.getElementById("titleBanner").innerHTML = "The CPU wins!";
    var choice = confirm("The machine won!!! Play again?");
    if (choice == true) {
        location.reload(true);
        gameOver = "true";
    } else {
       
    }
    
  }else{
     document.getElementById("titleBanner").innerHTML = "Nobody wins! It's a scratch!";
    var choice = confirm("Nobody won!!! Play again?");
    if (choice == true) {
        location.reload(true);
        gameOver = "true";
  }
}
}
