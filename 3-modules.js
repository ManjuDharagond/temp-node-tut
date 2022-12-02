
const names = require('./4-names')
console.log(names)
const sayHi = require('./5-util');
console.log(sayHi);
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)

const data = require('./6-alternative-flavor');
console.log(data);

require('./7-mind-grenades')