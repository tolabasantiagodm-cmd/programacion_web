
// ─────────────────────────────────────────
// DATOS — no modificar
// ─────────────────────────────────────────

const animes = [
  {
    titulo: "Attack on Titan",
    imagen: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    genero: "Acción",
    rating: 9.0,
    sinopsis: "La humanidad sobrevive dentro de enormes murallas que los protegen de los Titanes."
  },
  {
    titulo: "Demon Slayer",
    imagen: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    genero: "Acción",
    rating: 8.6,
    sinopsis: "Un joven se convierte en cazador de demonios para salvar a su hermana convertida."
  },
  {
    titulo: "My Hero Academia",
    imagen: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    genero: "Acción",
    rating: 7.9,
    sinopsis: "En un mundo de superhéroes, un chico sin poderes sueña con convertirse en el mejor."
  },
  {
    titulo: "Fullmetal Alchemist: Brotherhood",
    imagen: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
    genero: "Aventura",
    rating: 9.1,
    sinopsis: "Dos hermanos buscan la Piedra Filosofal para recuperar sus cuerpos perdidos."
  },
  {
    titulo: "One Piece",
    imagen: "https://cdn.myanimelist.net/images/anime/1244/138851.jpg",
    genero: "Aventura",
    rating: 8.7,
    sinopsis: "Luffy y su tripulación navegan los siete mares buscando el tesoro legendario."
  },
  {
    titulo: "Spy x Family",
    imagen: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg",
    genero: "Comedia",
    rating: 8.5,
    sinopsis: "Un espía, una asesina y una niña telepática forman una familia falsa... que resulta perfecta."
  },
  {
    titulo: "Overlord",
    imagen: "https://cdn.myanimelist.net/images/anime/1945/136600.jpg",
    genero: "Fantasía",
    rating: 7.9,
    sinopsis: "Un jugador queda atrapado en su juego de rol y decide conquistar ese mundo."
  },
  {
    titulo: "Re:Zero",
    imagen: "https://cdn.myanimelist.net/images/anime/1522/128039.jpg",
    genero: "Fantasía",
    rating: 8.3,
    sinopsis: "Un joven es transportado a otro mundo donde revive su muerte una y otra vez."
  },
  {
    titulo: "Death Note",
    imagen: "https://cdn.myanimelist.net/images/anime/1079/138100.jpg",
    genero: "Misterio",
    rating: 8.7,
    sinopsis: "Un estudiante encuentra un cuaderno que mata a quien escribas en él."
  },
  {
    titulo: "Steins;Gate",
    imagen: "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
    genero: "Misterio",
    rating: 9.1,
    sinopsis: "Un científico descubre cómo enviar mensajes al pasado con consecuencias devastadoras."
  },
  {
    titulo: "Your Lie in April",
    imagen: "https://cdn.myanimelist.net/images/anime/1405/143284.jpg",
    genero: "Romance",
    rating: 8.7,
    sinopsis: "Un pianista que no escucha su propia música conoce a una violinista que cambia su vida."
  },
  {
    titulo: "Toradora",
    imagen: "https://cdn.myanimelist.net/images/anime/13/22128.jpg",
    genero: "Romance",
    rating: 8.1,
    sinopsis: "Un chico intimidante y una chica feroz deciden ayudarse a conquistar al amor de su vida."
  },
  {
    titulo: "Another",
    imagen: "https://cdn.myanimelist.net/images/anime/4/75509.jpg",
    genero: "Terror",
    rating: 7.5,
    sinopsis: "Muertes inexplicables rodean a un estudiante y a la misteriosa chica que nadie ve."
  },
  {
    titulo: "Jujutsu Kaisen",
    imagen: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    genero: "Acción",
    rating: 8.7,
    sinopsis: "Un estudiante ingiere un dedo maldito y se convierte en el recipiente de un demonio legendario."
  }
];


// ─────────────────────────────────────────
// EJERCICIO — completá las funciones de abajo
// ─────────────────────────────────────────


// FUNCIÓN 1: crearCard
// ─────────────────────────────────────────

function crearCard(anime) {
  const card = document.createElement("div");

  card.classList.add("card");

  card.innerHTML = `
    <img src="${anime.imagen}" alt="${anime.titulo}">
    <div class="card-info">
      <span class="genero">${anime.genero}</span>
      <h2>${anime.titulo}</h2>
      <p>${anime.sinopsis}</p>
      <span class="rating">★ ${anime.rating}</span>
    </div>
  `;

  return card;
}


// ─────────────────────────────────────────
// FUNCIÓN 2: renderGrilla
// ─────────────────────────────────────────

function renderGrilla(lista) {
  const grilla = document.querySelector("#grilla");
  const contador = document.querySelector("#contador");

  grilla.innerHTML = "";

  lista.forEach(function(anime) {
    const card = crearCard(anime);
    grilla.appendChild(card);
  });

  contador.textContent = lista.length + " animes encontrados";
}


// ─────────────────────────────────────────
// FUNCIÓN 3: buscar
// ─────────────────────────────────────────

function buscar(lista, termino) {
  return lista.filter(function(anime) {
    return anime.titulo.toLowerCase().includes(termino.toLowerCase());
  });
}


// ─────────────────────────────────────────
// FUNCIÓN 4: filtrarPorGenero
// ─────────────────────────────────────────

function filtrarPorGenero(lista, genero) {
  if (genero === "") {
    return lista;
  }

  return lista.filter(function(anime) {
    return anime.genero === genero;
  });
}


// ─────────────────────────────────────────
// FUNCIÓN 5: buscarYFiltrar
// ─────────────────────────────────────────

function buscarYFiltrar() {
  const termino = document.querySelector("#busqueda").value;
  const genero = document.querySelector("#genero").value;

  let resultado = buscar(animes, termino);

  resultado = filtrarPorGenero(resultado, genero);

  renderGrilla(resultado);
}


// ─────────────────────────────────────────
// EVENT LISTENERS — no modificar
// ─────────────────────────────────────────

document.querySelector("#busqueda").addEventListener("input", buscarYFiltrar);
document.querySelector("#genero").addEventListener("change", buscarYFiltrar);

// Render inicial — muestra todos los animes al abrir la página
renderGrilla(animes);
