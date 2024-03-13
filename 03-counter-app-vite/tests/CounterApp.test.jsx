import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en <CounterApp />', () => { 
    
    const initialValue = 10;

    test('debe de hacer match con el snapshot', () => { 
        
        const { container } = render( < CounterApp value={initialValue} />);

        expect( container ).toMatchSnapshot();

     });

     test('debe de mostrar el valor inicial de 10', () => { 
        
        render(<CounterApp value={initialValue} />);
        // screen es el componente renderizado con 'render'
        expect( screen.getByRole('heading', { level: 2}).innerHTML).toContain('10');
        //expect( screen.getByText(100) ).toBeTruthy();
      });

      test('debe de incrementar con el boton +1', () => { 
        
        render(<CounterApp value={initialValue} />);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByText('12') ).toBeTruthy();
        
       });

       test('debe de decrementar con el boton -1', () => { 
        
        render(<CounterApp value={initialValue} />);
        fireEvent.click( screen.getByText('-1') );

        //screen.debug();

        expect( screen.getByText('9') ).toBeTruthy();

        });

        test('debe de funcionar el boton de reset', () => { 
            
         render(<CounterApp value={initialValue} />);
         fireEvent.click( screen.getByText('+1') );
         fireEvent.click( screen.getByText('+1') );
         fireEvent.click( screen.getByText('+1') );
         //fireEvent.click( screen.getByText('Reset') );  este es otra forma mas generica de hacer
         fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));

         expect( screen.getByText( 10 ) ).toBeTruthy();
         })


 })