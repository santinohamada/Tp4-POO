/*Ejercicio 3:
Crea un objeto libro que tenga propiedades título, autor, año y género. Luego, escribe una función que reciba un array de libros y un género y devuelva un array con los libros de ese género usando filter. Usa prompt para ingresar los datos de los libros y el género.*/
const arrayLibros = [];
function filtrar(arrayLibros, generoFiltro) {
  return arrayLibros.filter((item) => item.genero === generoFiltro);
}
do {
  let libro = {
    titulo: prompt("Ingrese el titulo del libro"),
    autor: prompt("Ingrese el autor del libro"),
    anio: prompt("Ingrese el año del libro"),
    genero: prompt("Ingrese el genero del libro"),
  };
  arrayLibros.push(libro);
} while (confirm("Desea seguir ingresando libros?"));
generoFiltro = prompt("Ingrese el genero por el cual desee filtrar");
arrayFiltrado = filtrar(arrayLibros, generoFiltro);
arrayFiltrado.forEach((element) => {
  document.write(`${element.titulo}<br>`);
});
