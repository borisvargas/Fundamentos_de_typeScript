"use strict";
// ------- Tipo: Array -------
// Explicito
var users;
users = ['luixaviles', 'paparazzi', 'lensqueen'];
// users = [1, true, 'test']; // --> Error
// Inferido
var otherUsers = ['luixaviles', 'paparazzi', 'lensqueen'];
// otherUsers = [1, true, 'test']; // --> Error
// Array<tipoDato>
var pictureTitles;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];
// Accediendo a los valores en un Array
console.log('first user : ', users[0]); // --> users[indice]: luixaviles
console.log('first title : ', pictureTitles[0]);
// Propiedades en Array
console.log('users.length : ', users.length); // -> Tamaño del Array
// Uso de funciones en Arrays
users.push('aPlatziUser'); // -> agrega dato a la cola del Array
users.sort(); // --> ordena el Array de menor a mayor (alfabetica)
console.log('users', users);
