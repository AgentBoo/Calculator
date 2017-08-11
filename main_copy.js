// NOTE: Displaying actions
// e.target == element that dispatched the event -- event handler attached to this
// e.currentTarget == element on which event happend

// NOTE: Test if Kirupa's method works
// const queryKirupa = document.querySelector(".buttons");
// queryKirupa.addEventListener("mouseover", hide, false);
//
//    function hide(kitten){
//      let win = document.getElementById("window");
//      if (kitten.target !== kitten.currentTarget){
//        kitten.target.style.visibility = "hidden";
//      } kitten.stopPropagation();
//    }

// NOTE: Eval() method
//   var b = "3+2/-2";
//   console.log(eval(b));

// NOTE: Proof of concept
// let f = 3, g = -4;
// let t = f + g;
// console.log(t);


// NOTE: Variable declarations
const calcButtons = document.querySelector(".calcButtons");
const inputWin = document.getElementById("inputWindow");
// const outputWin = document.getElementById(outputWindow);
let outputLog = document.getElementById("outputLog"); // was previously sidePan
// let outputWinRes = document.createElement("div"); // was previously realresults

// "Hippokampus"
// let a = []; //was previously a
let f = []; // was previously b first array
let gD = []; // was previously memry digits individually
let mD= []; //was previously newarray multidigits
let lingebraAr=[]; //was previously resultsArray




calcButtons.addEventListener("click", toDisplay, false);

function toDisplay(kitten){
  lingebraAr = [];

  if (kitten.target !== kitten.currentTarget && kitten.target.id == "inputWindow"){
    inputWin.append="";

} else if(kitten.target !== kitten.currentTarget && kitten.target.id == "clear"){
    let p = document.createElement("p");
        p.classList.add('outputLog-content');
        p.append(`${inputWin.textContent}`);
    outputLog.append(p);

    f = [];
    gD = [];
    mD = [];
    lingebraAr=[];
    inputWin.innerHTML="";

} else if (kitten.target !== kitten.currentTarget && kitten.target.id !== "="){
    //to display
    inputWin.append(kitten.target.value);

    // to hippokampus
    f.push(kitten.target.value);
    if (kitten.target.className == "op"){
      let number = f.splice(0, f.length-1);
      let operator = f.splice(0, 1);
      gD.push(number);
      gD.push(operator);
      // console.log(JSON.stringify(dI));
    }

  } else {
    gD.push(f);
    recalibrateArray(gD);
  }
}


function recalibrateArray(gD){
  for (let i = 0; i < gD.length; i++){

// NOTE: concatenating array entries == strings
    let cat = [];
    for (let j = 0; j < gD[i].length; j++){
      cat += gD[i][j];
    } mD.push(cat);
  } recalibrateValues(mD);
}

function recalibrateValues(mD){
  console.log(JSON.stringify(mD));

  let multipArray = [];
  let multiplication = 0;
  let divArray = [];
  let division = 0;

  for (let i = 0; i < mD.length; i++){
    if (mD[i] == "x"){
    multiplication = mD[i-1] * mD[i+1];
    multipArray = mD.splice(i-1,3,multiplication);
    }
  } takecareofdivision(mD);
}

function takecareofdivision(mD){
  for (let i = 0; i < mD.length;i++){
    if (mD[i] == "/"){
        division = mD[i-1]/mD[i+1];
        divArray = mD.splice(i-1,3,division);
    }
  } assignSign(mD);
}

function assignSign(mD){
  console.log(JSON.stringify(mD));
  let final=[];
  let calc = "";
  for (let i = 0; i < mD.length; i++){
    if (mD[i] == "+" || mD[i] == "-"){
      final = mD.slice(i, i+2);
      calc = final[0] + final[1];
      lingebraAr.push(calc);
    }
  } lingebraAr.push(mD[0]);
    summarize(lingebraAr);
}

function summarize(lingebraAr){
  console.log(JSON.stringify(lingebraAr));
  let resNum = 0;
  for(let i = 0; i < lingebraAr.length;i++){
  resNum += Number(lingebraAr[i]);
  } if (resNum == Infinity){
    console.log(resNum);
    inputWin.innerHTML = "... pfff :D"
    f=[];
    gD = [];
    mD=[];
    lingebraAr=[];
  } else {
    console.log(resNum);
    inputWin.innerHTML = resNum;
    f=[];
    gD = [];
    mD = [];
    lingebraAr=[];
    f.push(resNum);
    return resNum;
  }
// NOTE: The very last bracket of the document
}
