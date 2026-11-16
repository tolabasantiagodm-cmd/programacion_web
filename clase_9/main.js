//ejercicio 1 - condicional ternario
const usuario = { 
    nombre: "Ana", 
    edad: 16, 
    suscripcion: "gratuita" 
};

const acceso = usuario >= 18 ? "Permitido" : "Denegado";
console.log(acceso);

const plan = usuario === 0 ? "premium" : "gratuituo";
console.log(plan);

const saludo = usuario === 0 ? "Hola, Invitado" : "Hola, Ana";
console.log(saludo);


// ejercicio 2 - || &&
const config = {
  tema: "oscuro",
  idioma: "",
  notificaciones: true,
  usuarioAdmin: false
};

const idioma = config.idioma || "español";
console.log(idioma);

const badge = config.usuarioAdmin && "admin";
console.log(badge);

const badge2 = config.notificaciones && "notificaciones activas";
console.log(badge2)


// ejercicio 3 - destructurar
const pelicula = {
  titulo: "Interstellar",
  director: "Christopher Nolan",
  año: 2014,
  duracion: 169,
  genero: "Ciencia ficción"
};

const { titulo, director, año } = pelicula;
const duracionMinutos = pelicula.duracion;
const calificacion = "Sin calificacion"

function mostrarPelicula({ titulo, año, director }) {
    console.log(titulo + año + director)
}

mostrarPelicula({ titulo: "Interstellar ", año: 2014, director: " - Dir. Christopher Nolan"})