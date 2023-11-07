import Header2 from "../components/Header2"
import Footer from "../components/Footer"

export const Post = () => {
  return (
    <>
      <Header2 />
      <form action="#" id="formPost">
        <div className="d-flex justify-content-center align-items-center">
          <div className="bg-light p-3 rounded-5" style="border: 1px solid #000;">
            {/* Contenido del contenedor */}
            <div className="d-flex justify-content-center">
              <img src="../../img/jun.png" alt="login-icon" style="height: 5rem" />
            </div>
            <div className="text-center fs-3 fw-bold">Crear un nuevo post</div>

            <div className="input-group mt-1">
              <h3>Titulo:</h3>
              <div className="input-group">
                <input className="form-control" type="text" placeholder="Titulo del post" id="post_title" name="post_title"
                  required />
              </div>
            </div>

            <div className="input-group mt-1">
              <h3>Contenido:</h3>
              <div className="input-group">
                <input className="form-control" type="text" placeholder="Contenido del post" id="post_content"
                  name="post_content" required />
              </div>
            </div>

            <div className="pt-3 text-center">
              <button type="submit" className="btn btn-primary text-center">Subir</button>
            </div>

          </div>
        </div>
      </form>
      <Footer />
    </>
  )
}
