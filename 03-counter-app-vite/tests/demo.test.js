
describe('Pruebas en <DemoComponent />', () => { 
    
    test('Esta prueba no debe de fallar', () => {
        // AAA
        //1. Inicializacion (ARRANGE - ARREGLAR)
        const message1 = 'Hola Mundo';
    
        //2. Estimulo (ACT - ACTUAR)
        const message2 = message1.trim();
    
        //3. Observar el comportamiento (ASSERT - AFIRMAR)
        expect( message1 ).toBe( message2 );
    })

 })
