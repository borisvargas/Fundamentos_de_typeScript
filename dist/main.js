"use strict";
// archivo principal
console.log('Hola Platzi world!');
// Number
var phone; // Tipo Explicito
// phone = '+367128815'; --> Error de tipo
phone = 924234669;
// Number
var phoneMovil = 637128815; // Tipo Inferido
// let phoneMovil = true; --> Error esta definido antes
var hex = 0xf00d;
var binary = 5;
var octal = 484;
// Type: Boolean
var isPro;
isPro = true;
// isPro = 1; --> Error
// String
var username = 'anbreaker';
username = 'Javier';
// username = true; --> Error
// Template String with use of back-tick ``
var userInfo;
userInfo = "\n    User info:\n    username: " + username + "\n    firtsname: " + (username + ' anbreaker') + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n";
console.log('userInfo', userInfo);
