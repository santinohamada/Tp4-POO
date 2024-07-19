/*Ejercicio 4:
Crea un objeto producto con propiedades nombre, precio y categoría. Luego, escribe una función que reciba un array de productos y devuelva un objeto donde las claves sean las categorías y los valores sean arrays de productos de esa categoría. Usa reduce para realizar la agrupación. Usa prompt para ingresar los datos de los productos.*/
const listaProductos = [];
let categoriaEspecifica;

do {
  let producto = {
    nombre: prompt("Ingrese el nombre del producto"),
    precio: parseFloat(prompt("Ingrese el precio del producto")),
    categoria: prompt("Ingrese la categoria del producto"),
  };
  listaProductos.push(producto);
} while (confirm("Desea ingresar otro producto?"));

const productosAgrupados = listaProductos.reduce((acumulador, producto) => {
  if (!acumulador[producto.categoria]) {
    acumulador[producto.categoria] = [];
  }
  acumulador[producto.categoria].push(producto.nombre);
  return acumulador;
}, {});

console.log(productosAgrupados);
