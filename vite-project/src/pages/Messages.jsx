import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import Header2 from "../components/Header2"
import Footer from "../components/Footer"

const socket = io("http://localhost:4000")

function Messages() {

    const [messages, setMessages] = useState([])

    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        socket.emit("message", text)
        setText("")
    }

    useEffect(() => {
        socket.on("message", (data) => {
            if (data === "") return
            setMessages(prev => [...prev, data])
        })

        return () => {
            socket.off("message")
        }
    }, [])

    return (
        <>

            <Header2 />

            <article className="d-flex row justify-content-center ">

                {/*CONTACTOS*/}
                <aside className="d-flex flex-column bg-primary">

                </aside>




                <section className="d-flex flex-column">
                    {/*ESCRIBIR MENSAJE*/}
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                            className="form-control mb-3 d-flex align-items-end "
                            placeholder="Escribe tu mensaje..."
                        />
                    </form>


                    {/*MENSAJES*/}
                    <ul>
                        {messages.map((message, index) => (
                            <>
                                <div className="d-flex text-muted ">
                                    <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                        xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                        preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff"
                                            dy=".3em">32x32</text>
                                    </svg>

                                    <div key={index} className="alert alert-secondary " >{message}</div>

                                </div>
                            </>

                        ))}

                    </ul>
                </section>
            </article>

            <Footer />
        </>
    )
}

export default Messages
