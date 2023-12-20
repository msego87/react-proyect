/* const newMessage = {
    message: 'Hola mundo',
    title: 'Martin'
};

const getApellido = () => "Segovia"; */
import PropTypes from 'prop-types';

export const FirstApp = ( {title, subtitle} ) => {
  
  return (
    <>
        <h1>{ title }</h1>
        {/* <h1>{ getApellido() }</h1> */}
        {/* <h1>{ JSON.stringify(newMessage) }</h1> */}
        <p>{ subtitle }</p>
    </>
  )
}

FirstApp.protoTypes = {
  title: PropTypes.string
}