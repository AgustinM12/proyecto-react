import { useState } from "react";
import { useEffect } from "react";
import Footer from "../components/Footer";
import "../Style.css";
import Header2 from "../components/Header2";


function Inicio() {

    const [users, setUsers] = useState([]);

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

    /* const filteredPosts = posts.filter(
        post => post.id_rubro === parseInt(e.target.value)
    ); */

    const fetchUsers = async () => {

        try {
            const response = await fetch('http://localhost:5000/findAll', {
                method: 'GET',
            });

            if (response.ok) {

                const jsonData = await response.json();
                setUsers(jsonData); // Almacena los datos en el estado
            }
            // Resto del código de manejo de respuesta...
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
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
        fetchUsers();
    }, []);

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

                <section>
                    <article className="px-5">
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <h6 className="border-bottom pb-2 mb-0">Nuevas Ofertas</h6>

                            {
                                selectedRubro == 0 ? posts.map((post, id_post) => (
                                    <div className="d-flex text-muted pt-3">
                                        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                            preserveAspectRatio="xMidYMid slice" focusable="false">
                                            <title>Placeholder</title>
                                            <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff"
                                                dy=".3em">32x32</text>
                                        </svg>
                                        <p className="pb-3 mb-0 small lh-sm border-bottom">
                                            <strong className="d-block text-gray-dark">{post.user.user_name}</strong>
                                            <strong className="d-block text-gray-dark">{post.user.user_email}</strong>
                                            <strong className="d-block text-gray-dark">{post.post_title}</strong>
                                            {post.post_content}
                                            <br />
                                            <span>Rubro: {post.rubro.desc_rubro}</span><br />
                                            <span>Fecha: {post.updatedAt}</span>

                                        </p>
                                    </div>
                                )) :



                                    filteredPosts.length > 0 ? filteredPosts.map((post, id_post) => (
                                        <div className="d-flex text-muted pt-3">
                                            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                                preserveAspectRatio="xMidYMid slice" focusable="false">
                                                <title>Placeholder</title>
                                                <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff"
                                                    dy=".3em">32x32</text>
                                            </svg>
                                            <p className="pb-3 mb-0 small lh-sm border-bottom">
                                                <strong className="d-block text-gray-dark">{post.user.user_name}</strong>
                                                <strong className="d-block text-gray-dark">{post.user.user_email}</strong>
                                                <strong className="d-block text-gray-dark">{post.post_title}</strong>
                                                {post.post_content}
                                                <br />
                                                <span>Rubro: {post.rubro.desc_rubro}</span><br />
                                                <span>Fecha: {post.updatedAt}</span>

                                            </p>
                                        </div>
                                    )) : <div></div>
                            }


                            <small className="d-block text-end mt-3">
                                <a href="novedades">Todas las novedades</a>
                            </small>
                        </div>
                    </article>

                    <article className="px-5">
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <h6 className="border-bottom pb-2 mb-0">Usuarios Sugeridos</h6>
                            {users
                                .filter(user => user.rol.rol_name != "particular")
                                .map((user, id_user) => (
                                    <div className="d-flex text-muted pt-3">
                                        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                            xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                            preserveAspectRatio="xMidYMid slice" focusable="false">
                                            <title>Placeholder</title>
                                            <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff"
                                                dy=".3em">32x32</text>
                                        </svg>

                                        <div className="pb-3 mb-0 small lh-sm border-bottom w-100">


                                            <div key={id_user} className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                                <div className="d-flex justify-content-between">
                                                    <strong className="text-gray-dark">{user.user_name}</strong>
                                                    <a href="#">Follow</a>
                                                </div>
                                                <span className="d-block">{user.user_email}</span>
                                                <strong className="text-gray-dark">{user.rol.rol_name}</strong>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            <small className="d-block text-end mt-3">
                                <a href="solicitudes">Ver todas las solicitudes</a>
                            </small>
                        </div>
                    </article>
                </section>

            </main>



            <Footer />
        </>
    )
}

export default Inicio