import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Prueba en 05-funciones', () => { 
    
    test('getUser debe de retornar un objeto', () => { 
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        expect( testUser ).toEqual( user );

     })

     test('getUsuarioActivo debe de retornar un objeto', () => { 
        const name = 'Martin';

        const user = getUsuarioActivo(name);

        // Esta es una forma

        // const testUser = {
        //     uid: 'ABC567',
        //     username: 'Martin'
        // }

        // expect(user.username).toBe(name);
        // expect(user).toEqual(testUser);

        // Asi lo hace en el curso
        expect( user ).toStrictEqual(
            {
                uid: 'ABC567',
                username: 'Martin'
            }
        )


      })

 })