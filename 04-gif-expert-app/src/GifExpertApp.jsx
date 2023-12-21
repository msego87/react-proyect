import { useState } from "react"
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
  
  const onAddCategory = () => {
    //Valorant
    setCategories(['Valorant', ...categories]);
  }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        {/* envio la funcion para agregarCategorias "setCategories" */}
        <AddCategory agregarCategories={setCategories} />

        {/* Listado de gifs */}
          
          <ol>
            {categories.map( category => {
              return <li key={ category }>{category}</li>
            } )}
            
          </ol>
            {/* Gif Item */}
    </>
  )
}
