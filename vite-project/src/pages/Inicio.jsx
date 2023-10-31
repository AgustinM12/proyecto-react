import { useState } from "react";
import { useEffect } from "react";
import Footer from "../components/Footer";
import "../Style.css";
import Header2 from "../components/Header2";
import dayjs from "dayjs";
import { Users } from "../components/Users";
import { Posteos } from "../components/Posteos";

function Inicio() {


    const [posts, setPosts] = useState([]);

    const [filteredPosts, setFilteredPosts] = useState([]);

    const [selectedRubro, setSelectedRubro] = useState(0);

    const handleSelectChange = (event) => {
        setSelectedRubro(event.target.value);
        console.log(`Selected rubro: ${selectedRubro}`);

        const filterPost = posts.filter(
            post => post.id_rubro === parseInt(event.target.value)
        );
        setFilteredPosts(filterPost)
    };




    const fetchPosts = async () => {

        try {
            const response = await fetch('http://localhost:5000/findAllPosts', {
                method: 'GET',
            });

            if (response.ok) {

                const jsonData = await response.json();
                setPosts(jsonData); // Almacena los datos en el estado
            }
            // Resto del código de manejo de respuesta...
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };



    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <>
            <Header2 />

            <main className="container">

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

                        <option value="0" >Filtro Rubros</option>
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

                <article className="d-flex space-between">
                    <section className="px-5">
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <h6 className="border-bottom pb-2 mb-0">Nuevas Ofertas</h6>

                            <Posteos/>

                            <small className="d-block text-end mt-3">
                                <a href="novedades">Todas las novedades</a>
                            </small>
                        </div>
                    </section>

                    <section className="px-3">
                        <div class="container my-3 p-3 bg-body rounded shadow-sm">
                            <h6 class="border-bottom pb-2 mb-0">Usuarios Sugeridos</h6>

                            <Users />

                            <small class="d-block text-end mt-3">
                                <a href="solicitudes">Ver todas las solicitudes</a>
                            </small>
                        </div>

                    </section>
                </article>

            </main>



            <Footer />
        </>
    )
}

export default Inicio