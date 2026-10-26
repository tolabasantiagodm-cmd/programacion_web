import { useState } from "react"

export default function Acordeon(props) {
    const {titulo, contenido} = props
    const [abierto, setAbierto] = useState(false)

    return(
        <div>
            <button onClick={() => setAbierto(!abierto)}>
                {titulo} {abierto ? "▲" : "▼"}
            </button>

            {abierto && <p>{contenido}</p>}
        </div>
    )

}