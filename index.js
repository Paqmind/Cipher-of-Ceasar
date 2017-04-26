let CeasarCipher = require('./ceasar-cipher').CeasarCipher;

let test1 = CeasarCipher.encrypt('Hello, world', 100); // DAHHK, SKNHZ
let test2 = CeasarCipher.decrypt('DAHHK, SKNHZ', 100); // HELLO, WORLD

let test3 = CeasarCipher.encrypt('ABC', 3); // DEF
let test4 = CeasarCipher.decrypt('DEF', 3); // ABC

let test5 = CeasarCipher.encrypt('Andrew', 30); // ERHVIA
let test6 = CeasarCipher.decrypt('ERHVIA', 30); // ANDREW


console.log(test1, test2, test3, test4, test5, test6);
