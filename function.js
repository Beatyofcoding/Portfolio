// alert('...')
//
//
//
//
//

// function printHello(str){
//     let who = 'world'
//     console.log(str+" "+who)
// }


// printHello('Hello');






// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Does it work?",
//     function() { alert("Perfect."); },
//     function() { alert("Please report the problem."); }
//     );
    // function age(question,yes,no) {
    //     if (confirm("are you adult?")) yes()
    //     else no();
    // }
//     'use strict';

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "quest",
    () => alert("True conditon result."),
    () => alert("False condition result."))