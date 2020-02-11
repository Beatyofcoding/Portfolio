/*
*****
*****
*****
*/

// // 1. how to build one row?
// // 2. how to repeat the process?

// function buildRow(columns) {
//     let row = '';
//     for (let i = 0; i < columns; i++) {
//       row += '*';
//     }
//     return row;
//   }

//   function buildButton(rows, columns) {
//     let button = '';
//     for (let i = 0; i < rows; i++) {
//       button += buildRow(columns) + '\n';
//     }
//     return button;
//   }

//   // let row = buildRow(5);
//   // console.log(row);

//   let button = buildButton(3, 5);
//   console.log(button);

/*
******
*    *
*    *
******
*/

// 1. how to build a 'full' row
// 2. how to build an 'empty' row
// 3. how to build the whole button, knowing that:
//    1. the first and last rows are always 'full'
//    2. all other rows in between are always 'empty' 







// function GimmeCompliment(ranking) {
//     let compliment
//     console.log(ranking,compliment)
//     switch (ranking) {

//         case "1":
//             compliment = "Dull!"
//             break

//         case "5":
//             compliment = "Cool!"
//             break

//         case "10":
//             compliment = "Bravo!"
//             break

//         case "15":
//             compliment = "Awesome!"
//             break

//         case 20:
//             compliment = "Stylish!"
//             break

//     }
//     return compliment
//     // default:
//     //     compliment = Number(Rankings)
// }


// console.log(GimmeCompliment("1"))


// let str = ""
// let j = 0
// let str2 = ""
// for (i = 0; i < 8; i+=2){        str2+="\n*"

//     for ( j = 0;j < 5; j++){

//         str += 


function triangle(rows) {
    let n = 1;
    let spaces = rows - 1
    for ( let n = 0; n < 9; n+=2)
}