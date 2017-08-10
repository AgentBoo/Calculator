// NOTE:
let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let op = ["C", ".", "=", "+", "-", "x", "/"];

// NOTE: Displaying actions
// e.target == ref to object that dispatched the event
// e.currentTarget

// NOTE: Test if Kirupa's method works
// const queryKirupa = document.querySelector(".buttons");
// queryKirupa.addEventListener("mouseover", hide, false);
//
// function hide(kitten){
//   let win = document.getElementById("window");
//   if (kitten.target !== kitten.currentTarget){
//     kitten.target.style.visibility = "hidden";
//   }
//
//   kitten.stopPropagation();
// }

// NOTE: Eval method
//   var b = "3+2/-2";
//   console.log(eval(b));

// NOTE: Setup
const calcButton = document.querySelector(".buttons");
const results = document.getElementById("results");
const win = document.getElementById("window");
let realresults = document.createElement("div");


//this is my single memory
let memry = [];
let a = [];
let b = [];
let newarray = [];
let resultsArray=[];

calcButton.addEventListener("click", toDisplay, false);

// NOTE: proof of concepts
let f = 3, g = -4;
let t = f + g;
console.log(t);


// NOTE: Functions in use
// display what was clicked in a separate teal window, except C and =
function toDisplay(kitten){
  let array = [];
  if(kitten.target !== kitten.currentTarget && kitten.target.id == "clear"){
    memry = [];
    a = [];
    b = [];
    newarray = [];
    resultsArray = [];
    win.innerHTML="";
  }

  else if (kitten.target !== kitten.currentTarget && (kitten.target.id == "window" || kitten.target.id =="results")){

      win.append="";
  }
  else if(kitten.target !== kitten.currentTarget && kitten.target.id !== "="){
    //to display
    win.append(kitten.target.id);
    a.push(kitten.target.id);
    b.push(kitten.target.id);
    console.log(b);

    // to brain
    if (kitten.target.className == "op"){
      let number = b.splice(0, b.length-1);
      let operator = b.splice(0, 1);
      memry.push(number);
      memry.push(operator);

    }
  } else {
    memry.push(b);
    recalibrateArray(memry);

    // realresults.innerHTML =
    // `<div class="output" id="results">${newarray}</div>`
    // calcButton.replaceChild(results, realresults);
    }
  }


// NOTE: Following lines are only for a specific case of array.length = 3 and addition
function recalibrateArray(memry){
  console.log(JSON.stringify(memry));
  for (let i = 0; i < memry.length; i++){
    let sum = [];

    for (let j = 0; j < memry[i].length; j++){
      sum += memry[i][j];
    }
    newarray.push(sum);
  }
  console.log(newarray);
  recalibrateValues(newarray);
}


function recalibrateValues(newarray){
  console.log(JSON.stringify(newarray));

  let multipArray = [];
  let multiplication = 0;
  let divArray = [];
  let division = 0;
  let theRestArray = [];

  for (let i = 0; i < newarray.length; i++){

  if (newarray[i] == "x"){
    multiplication = newarray[i-1]*newarray[i+1];
    multipArray = newarray.splice(i-1,3,multiplication);
    console.log(newarray);
  }
} takecareofdivision(newarray);
  function takecareofdivision(newarray){
    for (let i = 0; i < newarray.length;i++){
      if (newarray[i] == "/"){
        division = newarray[i-1]/newarray[i+1];
        divArray = newarray.splice(i-1,3,division);
        console.log(newarray);

  }
    }
  }

  assignSign(newarray);

}

function assignSign(newarray){
  let final=[];
  let calc = "";
  for (let i = 0; i < newarray.length; i++){
    if (newarray[i] == "+" || newarray[i] == "-"){
      final = newarray.slice(i, i+2);
      calc = final[0]+final[1];
      resultsArray.push(calc);
      // summarize(resultsArray);
    }
  } resultsArray.push(newarray[0]);
  console.log(resultsArray);
  summarize(resultsArray);
}

function summarize(resultsArray){
  let whops = 0;

  for(let i = 0; i < resultsArray.length;i++){
  whops += Number(resultsArray[i]);

  }

  a=[];
  b=[];
  memry=[];
  newarray=[];

  resultsArray=[];

  if (whops == Infinity){
    win.innerHTML = "... pfff :D"
  console.log(whops);
  console.log(win);
} else {
  win.innerHTML = whops;

}
}





// }
// function multpl(a,b){
//   const s = a * b;
//   return s;
// }
// function div(a,b){
//   const s = a/b;
//   return s;
// }
