import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas es 08-imp-exp', () => { 
    
      test('getHeroesById debe de retornar un heroe por ID', () => { 
        
        const id = 1;
        const heroe = getHeroeById(id);

        expect( heroe ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
       });

       test('getHeroesById debe de retornar undefined si no existe el ID', () => { 
        
        const id = 100;
        const heroe = getHeroeById(id);

        expect( heroe ).toBeFalsy();
       });


       // TAREA:
       //   getHeroesByOwner(owner)
       //   1.- Debe retornar un arreglo con los heroes de DC Length === 3, toEqual al arreglo filtrado.
       //   2.- Debe retornar un arreglo con los heroes de Marvel Length === 2.
      
       test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => { 

            const owner = 'DC';
            const heroes = getHeroesByOwner( owner );

            expect( heroes.length ).toBe( 3 );
            expect( heroes ).toStrictEqual(
                    [
                        { id: 1, name: 'Batman', owner: 'DC' },
                        { id: 3, name: 'Superman', owner: 'DC' },
                        { id: 4, name: 'Flash', owner: 'DC' }
                      ]
              );
                // Esta es la mejor forma de hacerlo
            expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );
        })

        test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => { 
            const owner = 'Marvel';
            const heroes = getHeroesByOwner( owner );

            expect( heroes.length ).toEqual( 2 );
         })

 })