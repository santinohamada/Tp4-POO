/*Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = Math.abs(precio);
  }

  imprimeDatos() {
    document.write(`<p>Codigo: ${this.codigo} </p>`);
    document.write(`<p>Nombre: ${this.nombre} </p>`);
    document.write(`<p>Precio: ${this.precio} </p>`);
  }
}

const producto1 = new Producto(1, "Coca-Cola", 1800);
const producto2 = new Producto(2, "Chupetin", 200);
const producto3 = new Producto(3, "Alfajor", 700);

const Arreglo = [producto1, producto2, producto3];

Arreglo.map((item) => item.imprimeDatos());
