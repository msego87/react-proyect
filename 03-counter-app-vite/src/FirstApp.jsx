/* const newMessage = {
    message: 'Hola mundo',
    title: 'Martin'
};

const getApellido = () => "Segovia"; */
import { PropTypes } from "prop-types";

export const FirstApp = ( {title, subtitle, name} ) => {
  
  return (
    <>
        <h1>{ title }</h1>
        {/* <h1>{ getApellido() }</h1> */}
        {/* <h1>{ JSON.stringify(newMessage) }</h1> */}
        <p>{ subtitle }</p>
        <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

FirstApp.defaultProps = {
  title: "No hay titulo",
  subtitle: "123",
  name: "Martin Segovia"
}