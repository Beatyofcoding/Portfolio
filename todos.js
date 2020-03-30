// C = create
// R = read / retrieve
// U = update
// D = delete

// let todos = [
//     { id: 1, text: 'Learn JavaScript', completed: true },
//     { id: 2, text: 'Seek for a job', completed: false},
//     { id: 3, text: 'Forget everything'},
// ]

// function showTodos(){
//     let html = `
//     console.log(todos)
//     <ul>
//     ${todos.map(todo => {})}
//         <li>Learn JavaScript</li>
//         <li>Seek for a job</li>
//         <li>Forget everything</li>
//     </ul>`

//     let html

//     return html
// }
// let arr = [2, 2, 2, 2, 2]

// for (let item of arr) {
//   console.log(item * 2)
// }

// let arr = [7, 11, 12, 32, 22, 28]

// 1. create a function
// 2. initialize a variable
// 3. loop over items
//    1. update the variable
// 4. return the final value of that variable

// function checkEven(arr) {
//   let thereIsAnEvenNumber = false
//   for (let item of arr) {
//     if (item % 2 === 0) {
//       thereIsAnEvenNumber = true
//     }
//   }
//   return thereIsAnEvenNumber
// }

// console.log(checkEven(arr))

// function allNumberIsEven(arr) {
//   if (item % 2 === 0) console.log()
// }

// // allNumberIsEven(2)
// let arr = [3, 3, 3, 4]

// function allNumberIsEven(arr) {
//   let allNumberIsEven = true
//   for (let item of arr) {
//     if (item % 2 === 0) {
//       allNumberIsEven = true
//     } else {
//       allNumberIsEven = false
//     }
//   }

//   return allNumberIsEven
// }
// console.log(allNumberIsEven(arr))

// let arr = [3, 3, 4, 3]

// function allNumberIsEven(arr) {
//   let allNumberIsEven = true
//   for (let item of arr) {
//     if (item % 2 === 0) {
//       allNumberIsEven = item
//       break
//     } else {
//       allNumberIsEven = undefined
//     }
//   }

//   return allNumberIsEven
// }
// console.log(allNumberIsEven(arr))

// let arr = [4, 3, 2, 1]

// function allNumberIsEven(arr) {
//   let allNumberIsEven = []
//   for (let item of arr) {
//     if (item % 2 === 0) {
//       allNumberIsEven.push(item)

//       ////////////// } else {
//       // //////////////////////  allNumberIsEven = false
//       /////////// }
//     }
//   }
//   return allNumberIsEven
// }
// console.log(allNumberIsEven(arr)) Sam s Solution
// let arr = [3, 3, 4, 3, 6]

// function firstEvenNumber(arr) {
//   for (let item of arr) {
//     if (item % 2 === 0) {
//       return item
//     }
//   }
// }
// console.log(firstEvenNumber(arr)) antony s solution

// let arr = [1, 2, 3, 4]
// let arr = [4, 3, 2, 1]

// function allNumberIsEven(arr) {
//   let allNumberIsEven = []
//   for (let item of arr) {
//     if (item % 2 === 0) {
//       allNumberIsEven.push(item * item)
//     }
//   }
//   return allNumberIsEven
// }
// console.log(allNumberIsEven(arr))

// function allNumberTogether(arr) {
//   let result = 1
//   for (let item of arr) {
//     result += item
//   }

//   return result
// }
// console.log(allNumberTogether(arr))

// {/* <body>

// let todos = [
//   { id: 1, text: 'Learn JavaScript', completed: true },
//   { id: 2, text: 'Seek for a job', completed: false },
//   { id: 3, text: 'Forget everything' }
// ]

// function render() {
//   //1. loop over all the todos
//   //2. for every todo:
//   //   1. create '<li>{todo.text}</li>'
//   //   2. concatenate to the html
//   document.querySelector('ul').innerHTML = todos
//     .map(
//       todo => `<li ${todo.completed ? 'class = "done"' : ''}>${todo.text}</li>`
//     )
//     .join('')
// }

// render()

// document.querySelector('form').onsubmit = function(event) {
//   event.preventDefault()

//   let text = document.querySelector('input').value
//   let todo = { id: generateId(), text: text }
//   todos.push(todo)
//   document.querySelector('input').value = ''
//   render()
// }

// function generateId() {
//   if (todos.length === 0) {
//     return 1
//   }
//   let lastTodo = todos[todos.length - 1]
//   let lastId = lastTodo.id
//   let newId = lastId + 1
//   return newId
// }

// let arr = [1, 2, 3, 4, 5, 6, 7]
// function firstEvenNumb(arr) {
//   for (let item of arr) {
//     if (item % 2 === 0) {
//       return item
//     }
//   }
// }
// console.log(firstEvenNumb(arr))
// let arr = [4, 3, 2, 1]

// function allNumberIsEven(arr) {
//   let allNumberIsEven = []
//   for (let item of arr) {
//     if (item % 2 === 0) {
//       allNumberIsEven.push((item += item))
//     }
//   }
//   return allNumberIsEven
// }
// console.log(allNumberIsEven(arr))
// let sum = 0
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// function SumOfAllNumbers(arr) {
//   for (let item of arr) {
//     SumOfAllNumbers()
//   }
//   return SumOfAllNumbers(sum)
// }
// console.log(SumOfAllNumbers(sum))

// let arr = [3, 2, 5, 6, 4, 9]
// let isEven = arr * 2

// function newEvenArray(arr) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }
// console.log(newEvenArray(arr))
// function sumSquareOfEvens(arr) {
//   let newArr = []
//   for (let item of arr) {
//     newArr.push(item * item)
//   }
//   return newArr
// }
// let onlyEvenNumbers = newEvenArray(arr)
// let doubleNumbers = sumSquareOfEvens(onlyEvenNumbers)
// console.log(`${doubleNumbers} ${doubleNumbers}`)

// function render() {
//   document.querySelector('ul').innerHTML = todos.map(
//     (todo, index) => `
//     <li ${todo.completed ? 'class= "done"' : ''}>
//     <button onclick="handleRemove(${index})">x</button>
//     <span onclick="handleToggle()`
//   )
// }

function fun1(oopsGlobal) {
  for (oopsGlobal = 0; oopsGlobal == 5; oopsGlobal++) {
    console.log(oopsGlobal)
  }
  return oopsGlobal
}
fun1(oopsGlobal)
