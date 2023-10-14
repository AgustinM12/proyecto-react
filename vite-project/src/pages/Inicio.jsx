import { useState } from "react";
import { useEffect } from "react";
import Footer from "../components/Footer";
import "../Style.css";
import Header2 from "../components/Header2";


function Inicio() {

    const [data, setData] = useState([]);


    const fetchData = async () => {

        try {
            const response = await fetch('http://localhost:5000/findAll', {
                method: 'GET',
            });

            if (response.ok) {

                const jsonData = await response.json();
                setData(jsonData); // Almacena los datos en el estado
            }
            // Resto del código de manejo de respuesta...
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Header2 />

            <main className="container">

                <section>
                    <article className="px-5">
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <h6 className="border-bottom pb-2 mb-0">Nuevas Ofertas</h6>

                            <div className="d-flex text-muted pt-3">
                                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff"
                                        dy=".3em">32x32</text>
                                </svg>

                                <p className="pb-3 mb-0 small lh-sm border-bottom">
                                    <strong className="d-block text-gray-dark">@username</strong>
                                    Some representative placeholder content, with some information about this user. Imagine this
                                    being some sort of status update, perhaps?
                                </p>
                            </div>
                            <div className="d-flex text-muted pt-3">
                                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c"
                                        dy=".3em">32x32</text>
                                </svg>

                                <p className="pb-3 mb-0 small lh-sm border-bottom">
                                    <strong className="d-block text-gray-dark">@username</strong>
                                    Some more representative placeholder content, related to this other user. Another status
                                    update,
                                    perhaps.
                                </p>
                            </div>

                            <div className="d-flex text-muted pt-3">
                                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1"
                                        dy=".3em">32x32</text>
                                </svg>

                                <p className="pb-3 mb-0 small lh-sm border-bottom">
                                    <strong className="d-block text-gray-dark">@username</strong>
                                    This user also gets some representative placeholder content. Maybe they did something
                                    interesting, and you really want to highlight this in the recent updates.
                                </p>
                            </div>
                            <small className="d-block text-end mt-3">
                                <a href="novedades">Todas las novedades</a>
                            </small>
                        </div>
                    </article>

                    <article className="px-5">
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <h6 className="border-bottom pb-2 mb-0">Usuarios Sugeridos</h6>
                            {data.map((user, id_user) => (
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
                                            <span className="d-block">@{user.user_email}</span>
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