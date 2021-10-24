/*var foo = true;
if (foo) {
 var bar = foo * 2;
 console.log( bar );
}
for(var i=0; i<10; i++) {
 console.log( i );
}
console.log( bar );
console.log( i ); 

console.log(1)
setTimeout(() => {console.log("Callback function is fired now")},
1000);
console.log(2)
console.log(3)
console.log(4)
*/
function* rangeIterator(start = 0, end = 100, step = 2) {
 for (let i = start; i < end; i += step) {
 yield i;
 }
}
var sequence = rangeIterator();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);