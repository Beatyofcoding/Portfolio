
// let rand= Math.random()
// let shifted = rand*10
// let integ = Math.floor(shifted)
// let fs = integ+1
let guessnumber = prompt("Guess my number Pepeeto");

let fs = Math.floor(Math.random() * 10) + 1

if (guessnumber === fs)
{
    alert("Bravo Muchacho")
}
else {
   alert(`Number ${guessnumber} was incorrect you good for nothing. Correct was ${fs}`)

    
}

// Math.random() -> 0..1
// Math.floor(num) -> integer