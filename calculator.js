var toBeWorked = [0];
var currTotal = 0; //To be displayed while keys are entered
var runningTotal = 0;
var runningStr = "0";
  

document.getElementById("calcWindow").innerHTML = runningStr;

// function add(){
//   if(checkOperand()){
//     return 0
//   }else{
//     toBeWorked.push('+');
//     runningStr += "+";
//   }
//   arrEval();
//   document.getElementById("calcWindow").innerHTML = runningStr;
// }

// function subtract(){
  
// }

function checkForOperator(val){
  // if(toBeWorked[toBeWorked.length] == '+' ||toBeWorked[toBeWorked.length] == '-' ||toBeWorked[toBeWorked.length] == 'X' ||toBeWorked[toBeWorked.length] == '/'){
  if(val == '+' || val == '-' || val == 'X' || val == '/'){
    return 1;
  }
  else{
    document.getElementById("myConsole").innerHTML = val;
    return 0;
  }
}

function updateDisplay(){
  document.getElementById("calcWindow").innerHTML = runningStr;
  document.getElementById("myConsole").innerHTML = toBeWorked;//runningStr ;
  return 0;
}

function numBut(val){
  isOperator = checkForOperator(val);
  if(runningStr == "0" && isOperator == 0){
    runningStr = val;
    toBeWorked.push(val);
    updateDisplay();
    return 0;
  }
  if(isOperator == 0){
    toBeWorked.push(val);
    runningStr += val;
    updateDisplay();
   // document.getElementById("myConsole").innerHTML = "COUNTED AS AN OPERAND";
    return 0;
  }
  prevIsOperator = checkForOperator(runningStr.charAt(runningStr.length-1));
  if(isOperator == 1 && prevIsOperator == 1) {
    //document.getElementById("myConsole").innerHTML = "ALREADY AN OPERAND";
    return 0;
  }else{
    toBeWorked.push(val);
    runningStr += ' ' + val + ' ';
    updateDisplay();
    return 0;
  }
  return 0;
  // document.getElementById("calcWindow").innerHTML = runningStr;
  // document.getElementById("myConsole").innerHTML = runningStr;
}

function clearIt(){
  runningStr = "0";
  toBeWorked = [];
  updateDisplay();
  return 0;
}

function del(){
  if(runningStr.length == 1){
    runningStr = "0";
    toBeWorked = [];
  }else{
    runningStr = runningStr.slice(0, runningStr.length-1);
    toBeWorked.pop();
  }
  // if(runningStr.chatAt(runningStr.length-1 ))
  // runningStr.slice(0, -1);
  
  updateDisplay();
  return 0;
}

function evaluate(){
  multDiv = 1;
  opCount = 0;
  if(runningStr.length == 1){
    return 0;
  }
  var toCheck = checkForOperator(toBeWorked[toBeWorked.size - 1]);
  //Preliminary sweep to count operators
  for(var i = 0; i < toBeWorked.size; i++){
    if(toBeWorked[i].nan){
      opCount++;
    }
  }
  
//   if{
//    toCheck == 1;
//     toBeWorked.pop();
//   }
//   if{
//     while(multDiv == 1){
//       for(var i = 1; i < toBeWorked.size() -1; i++){
        
//       }
   // }
 // }
}
