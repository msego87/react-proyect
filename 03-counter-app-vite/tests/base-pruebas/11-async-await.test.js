import { getImagen } from "../../src/base-pruebas/11-async-await"


describe('Pruebas es 11-async-await.js', () => { 
    
    /* test('getImagen debe de retornar una URL de la imagen', async () => { 
        
        const url = await getImagen();

        expect( typeof url ).toBe('string');
     }) */

     // PARA ESTA PRUEBA SE ELIMINA LA API-KEY
     test('getImagen debe de retornar error si no tiene api key', async () => { 
        
        const resp = await getImagen();

        expect( resp ).toBe('No se encontro la imagen');
     })

 })