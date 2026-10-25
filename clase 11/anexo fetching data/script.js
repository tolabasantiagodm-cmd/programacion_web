
console.log("=== 1. Versión con .then() ===");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("No se pudieron obtener los usuarios");
    }
    return response.json();
  })
  .then((users) => {
    console.log(users.map((user) => user.name));
  })
  .catch((error) => {
    console.error("Ocurrió un error:", error.message);
  });

console.log("Después del pedido con .then()");


console.log("=== 2. Versión con async/await ===");

async function obtenerUsuarios() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("No se pudieron obtener los usuarios");
    }

    const users = await response.json();
    console.log(users.map((user) => user.name));
  } catch (error) {
    console.error("Ocurrió un error:", error.message);
  }
}

obtenerUsuarios();


console.log("Después de llamar a obtenerUsuarios()");
