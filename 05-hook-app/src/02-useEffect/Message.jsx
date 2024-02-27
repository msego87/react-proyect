import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0})

    // Cuando se cumple la condicion username === 'strider2', se crea el componente y se lanza el useEffect con la funcion window.addEventListener
    // Cuando no se cumple la condicion, se destruye el componente y se lanza el return. Por lo cual no nos mostrara mas la ubicacion del mouse.
    useEffect(() => {
      
        const onMouseMove = ( x, y ) =>{
            const coords = { x, y };
            console.log(coords);

            setCoords({ x, y })
        }

        window.addEventListener('mousemove', onMouseMove);
    
      return () => {
       window.removeEventListener('mousemove', onMouseMove);
      }
    }, [])
    

  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify(coords) }
    </>
  )
}
