const person=['sohanur','rahman','akib','makib'];
console.log(person.sort());

const num=[4,5,7,12,26,6];
// Not working prperly
console.log(num.sort())
// Ascending oreder
console.log(num.sort(function(a,b){ return a-b }))

// descending order

console.log(num.sort(function(a,b){ return b-a }))

 