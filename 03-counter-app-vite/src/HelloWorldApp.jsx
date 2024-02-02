/* export function App() {
    // document.createElement....
    return(<h1>Hola Martin!!</h1>);
} */

//cuando lo exporto por default, cuando lo importo lo puedo renombrar de cualquier forma
/* function App() {
    // document.createElement....
    return (<h1>Hola Martin!!</h1>);
}

export default App; */

export const HelloWorldApp = () => {
  return (
    <h1>HelloWorld App</h1>
  )
}
