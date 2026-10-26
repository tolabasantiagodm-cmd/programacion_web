import { useState } from "react"

export default function Buscador() {
    const frutas = ["manzana", "pera", "naranja", "banana", "kiwi", "mango"];
    
    const [texto, setTexto] = useState("");
    
    const frutasFiltradas = frutas.filter((frutas) =>
        frutas.toLowerCase().includes(texto.toLowerCase())
    ); // Filtra las frutas según lo que escribe el usuario, ignorando mayúsculas/minúsculas.
    
    return (
    <div>
        <input
          type="texto"
          value={texto}
          onChange={(e) => setTexto(e.target.value)} // Guarda lo que el usuario escribe en el input.
        />

        {frutasFiltradas.map((frutas) => (
            <p key={frutas}>{frutas}</p>
        ))}
    </div>
    )
}