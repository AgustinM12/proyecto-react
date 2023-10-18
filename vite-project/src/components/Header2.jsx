import logo from "../assets/logo.png";
import { useState } from "react";

function Header2() {

    const [selectedRubro, setSelectedRubro] = useState(0);

    const handleSelectChange = async (event) => {
        const selectedValue = event.target.value;
        setSelectedRubro(selectedValue);

        try {
            const response = await fetch('/findPostbyRubro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id_rubro: selectedValue }),
            });

            if (response.ok) {
                const data = await response.json();
                // Maneja la respuesta si es necesario
                console.log(data);
            } else {
                console.error('Error al realizar la solicitud POST');
            }
        } catch (error) {
            console.error('Error al realizar la solicitud POST', error);
        }
    };



    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light colorPrincipal">
                <div className="container-fluid">
                    <img src={logo} alt="logo" width="30" height="30" />
                    <a className="navbar-brand text-light" href="#">Job <span className="unite">Unite</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-light" aria-current="page" href="#">Mensajes</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Notificaciones
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="solicitudes">Solicitudes</a></li>
                                    <li><a className="dropdown-item" href="novedades">Novedades</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Seguridad</a></li>
                                </ul>
                            </li>
                        </ul>
                        <li className="nav-item dropdown d-flex px-5">
                            {/* <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Filtros
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li className="dropdown-item">Rubro</li>
                                <li className="dropdown-item">Localidad</li>
                                <li className="dropdown-item">Edad</li>
                            </ul> */}

                            <select id="selectorRubros" onChange={handleSelectChange}
                                value={selectedRubro} className="form-select" aria-label="Default select example" required>

                                <option value="" >Filtro Rubros</option>
                                <option value="1">Salud</option>
                                <option value="2">Tecnologia/Informatica</option>
                                <option value="3">Educación</option>
                                <option value="4">Finanzas</option>
                                <option value="5">Manufactura</option>
                                <option value="6">Ventas</option>
                                <option value="7">Administración</option>
                                <option value="8">Alimenticio</option>
                                <option value="9">Construcción</option>
                                <option value="10">Docente</option>
                                <option value="11">Otros</option>
                            </select>
                        </li>

                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="¿Que deseas buscar?"
                                aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Buscar</button>
                        </form>

                        <div className="dropdown p-4">
                            <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle"
                                id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="../img/icon.png" alt="pfp" width=" 32" height="32"
                                    className="rounded-circle me-2" />
                                <strong className="text-light" id="UsuarioNombre">Usuario</strong>
                            </a>

                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow"
                                aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item" href="perfil">Perfil</a></li>
                                <li><a className="dropdown-item" href="#">Ajustes</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><button className="dropdown-item" id="cerrarSesion" type="submit" href="index">Cerrar sesion</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header2