"use strict";
// type Any --> For dynamic variables
// Explicit type
var idUser;
idUser = 1; // Number
idUser = '1'; // String
console.log('iduser : ', idUser);
console.log(typeof idUser); // --> type string
// Inferred type
var otherId;
otherId = '1';
otherId = 1;
// otherId = true;
console.log('otherId : ', otherId);
console.log(typeof otherId); // --> type number
var surprise = 'Hello typescript';
// suprise.sayHello(); // Error
var res = surprise.substring(6);
console.log("res : " + res);
