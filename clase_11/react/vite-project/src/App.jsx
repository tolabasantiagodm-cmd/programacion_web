import { useState } from 'react'
import './App.css'
import Perfil from './components/Perfil'
import TarjetaPelicula from './components/TarjetaPelicula'
import Contador from './components/Contador'
import Acordeon from './components/Acordeon'
import Buscador from './components/Buscador'
import ItemCompra from './components/ItemCompra'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")
  const [items, setItems] = useState([])

  function agregarItem() {
  if (input.trim() === "") return

  const nuevoItem = {
    id: Date.now(),
    nombre: input,
    comprado: false
  }

  setItems([...items, nuevoItem])
  setInput("")
}

function marcarComprado(id) {
  setItems(
    items.map((item) =>
      item.id === id
        ? { ...item, comprado: !item.comprado }
        : item
    )
  )
}

function eliminarItem(id) {
  setItems(items.filter((item) => item.id !== id))
}


  const peliculas = [
    {
      id: 1,
      titulo: "Interstellar",
      año: 2014,
      vista: false
    },
    {
      id: 2,
      titulo: "The Dark Knight",
      año: 2008,
      vista: true
    },
    {
      id: 3,
      titulo: "Inception",
      año: 2010,
      vista: false
    },
    {
      id: 4,
      titulo: "Oppenheimer",
      año: 2023,
      vista: true
    }
  ]
  return (
    <>

      <Perfil
        nombre="Santiago Tolaba"
        rol="Desarrollador"
        lenguajes={["JavaScript", "React", "CSS"]}
      />

      {peliculas.map((pelicula) => (
        <TarjetaPelicula
          key={pelicula.id}
          id={pelicula.id}
          titulo={pelicula.titulo}
          año={pelicula.año}
          vista={pelicula.vista}
        />
      ))}

      <Contador count={count} />

      <button onClick={() => setCount(count + 1)}>
        Sumar
      </button>

      <button onClick={() => setCount(Math.max(0, count - 1))}>
        Restar
      </button>

      <button onClick={() => setCount(0)}>
        Reiniciar
      </button>

      <Acordeon
        titulo="¿Qué es React?"
        contenido="React es una biblioteca de JavaScript."
      />

      <Buscador/>

      <h2>Lista de compras</h2>
      
      <input 
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Agregar un producto"
      />
      
      <button onClick={agregarItem}>
        Agregar
      </button>

      <p>
        Faltan comprar: {items.filter((item) => !item.comprado).length}
      </p>
      
      <ul>
        {items.map((item) => (
          <ItemCompra
          key={item.id}
          item={item}
          onToggle={marcarComprado}
          onDelete={eliminarItem}
          />
        ))}
      </ul>
    </>
  )
}

export default App
