import PropTypes from 'prop-types'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'


function Formulario({ handleRegister }) {
  const [userName, setUserName] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordCheck, setuserPasswordCheck] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(userName.trim() === '' || userMail ==='' || userPassword ==="" || userPasswordCheck ===""){
      handleRegister('Campos vacios')
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor completa todos los campos.'
      });
      setError(true);
      return
    } else if(userPassword !== userPasswordCheck){
      handleRegister('Contraseñas invalidas')

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas ingresadas no son iguales',
      });
    } else
    handleRegister('Todo ok')
    Swal.fire({
      icon: 'success',
      title: 'Formulario enviado exitosamente',
      showConfirmButton: false,
      timer: 3000
    })
    setError(false);
    return
  };

  return (
    <>
    <Form
     className='p-2'
     onSubmit={handleSubmit}
     >
      { error? <p className="text-center text-danger">Debes completar todos los campos</p> : null }
    <Form.Group className="mb-3" controlId="formBasicInput">
        <Form.Control
        onChange={(e)=> setUserName(e.target.value)}
        type="text"
        placeholder="Nombre"
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
        onChange={(e)=> setUserMail(e.target.value)}
        type="email"
        placeholder="tuemail@ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
        onChange={(e)=> setUserPassword(e.target.value)}
        type="password"
        placeholder="Contraseña"
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordCheck">
        <Form.Control
        onChange={(e)=> setuserPasswordCheck(e.target.value)}
        type="password"
        placeholder="Confirma tu contraseña" />
      </Form.Group>
      <Button
        variant="success"
        type="submit"
        value="submit"
        >
        
        Carlos
      </Button> 
    </Form>
    </>
  )
}

Formulario.propTypes = {
  handleRegister: PropTypes.func.isRequired
};

export default Formulario