import dayjs from "dayjs";
import { useEffect, useState } from "react";

export const Posteos = () => {

    const fetchPosts = async () => {

        try {
            const response = await fetch('http://localhost:5000/findAllPosts', {
                method: 'GET',
            });

            if (response.ok) {

                const jsonData = await response.json();
                setPosts(jsonData); // Almacena los datos en el estado
            }

        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [])

    const [posts, setPosts] = useState([]);

    return (
        <>
            {posts.map((post, id_post) => (

                <div key={id_post} className="d-flex text-muted pt-3">
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
                        <span>Fecha: {dayjs(post.updatedAt).format('DD/MM/YYYY hh:mm')}</span>

                    </p>
                </div>
            ))
            }
        </>
    )
}


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
                <span>Fecha: {dayjs(post.updatedAt).format('DD/MM/YYYY hh:mm')}</span>

            </p>
        </div>
    ))
        :

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
                    <span>Fecha: {dayjs(post.updatedAt).format('DD/MM/YYYY hh:mm')}</span>
                </p>
            </div>
        )) : <div></div>
}