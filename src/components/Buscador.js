import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Buscador() {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const keyword = e.currentTarget.keyword.value.trim();

    if (keyword.length === 0) {
      Swal.fire({
        title: 'Por favor escriba una palabra clave',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    } else if (keyword.length < 4) {
      Swal.fire({
        title: 'Tienes que escribir más de 4 caracteres',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    } else {
      e.currentTarget.keyword.value = '';
      navigate(`/resultados?keyword=${keyword}`);
    }
  };

  return (
    <form className='d-flex align-items-center' onSubmit={submitHandler}>
      <label className='form-label mb-0 mx-2'>
        <input
          className='form-control'
          type='text'
          name='keyword'
          placeholder='Buscar...'
        />
      </label>
      <button className='btn btn-success ml-2' type='submit'>
        Buscar
      </button>
    </form>
  );
}

export default Buscador;
