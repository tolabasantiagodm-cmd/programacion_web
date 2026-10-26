export default function Perfil(props) {
    const {nombre, rol, lenguajes, apellido} = props
    return(
        <div>
            <h1>{nombre} {apellido}</h1>
            <p>{rol}</p>
            <ul>{lenguajes}</ul>
        </div>
    )
}