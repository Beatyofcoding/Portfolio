let oneBtn = document.getElementById('calc-one');
let twoBtn = document.getElementById('calc-two');
let threeBtn = document.getElementById('calc-three');
let fourBtn = document.getElementById('calc-four');
let fiveBtn = document.getElementById('calc-five');
let sixBtn = document.getElementById('calc-six');
let sevenBtn = document.getElementById('calc-seven');
let eightBtn = document.getElementById('calc-eight');
let niceBtn = document.getElementById('calc-nine').innerHTML;
let zeroBtn = document.getElementById('calc-zero').innerHTML;

let decimalBtn = document.getElementById('calc-decimal');
let clearBtn = document.getElementById('calc-clear');
let backspaceBtn = document.getElementById('calc-backspace');
let displayValElement = document.getElementById('calc-display-val');
document.getElementById("calc-display-val").innerHTML
let displayVal = '0';
let pendingVal;
let evalStringArray = [];

let calcNumBtns = document.getElementByClassName('calc-btn-num');
let calcOperatorBtns = document.getElementByClassName('calc-btn-operator');

let updateDisplayVal = (clickObj) => {
    let btnText = clickObj.target.innerText;

    if(displayVal === '0')
        displayVal = '';

        displayVal += btnText;
        displayValElement.innetText = displayVal;
}

for (let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

// for (let i = 0; i < calcOperatorBtns.length; i++){
//     calcOperatorBtns[i].addEventListener('click', updateDisplayVal, false);
    
// }
clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
}