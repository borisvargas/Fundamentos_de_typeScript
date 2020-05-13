"use strict";
// archivo principal
console.log('Hola Platzi world!');
// Number
let phone; // Tipo Explicito
// phone = '+367128815'; --> Error de tipo
phone = 924234669;
// Number
let phoneMovil = 637128815; // Tipo Inferido
// let phoneMovil = true; --> Error esta definido antes
let hex = 0xf00d;
let binary = 0b101;
let octal = 0o744;
// Type: Boolean
let isPro;
isPro = true;
// isPro = 1; --> Error
// String
let username = 'anbreaker';
username = 'Javier';
// username = true; --> Error
// Template String with use of back-tick ``
let userInfo;
userInfo = `
    User info:
    username: ${username}
    firtsname: ${username + ' anbreaker'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);
