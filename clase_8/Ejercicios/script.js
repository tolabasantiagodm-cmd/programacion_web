const productos = [
  { id: 1, nombre: "Auriculares Bluetooth", categoria: "Electrónica", precio: 15000, stock: 8, activo: true },
  { id: 2, nombre: "Teclado Mecánico", categoria: "Electrónica", precio: 22000, stock: 0, activo: true },
  { id: 3, nombre: "Silla Ergonómica", categoria: "Muebles", precio: 85000, stock: 3, activo: true },
  { id: 4, nombre: "Lámpara de Escritorio", categoria: "Muebles", precio: 9500, stock: 12, activo: false },
  { id: 5, nombre: "Mouse Inalámbrico", categoria: "Electrónica", precio: 7800, stock: 20, activo: true },
  { id: 6, nombre: "Monitor 27\"", categoria: "Electrónica", precio: 120000, stock: 2, activo: true },
  { id: 7, nombre: "Alfombra de Escritorio", categoria: "Muebles", precio: 4200, stock: 0, activo: false },
  { id: 8, nombre: "Webcam HD", categoria: "Electrónica", precio: 18000, stock: 5, activo: true }
];

// MAP → extrae los nombres
const nombres = productos.map(function(producto) {
  return producto.nombre;
});

console.log(nombres);

// FILTER → productos que tienen stock
const visibles = productos.filter(function(producto) {
  return producto.stock > 0;
});

console.log(visibles);

// FIND → busca un producto por ID
const idSeleccionado = 3;

const encontrado = productos.find(function(producto) {
  return producto.id === idSeleccionado;
});

// Crear un array con nombre y precio formateado
const resumenes = productos.map((producto) => {
  return {
    nombre: producto.nombre,
    precioFormateado: "$" + producto.precio.toLocaleString("es-AR")
  };
});

console.log(resumenes[0]);
// { nombre: "Auriculares Bluetooth", precioFormateado: "$15.000" }

console.log(encontrado);