var globalBrand = "none";
var answerInput = "";
var first = 1;
var second = 1;
var answer = 2;
var equate1 = {
  first: 1,
  second: 1,
  answer: 2,
  index: 0
};
var equate2 = {
  first: 2,
  second: 2,
  answer: 4,
  index: 1
};
var equate3 = {
  first: 3,
  second: 3,
  answer: 6,
  index: 2
};
var equate4 = {
  first: 4,
  second: 4,
  answer: 8,
  index: 3
};
var equate5 = {
  first: 5,
  second: 5,
  answer: 10,
  index: 4
};
var equate6 = {
  first: 6,
  second: 6,
  answer: 12,
  index: 5
};
var equate7 = {
  first: 7,
  second: 7,
  answer: 14,
  index: 6
};
function switchBrand(brand){
  switch(brand){
    case "cricketNB":
      globalBrand = "cricketNB";
      document.getElementById("theBody").style.color = "blue";
      document.getElementById("h1-1").style.backgroundColor = "orange";
      document.getElementById("h1-1").innerHTML = "Cricket New Born Chosen!";
      document.getElementById("theBody").style.backgroundColor = "blue";
      document.getElementById("equateWindow").innerHTML = "1 + 1 =";
      document.getElementById("equateWindowSolution").innerHTML = "2";
      first = 1;
      second = 1;
      answer = 2;
      break;
    case "cricket":
      globalBrand = "cricket";
      document.getElementById("theBody").style.color = "blue";
      document.getElementById("h1-1").style.backgroundColor = "orange";
      document.getElementById("h1-1").innerHTML = "Cricket Chosen!";
      document.getElementById("theBody").style.backgroundColor = "blue";
      document.getElementById("equateWindow").innerHTML = "2 + 2 =";
      document.getElementById("equateWindowSolution").innerHTML = "4";
      first = 2;
      second = 2;
      answer = 4;
      break;
    case "koala":
      globalBrand = "koala";
      document.getElementById("theBody").style.color = "#fc0";
      document.getElementById("h1-1").style.backgroundColor = "black";
      document.getElementById("h1-1").innerHTML = "Koala Chosen!";
      document.getElementById("theBody").style.backgroundColor = "#fc0";
      document.getElementById("equateWindow").innerHTML = "3 + 3 =";
      document.getElementById("equateWindowSolution").innerHTML = "6";
      first = 3;
      second = 3;
      answer = 3;      
      break;
    case "kiwi":
      globalBrand = "kiwi";
      document.getElementById("theBody").style.color = "#9c0";
      document.getElementById("h1-1").style.backgroundColor = "black";
      document.getElementById("h1-1").innerHTML = "Kiwi Chosen!";
      document.getElementById("theBody").style.backgroundColor = "#9c0";
      document.getElementById("equateWindow").innerHTML = "4 + 4 =";
      document.getElementById("equateWindowSolution").innerHTML = "8";
      first = 4;
      second = 4;
      answer = 8;      
      break;
    case "tinker":
      globalBrand = "tinker";
      document.getElementById("theBody").style.color = "#f63";
      document.getElementById("h1-1").style.backgroundColor = "black";
      document.getElementById("h1-1").innerHTML = "Tinker Chosen!";
      document.getElementById("theBody").style.backgroundColor = "#f63";
      document.getElementById("equateWindow").innerHTML = "5 + 5 =";
      document.getElementById("equateWindowSolution").innerHTML = "10";
      first = 5;
      second = 5;
      answer = 10;      
      break;
    case "doodle":
      globalBrand = "doodle";
      document.getElementById("theBody").style.color = "#069";
      document.getElementById("h1-1").style.backgroundColor = "orange";
      document.getElementById("h1-1").innerHTML = "Doodle Chosen!";
      document.getElementById("theBody").style.backgroundColor = "#069";
      document.getElementById("equateWindow").innerHTML = "6 + 6 =";
      document.getElementById("equateWindowSolution").innerHTML = "12";
      first = 6;
      second = 6;
      answer = 12;      
      break;
  }
}

function newEquation(){
  //alert("newEquation");
  switch(globalBrand){
      case "cricketNB":
        document.getElementById("equateWindow").innerHTML = "6 + 6 =";
        document.getElementById("equateWindowSolution").innerHTML = "12";
        break;
      case "cricket":
        document.getElementById("equateWindow").innerHTML = "6 + 6 =";
        document.getElementById("equateWindowSolution").innerHTML = "12";
        break;
      case "koala":
        document.getElementById("equateWindow").innerHTML = "6 + 6 =";
        document.getElementById("equateWindowSolution").innerHTML = "12";
        break;
      case "kiwi":
        document.getElementById("equateWindow").innerHTML = "6 + 6 =";
        document.getElementById("equateWindowSolution").innerHTML = "12";
        break;
      case "tinker":
        document.getElementById("equateWindow").innerHTML = "6 + 6 =";
        document.getElementById("equateWindowSolution").innerHTML = "12";
        break;
      case "doodle":
        document.getElementById("equateWindow").innerHTML = "6 + 6 =";
        document.getElementById("equateWindowSolution").innerHTML = "12";
        break;
  } 
}
function checkAnswer(){
  switch(globalBrand){
      case "cricketNB":
        if(first + second == answer){
          alert("Correct!");
    
        }else{
          alert("Sorry, try again!");
  }
        break;
      case "cricket":
        document.getElementById("equateWindow").innerHTML = "6 + 6 =";
        document.getElementById("equateWindowSolution").innerHTML = "12";
        break;
      case "koala":
        document.getElementById("equateWindow").innerHTML = "6 + 6 =";
        document.getElementById("equateWindowSolution").innerHTML = "12";
        break;
      case "kiwi":
        document.getElementById("equateWindow").innerHTML = "6 + 6 =";
        document.getElementById("equateWindowSolution").innerHTML = "12";
        break;
      case "tinker":
        document.getElementById("equateWindow").innerHTML = "6 + 6 =";
        document.getElementById("equateWindowSolution").innerHTML = "12";
        break;
      case "doodle":
        document.getElementById("equateWindow").innerHTML = "6 + 6 =";
        document.getElementById("equateWindowSolution").innerHTML = "12";
        break;
  } 
  
}
