// se usan {} si es un objeto, para importar una funcion no hay que ponerlas.
//import { heroes } from './data/heroes';
import heroes, { owners } from '../data/heroes';
//import { heroes } from './data/heroes';


// console.log(owners);
export const getHeroeById = (id) => heroes.find( heroe => heroe.id === id);

// console.log(getHeroeById(2));

//Find solo sirve para traer 1, usar el Filter para varios
export const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

// console.log(getHeroeByOwner('DC'));

