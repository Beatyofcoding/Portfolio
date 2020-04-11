let sumNumbers = [];
let arrNum = null;

function display(number){
    arrNum = number;
    document.getElementById('display').innerHTML = number;
}

function sum(){
    sumNumbers.push(arrNum);
    arrNum = null;
}


function result(){
    if(sumNumbers.length != 0){
        sum();
        let num = 0;
        for(let i = 0; i < sumNumbers.length; i++){
            num += sumNumbers[i];
        }
        document.getElementById('display').innerHTML = num;
        sumNumbers.splice(0,sumNumbers.length);
    }
}