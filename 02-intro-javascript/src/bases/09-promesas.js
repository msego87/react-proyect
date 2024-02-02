import {getHeroeById, getHeroeByOwner} from "./bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( ()=>{
//         //Tarea
//         //Importar el 
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         //reject( 'No se pudo encontrar el heroe' );
//     }, 2000 )
// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe);
// })
// .catch( error => console.warn(error) );

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( ()=>{
            //Tarea
            //Importar el 
            const heroe = getHeroeById(id);
            if(heroe === undefined){
                reject('no se pudo encontrar el heroe');
            }
            resolve(heroe);
        }, 2000 )
    });
       
}

getHeroeByIdAsync(1)
.then( console.log )
.catch( console.warn );
// Tarea
