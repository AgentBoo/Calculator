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

//this is my single memory
let memry = [];
let a = [];
let b = [];
let newarray = [];

calcButton.addEventListener("click", toDisplay, false);

// NOTE: proof of concepts
let f = 3, g = -4;
let t = f + g;
console.log(t);


// NOTE: Functions in use
// display what was clicked in a separate teal window, except C and =
function toDisplay(kitten){
  let array = [];
  if(kitten.target !== kitten.currentTarget && kitten.target.id !== "="){
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
    recalibrateArray(memry)
    return a;
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
}


function recalibrateValues(newarray){
  console.log(JSON.stringify(newarray));
  for (let i = 0; i < memry.length; i++){
  let sum = [];

  for (let j = 0; j < memry[i].length; j++){
    sum += memry[i][j];
  }
  newarray.push(sum);
}
console.log(newarray);
}



// NOTE: Individual arithmetic functions
// function add(a,b){
//   const s = a + b;
//   return s;

// function subtr(a,b){
//   const s = a - b;
//   return s;
// }
// function multpl(a,b){
//   const s = a * b;
//   return s;
// }
// function div(a,b){
//   const s = a/b;
//   return s;
// }
