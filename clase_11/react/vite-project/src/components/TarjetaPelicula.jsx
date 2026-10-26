export default function TarjetaPelicula({titulo, año, vista}) {
  return (
    <div>
        <h1>{titulo} {vista ? "✓" : ""}</h1>
        <h2>Año: {año}</h2>
        <h3>Vista: {vista}</h3>
    </div>
  )
}