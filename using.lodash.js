// // requestAnimationFrame('lodash')
// let _ = require('lodash')
// function toKebabCase = function(str){
//     return _.kebabCase(str)
// }

let _ = require( 'lodash')
console.log(toKebabCase('Hello world!'))

function toKebabCase(str) {
    return _.kebabCase(str)

}
// myminipony.speak()
console.log(`
${_.padStart('1',3,'*')}
${_.padStart('10',3,'*')}
${_.padStart('100',3,'*')}
`)