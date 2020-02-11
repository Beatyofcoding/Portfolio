
// let card = "K"
// let points

// switch (card) {
//     case 'A':
//         points = 1
//         break

//     case 'J':

//     default:
// }

// console.log(card, points)







// let a = 3
// switch (a) {
//     case 3:
//         console.log('Too small!')
//         break

//         case 4 :
//             console.log('Exactly')
//             break

//             case 5 :
//                 console.log('Too large')
//                 break
//                 default:
//                     console.log('No such value')
// }



// let card = "K"
// let points

// if (card ==='A'){
//     points = 1
// } else if (card === 'J'){
//     points = 11
// } else if (card === 'Q'){
//     points = 12
// } else if (card === 'K'){
//     points = 13
// } else {
//     points = Number(card)
// }
// console.log(card, points)


// A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
// const points = getCardPoints(card)
// // console.log(card, points)
// let card = "A"
// let ponts;
// function getCardPoints (card){

//     switch (card) {
        
//         case "A" :
//             points = 1
//             break
            
//         case "J":
//             points = 11
//             break
                
//         case "Q":
//             points = 12
//             break
                    
//         case "K":
//             points = 13
//             break
            
//         default:
//             points = Number(card)
//     }
                        
// }
// console.log(card,points)
                        
       



/*
*****
*****
*****
*/
// 1 . how to bud one row?
// 2 . how to repeat the process?

function buildRow() {
    let row = '';
    for ( let i = 0; i < columns; i++ ){
    row += '*';
}
return row;
}
function buildButton( rows, columns)
let button = '';
for let i = 0; i < rows; i++){
    button += buildRow(columns);
}


let row = buildRow(5)
console.log(row);