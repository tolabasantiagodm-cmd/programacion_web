
import Perfil from "./components/Perfil";

function App() {
  return (
    <Perfil
      nombre="Tu Nombre"
      rol="Desarrollador"
      lenguajes={["HTML", "Python", "Kotlin"]}
    />
  );
}

export default App;
