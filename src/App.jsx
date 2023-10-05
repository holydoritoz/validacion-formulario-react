import Registro from './components/Registro.jsx'
import Alert from './components/Alert.jsx'
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = (type, message) => {
    if (type === "success") {
      setSuccessMessage(message);
    } else {
      setErrorMessage(message);
    }
  };

  return (
    <Container className='p-5'>
      <Registro
        successMessage={ successMessage }
        errorMessage={ errorMessage }
        handleRegister={ handleRegister }
      />
    <Alert successMessage={ successMessage } errorMessage={ errorMessage } />
    </Container>
  )
}

export default App
