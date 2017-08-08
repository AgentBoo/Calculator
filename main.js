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

const calcButton = document.querySelector(".buttons");
let a = [];
let win = document.getElementById("window");
let results = document.getElementById("results");

calcButton.addEventListener("click", toDisplay, false);

// display what was clicked in a separate teal window, except C and =
function toDisplay(kitten){


  if(kitten.target !== kitten.currentTarget && kitten.target.id !== "="){
    win.append(kitten.target.id);
    a.push(kitten.target.id);
    console.log(a);

  } else {
    // gets me out of this function into another function
    console.log(a);
    parsingFunction(a);
  }
}

// NOTE: Following lines are only for a specific case of array.length = 3 and addition
function parsingFunction(a){
  let k = a[0];
  let c = a[2];

  add(k,c)
}


// NOTE: Individual arithmetic functions
function add(k,c){
  let s = Number(k) + Number(c);
  console.log(Number(k));
  console.log(Number(c));
  console.log(s);
  results.append(s);
  return s;
}


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
