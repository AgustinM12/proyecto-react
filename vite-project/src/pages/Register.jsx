import Footer from "../components/Footer"
import Header2 from "../components/Header2"
import { Selects } from "../components/Selects";
import { useEffect, useState } from "react";

export const Register = () => {

  return (
    <>
      <Header2 />

      <Selects
        label={"Nacionalidad"}
        placeholder={"Paises"}
        position={"id_pais"}
        itemName={"nombre_pais"}
        url={'http://localhost:5000/findPaises'}

      />

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

                <div className="bg-white rounded p-3 row g-4 d-flex align-items-center text-center"
                  style={{ width: "40rem", border: "1px", solid: "#000" }}>

                  <h3 className="text-center fw-bold">DATOS PERSONALES</h3>

                  { /*ingrese su nombre*/}
                  <div className="d-flex">
                    <div className="col-md-6 px-1">
                      <label className="form-label">Ingrese su nombre</label>
                      <input id="nombre" type="text" className="form-control" placeholder="John"
                        value="John" required />
                      <span className="text-danger fw-bold" id="errorNombre"></span>
                    </div>
                    {/*ingrese su apellido */}
                    <div className="col-md-6 px-1">
                      <label className="form-label">Ingrese su apellido</label>
                      <input id="apellido" type="text" className="form-control" placeholder="Doe"
                        value="Doe" required />
                      <span className="text-danger fw-bold" id="errorApellido"></span>
                    </div>
                  </div>
                  {/*dni*/}
                  <div className="d-flex">
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

                  <div className="d-flex">
                    <div className="col-md-6 px-1">
                      <label className="form-label">Fecha de nacimiento</label>
                      <input id="fechaNacimiento" value="2001-12-30" type="date" className="form-control"
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

                  <div className="d-flex">
                    <div className="col-md-6 px-1">
                      <label className="form-label">Nacionalidad</label>
                      {/* <select id="pais" className="form-select" aria-label="Default select example"
                        required>
                        <option value="" selected disabled>Paises</option>
                        <option value="1">Argentina</option>
                        <option value="2">Bolivia</option>
                        <option value="3">Brasil</option>
                        <option value="4">Chile</option>
                        <option value="5">Colombia</option>
                        <option value="6">Ecuador</option>
                        <option value="7">Paraguay</option>
                        <option value="8">Peru</option>
                        <option value="9">Uruguay</option>
                        <option value="10">Venezuela</option>
                        <option value="11">Otro</option>
                      </select> */}
                    </div>

                    <div className="col-md-6 px-1" id="selectorProvincia"></div>
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

                  <div className="col-md-12">
                    <label className="form-label">Seleccione su departamento</label>
                    <select id="id_depar" className="form-select" aria-label="Default select example"
                      required>
                      <option id="select" value="" selected disabled>Departamentos</option>
                      <option value="1">Formosa</option>
                      <option value="2">Pilcomayo</option>
                      <option value="3">Pilagás</option>
                      <option value="4">Laishí</option>
                      <option value="5">Pirané</option>
                      <option value="6">Patiño</option>
                      <option value="7">Bermejo</option>
                      <option value="8">Ramon Lista</option>
                      <option value="9">Matacos</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label className="form-label">Seleccione su localidad</label>
                    <select id="id_local" className="form-select" aria-label="Default select example"
                      required>
                      <option id="select" value="" selected disabled>Localidades</option>
                      <option value="1">Formosa</option>
                      <option value="2">Colonia Pastoril</option>
                      <option value="3">Gran Guardia</option>
                      <option value="4">San Hilario</option>
                      <option value="5">Mariano Boedo</option>
                      <option value="6">Villa del Carmen</option>
                      <option value="7">Clorinda</option>
                      <option value="8">Laguna Naick Neck</option>
                      <option value="9">Riacho He He</option>
                      <option value="10">Monte Lindo</option>
                      <option value="11">S.F Laishí</option>
                      <option value="12">Gral. Mansilla</option>
                      <option value="13">Herradura</option>
                      <option value="14">Yatai</option>
                      <option value="15">Misión Tacaagle</option>
                      <option value="16">Laguna Gallo</option>
                      <option value="17">Tres Lagunas</option>
                      <option value="18">El Espinillo</option>
                      <option value="19">Pirané</option>
                      <option value="20">El Colorado</option>
                      <option value="21">Villa Dos Trece</option>
                      <option value="22">Mayor Villafañe</option>
                      <option value="23">Palo Santo</option>
                      <option value="24">Las Lomitas</option>
                      <option value="25">Comandante Fontana</option>
                      <option value="26">Villa Gral Guemes</option>
                      <option value="27">Estanislao del Campo</option>
                      <option value="28">Pozo del Tigre</option>
                      <option value="29">Gral. Belgrano</option>
                      <option value="30">San Martin I</option>
                      <option value="31">San Martin II</option>
                      <option value="32">Fortin Lugones</option>
                      <option value="33">Subt. Perin</option>
                      <option value="34">Posta Cambio Zalazar</option>
                      <option value="35">Colonia Sarmiento</option>
                      <option value="36">Juan G. Bazan</option>
                      <option value="37">Bartolomé De Las Casas</option>
                      <option value="38">El Recreo</option>
                      <option value="39">Fortin Sargento Leyes</option>
                      <option value="40">Fortin Soledad</option>
                      <option value="41">Guadalcazar</option>
                      <option value="42">Lamadrid</option>
                      <option value="43">La Rinconada</option>
                      <option value="44">Los Chiriguanos</option>
                      <option value="45">Pozo de Maza</option>
                      <option value="46">Pozo del Mortero</option>
                      <option value="47">Vaca Perdida</option>
                      <option value="48">Gral. Mosconi</option>
                      <option value="49">El Potrillo</option>
                      <option value="50">Ing. Juarez</option>
                    </select>
                  </div>

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
