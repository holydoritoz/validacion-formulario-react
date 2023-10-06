import PropTypes from 'prop-types'
import Formulario from './Formulario.jsx'
import Container from 'react-bootstrap/Container';
import SocialButton from './SocialButton.jsx';
import Alert from './Alert.jsx';

function Registro({ successMessage, errorMessage, handleRegister }) {
  return (
    <Container className='w-50 rounded bg-light'>
    <SocialButton
      facebook="fa-brands fa-facebook text-secondary-emphasis "
      github="fa-brands fa-github text-secondary-emphasis"
      linkedin="fa-brands fa-linkedin text-secondary-emphasis"
    />
    <Formulario handleRegister={ handleRegister }/>
    <Alert successMessage={successMessage} errorMessage={errorMessage} />
    </Container>
  )
}

Registro.propTypes = {
  successMessage: PropTypes.string,
  errorMessage:PropTypes.string,
  handleRegister:PropTypes.string,
}


export default Registro