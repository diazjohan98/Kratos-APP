import img from '../../assets/img/img-Login.jpg'
import './styles/loginStyles.css'
import { useContext, useState } from 'react'
import { AuthContext } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '' || password === '') {
      toast.error("Error!! Al ingresar correo o contraseña", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
        transition: Zoom
      });
      setTimeout(() => {
        toast.dismiss();
      }, 3000); // Tiempo de espera de 3 segundos (3000 milisegundos)
    } else {
      login('johan');
      navigate('/');
    }
  };

  return (
    <div>

      <div className='container-login'>
        <img src={img} alt="Login" className='img-login' />
        <div className='container-form'>
          <div className='form-title-input'>
            <p className='titlePrimary'>Bienvenido</p>
            <p className='titleSecunday'>Por favor ingrese sus credenciales:</p>
            <form className='form' onSubmit={handleSubmit}>
              <label htmlFor="">Correo:</label>
              <br />
              <input
                type="text"
                id="login"
                className="fadeIn second inputLogin"
                name="user"
                placeholder="example@olsoftware.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}

              />
              <br />
              <label htmlFor="">Contraseña:</label>
              <br />
              <input
                type="password"
                id="password"
                className="fadeIn third inputLogin"
                name="password"
                placeholder="***********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}

              />
              <br />
              {/* {errorMessage && <p className='errorMessage'>{errorMessage}</p>} */}
              <ToastContainer />
              <button type='submit' className='btnIngresarLogin'>Ingresar</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
