import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();

  //Funcs
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    //Validation

    const regexEmail =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (email === '' || password === '') {
      Swal.fire({
        title: 'Campos vacíos',
        text: 'Todos los campos deben estar completados para continuar',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
      return;
    }

    if (email !== '' && !regexEmail.test(email)) {
      Swal.fire({
        title: 'Correo inválido',
        text: 'Por favor ingrese una dirección de correo electrónico válida',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
      return;
    }

    if (email !== 'challenge@alkemy.org' || password !== 'react') {
      Swal.fire({
        title: 'Credenciales inválidas',
        text: 'Email o contraseña incorrectos',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }

    console.log('Ok estamos listos para enviar la información');

    //FETCH

    axios
      .post('http://challenge-react.alkemy.org', { email, password })
      .then((res) => {
        Swal.fire({
          title: 'Ingresado exitosamente',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
        const token = res.data.token;
        localStorage.setItem('token', token);
        navigate('/listado');
      });
  };

  //RETURN

  return (
    <>
      <h2>Formulario de Login</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Correo electrónico:</span> <br />
          <input type='text' name='email' />
        </label>
        <br />
        <label>
          <span>Contraseña:</span>
          <br />
          <input type='password' name='password' />
        </label>
        <br />
        <button type='submit'>Igresar</button>
      </form>
    </>
  );
}

export default Login;
