import { useState } from "react";
import Registro from './components/Registro.jsx'
import Container from 'react-bootstrap/Container';
import Alert from "./components/Alert.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegister = (type, message) => {
    if (type === "success") {
      setSuccessMessage(message);
      setErrorMessage("");
    } else {
      setErrorMessage(message);
      setSuccessMessage(""); 
    }
  };

  return (
    <Container className='p-5'>
      <Registro
        successMessage={successMessage}
        errorMessage={errorMessage}
        handleRegister={handleRegister}
      />

     <Alert successMessage={successMessage} errorMessage={errorMessage}
      />

    </Container>
  )
}

export default App
