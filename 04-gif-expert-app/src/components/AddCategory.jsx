import { useState } from 'react'

export const AddCategory = ({agregarCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        
        agregarCategories( categories => [inputValue, ...categories])
        setInputValue('');
    }


  return (
      <form onSubmit={ onSubmit }>
          <input 
              type="text"
              placeholder='Buscar gif'
              value={ inputValue }
              onChange={ onInputChange }
          />
      </form>
  )
}
