import Footer from "../components/Footer"
import Header2 from "../components/Header2"
import { Selects } from "../components/Selects";
import { useForm } from "../hooks/useForms";

export const Register = () => {

  const data = useForm({
    id_pais: ""
  })

  return (
    <>
      <Header2 />

      <main className="p-4 d-flex justify-content-center align-items-center colorFondo">

        <form action="#" id="formRegistro">

          <div id="carouselExampleDark" className="carousel carousel-dark slide">

            <div className="carousel-inner rounded-5 py-3">

              <div className="carousel-item active" id="pagina1">

                <div className="bg-light rounded p-3 row g-4 d-flex align-items-center text-center"
                  style={{ width: "40rem", border: "1px", solid: "#000" }}>

                  {/*PAGINA 1*/}

                  <h3 className="text-center fw-bold">Datos de Usuario</h3>

                  <div className="col-md-12">
                    <label className="form-label">Nombre de usuario</label>
                    <input type="text" className="form-control" placeholder="nombre de usuario"
                      id="user_name" name="user_name" value="Agustinm12" required />
                    <span className="text-danger fw-bold" id="errorUserName"></span>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Ingrese su email</label>
                    <input type="email" className="form-control" placeholder="name@example.com"
                      id="user_email" name="user_email" value="wagu520@live.com" required />
                    <span className="text-danger fw-bold py-3" id="errorEmail"></span>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text">Repetir email</label>
                    <div className="input-group">
                      <input type="email" className="form-control" id="validarEmail" name="validarEmail"
                        placeholder="name@example.com" value="wagu520@live.com" required />
                    </div>
                    <span className="text-danger fw-bold" id="errorEmail2"></span>
                  </div>

                  <div className="d-flex">
                    <div className="col-md-6 px-1">
                      <div className="col-md-5">
                        <label for="exampleFormControlPassword6"
                          className="form-label text-center">Contraseña</label>
                      </div>
                      <div className="input-group">
                        <input type="password" className="form-control" id="user_password"
                          name="user_password" placeholder="**********" value="123456789aA"
                          required />

                        <button type="button" className="btn btn-outline-primary"
                          onclick="ocultarContraseña('user_password', this)"><i
                            className="bi bi-eye"></i></button>
                      </div>
                      <span className="text-danger fw-bold" id="errorPass"></span>
                    </div>

                    <div className="col-md-6 px-1">
                      <label className="form-label">Repetir contraseña</label>

                      <div className="input-group">
                        <input type="password" className="form-control" id="validarPass"
                          name="validarPass" value="123456789aA" placeholder="**********"
                          required />

                        <button type="button" className="btn btn-outline-primary"
                          onclick="ocultarContraseña('validarPass', this)"><i
                            className="bi bi-eye"></i></button>
                      </div>
                      <span className="text-danger fw-bold" id="errorPass2"></span>
                    </div>
                  </div>

                  <div className="text-center py-5">

                    <a href="index" className="btn btn-danger"><i className="fas fa-times"></i> Cancelar</a>

                    <button className="btn btn-primary botonAdelante" data-bs-target="#carouselExampleDark"
                      data-bs-slide="next">
                      Siguiente <i className="fas fa-chevron-right"></i>
                    </button>

                  </div>

                </div>
              </div>

              { /*PAGINA 2 INFO PERSONAL*/}

              <div className="carousel-item" id="pagina2">

                <div className="bg-white rounded p-3 row g-4 d-flex align-items-center justify-content-center text-center"
                  style={{ width: "40rem", border: "1px", solid: "#000" }}>

                  <h3 className="text-center fw-bold">DATOS PERSONALES</h3>

                  { /*ingrese su nombre*/}
                  <div className="d-flex justify-content-center">
                    <div className="col-md-6 px-1">
                      <label className="form-label">Ingrese su nombre</label>
                      <input id="nombre" type="text" className="form-control" placeholder="John"
                        value="John" required />
                      <span className="text-danger fw-bold" id="errorNombre"></span>
                    </div>
                    {/*ingrese su apellido */}
                    <div className="col-md-6 px-1 ">
                      <label className="form-label">Ingrese su apellido</label>
                      <input id="apellido" type="text" className="form-control" placeholder="Doe"
                        value="Doe" required />
                      <span className="text-danger fw-bold" id="errorApellido"></span>
                    </div>
                  </div>
                  {/*dni*/}
                  <div className="d-flex justify-content-center">
                    <div className="col-md-6 px-1">
                      <label className="form-label">Ingrese su DNI</label>
                      <input type="text" className="form-control" id="dni" placeholder="00-000-000"
                        value="44876123" required />
                      <span className="text-danger fw-bold" id="errorDni"></span>
                    </div>
                    {/*cuil*/}
                    <div className="col-md-6 px-1">
                      <label className="form-label">Ingrese su CUIL</label>
                      <input id="cuil" type="text" className="form-control" placeholder="00-00-000-000-0"
                        value="20448761232" required />
                      <span className="text-danger fw-bold" id="errorCuil"></span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <div className="col-md-6 px-1">
                      <label className="form-label">Fecha de nacimiento</label>
                      <input id="fechaNacimiento" type="date" className="form-control"
                        required />
                    </div>

                    <div className="col-md-6 px-1">
                      <label className="form-label">Genero</label>
                      <select id="genero" type="text" className="form-control" aria-label="Default select example" required>
                        <option value="" selected disabled>Sexo</option>
                        <option value="1">Masculino</option>
                        <option value="2">Femenino</option>
                        <option value="3">Sin especificar</option>
                      </select>

                    </div>
                  </div>

                  <div className="d-flex justify-content-center">



                    <Selects
                      label={"Nacionalidad"}
                      placeholder={"Paises"}
                      position={"id_pais"}
                      itemName={"nombre_pais"}
                      url={'http://localhost:5000/findPaises'}
                      name={"id_pais"}
                    />

                    {data.form.id_pais.value == "1" && (

                      <Selects
                        label={"Provincia."}
                        placeholder={"Provincias."}
                        position={"id_proincia"}
                        itemName={"nombre_provincia"}
                        url={'http://localhost:5000/findProvinces'}
                        name={"id_provincia"}
                      />
                    )}

                  </div>



                  <div id="otroPais"></div>


                  <div className="text-center">
                    <button className="btn btn-secondary botonAtras" data-bs-target="#carouselExampleDark"
                      data-bs-slide="prev"><i className="fas fa-chevron-left"></i> Anterior</button>

                    <button className="btn btn-primary botonAdelante" data-bs-target="#carouselExampleDark"
                      data-bs-slide="next">Siguiente <i className="fas fa-chevron-right"></i></button>
                  </div>

                </div>

              </div>
              {/* PAGINA 3 CONTACTO Y ROL */}

              <div className="carousel-item" id="pagina3">



                <div className="bg-white rounded row g-4 p-3 d-flex align-items-center text-center"
                  style={{ width: "40rem", border: "1px", solid: "#000" }}>

                  <h3 className="text-center fw-bold">INFORMACIÓN DE CONTACTO Y ROL</h3>

                  <div className="col-md-12">
                    <label className="form-label">Domicilio</label>
                    <input id="domicilio" type="text" className="form-control"
                      placeholder="Mz24 Cs45, Barrio XYZ" value="barrio villa del carmen" required />
                    <span className="text-danger fw-bold" id="errorDomicilio"></span>
                  </div>

                  <div className="col-md-12">
                    <label className="form-label">Numero de telefono</label>
                    <div className="input-group">
                      <span className="input-group-text" id="prefijoTel">+</span>
                      <input type="text" className="form-control" id="numTelefono" value="3704563459"
                        required />
                    </div>
                    <span className="text-danger fw-bold" id="errorTelefono"></span>
                  </div>

                  <Selects
                    label={"Departamento en el que se encuentre."}
                    placeholder={"Departamentos."}
                    position={"id_depar"}
                    itemName={"nombre_depar"}
                    url={'http://localhost:5000/findDepar'}
                  />

                  <Selects
                    label={"Localidad en el que se encuentre."}
                    placeholder={"Localidades."}
                    position={"id_local"}
                    itemName={"nombre_local"}
                    url={'http://localhost:5000/findLocal'}
                  />

                  <div className="col-md-12">
                    <label className="form-label">Seleccione su rol</label>
                    <select id="opcionRol" className="form-select" aria-label="Default select example"
                      required>
                      <option id="select" value="" selected disabled>Roles</option>
                      <option value="1">Postulante</option>
                      <option value="2">Empleador</option>
                      <option value="3">Particular</option>
                    </select>
                  </div>

                  <div id="postulante"></div>
                  <div id="empleador"></div>

                  <div className="text-center">
                    <button className="btn btn-secondary botonAtras" id="botonAtras"
                      data-bs-target="#carouselExampleDark" data-bs-slide="prev"><i
                        className="fas fa-chevron-left"></i> Anterior</button>
                    <button className="btn btn-primary" id="btnRegistrarse" type="submit">Registrarse <i
                      className="fas fa-file-alt"></i></button>
                  </div>

                </div>

              </div>


            </div>


            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: "0%" }} aria-valuenow="0"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>

          </div>

        </form>
      </main >

      <Footer />

    </>
  )
}
