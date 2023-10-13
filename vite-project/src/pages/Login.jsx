import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import googleLogo from "../assets/logoGoogle.jpg"
import lock from "../assets/lock-solid.png"
import user from "../assets/user-solid.png"
import userIcon from "../assets/userIcon.png"
import '../Style.css'


function Login() {
  //OCULTAR LA CONTRASEÑA
  const [ocultarPassword, setOcultarPassword] = useState(false);
  const [userNameOrEmail, setUserNameOrEmail] = useState(''); // Estado para el nombre de usuario o correo electrónico
  const [userPassword, setUserPassword] = useState(''); // Estado para la contraseña

  const functionOcultarContraseña = () => {
    setOcultarPassword((passwordVisible) => !passwordVisible)
  }

  const handleNameOrEmailChange = (e) => {
    setUserNameOrEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Utiliza los valores de estado para construir los datos a enviar en la solicitud fetch
    const userCredentials = {
      user_name: userNameOrEmail,
      user_email: userNameOrEmail,
      user_password: userPassword,
    };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials), // Envía los datos del formulario
      });

      if (response.ok) {

        console.log("exito");
      }
      // Resto del código de manejo de respuesta...
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  //SPAN DE LOGIN

  return (
    <>
      <Header />

      <main className="colorFondo">

        <form action="#" id="formLogin" onSubmit={handleSubmit}>

          <div className="bg-light p-4 rounded-5" >

            <div class="d-flex justify-content-center">
              <img src={userIcon} style={{ height: "6rem" }} />
            </div>

            <h1 className="text-center fs-3 fw-bold">Login</h1>

            <div className="input-group mt-3">
              <div className="input-group-text bg-primary"><img src={user} style={{ height: "1rem" }} /></div>
              <input className="form-control" type="text" placeholder="Nombre de usuario o correo" id="nombreEmail"
                name="nombreEmail" value={userNameOrEmail} // Enlazar el valor al estado
                onChange={handleNameOrEmailChange} // Manejador de cambio
              />
            </div>


            <div className="input-group mt-2">

              <div className="input-group">

                <div className="input-group-text bg-primary"><img src={lock} style={{ height: "1rem" }} /></div>

                <input className="form-control" type={ocultarPassword ? "text" : "password"}
                  placeholder="Contraseña" id="contraseña" name="contraseña" value={userPassword}
                  onChange={handlePasswordChange} />

                <button type="button" className="btn btn-outline-primary" onClick={functionOcultarContraseña}>
                  <i className={ocultarPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                </button>
              </div>

            </div>

            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex align-items-center">
                <input className="form-check-input" type="checkbox" />
                <span className="ms-2">Recuerdame</span>
              </div>
              <p className="mb-0 text-decoration-underline text-dark ms-2">¿Olvidó su contraseña?</p>
            </div>

            <div className="mt-3 text-center">
              <button type="submit" className="btn btn-primary text-center">Iniciar sesión</button>
            </div>

            <div className="mt-3 text-center">
              <div>¿No tienes una cuenta?</div>
              <a href="registro">Registrarse</a>
            </div>

            <div>
              <div className="border-bottom text-center">
                <span className="bg-light">o</span>
              </div>
            </div>

            <div className="btn d-flex align-items-center justify-content-center mt-2">
              <img src={googleLogo} alt="google-icon" width="30" height="20" />
              <div className="fw-semibold text-secondary shadow-sm">Continuar con Google</div>
            </div>


          </div>

        </form>


      </main >

      <Footer />
    </>
  )
}



export default Login


