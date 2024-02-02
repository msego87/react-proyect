// Funciones en JS
// function saludar(nombre){
//     return `Hola ${nombre}`;
// }

const saludar = function( nombre ) {
    return `Hola, ${nombre}`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

//console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

// en el return, los parentesis quieren decir que retorna un objeto
const getUser = () => 
    ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    });

const user = getUser();
console.log(user);

// Tarea
// 1. Transformar a una funcion de flecha  ++
// 2. Tiene que retornan un objeto implicito
// 3. Pruebas
/*
function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}
*/

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

console.log(getUsuarioActivo('Martin'));