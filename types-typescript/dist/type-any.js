"use strict";
// type Any --> For dynamic variables
// Explicit type
let idUser;
idUser = 1; // Number
idUser = '1'; // String
console.log('iduser : ', idUser);
console.log(typeof idUser); // --> type string
// Inferred type
let otherId;
otherId = '1';
otherId = 1;
// otherId = true;
console.log('otherId : ', otherId);
console.log(typeof otherId); // --> type number
let surprise = 'Hello typescript';
// suprise.sayHello(); // Error
const res = surprise.substring(6);
console.log(`res : ${res}`);
