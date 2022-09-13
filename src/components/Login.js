import axios from 'axios';
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router-dom';

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
        sessionStorage.setItem('token', token);
        navigate('/listado');
      });
  };

  let token = sessionStorage.getItem('token');

  //RETURN

  return (
    <>
      {token && <Navigate to='/listado' />}

      <div className='row'>
        <div className='col-6 offset-3'>
          <h2>Formulario de Login</h2>
          <form onSubmit={submitHandler}>
            <label className='form-label d-block mt-2'>
              <span>Correo electrónico:</span> <br />
              <input className='form-control' type='text' name='email' />
            </label>

            <label className='form-label d-block mt-2'>
              <span>Contraseña:</span>

              <input type='password' name='password' className='form-control' />
            </label>

            <button className='btn btn-success mt-2' type='submit'>
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
