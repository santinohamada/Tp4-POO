/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro {
  mostrarLibro() {
    document.write(
      `<p>El libro ${this.Titulo} con ISBN ${this.ISBN} creado por el autor ${this.Autor} tiene ${this.NumPaginas} paginas</p>`
    );
  }

  getISBN() {
    return this.ISBN
  }
  setISBN(ISBN) {
    this.ISBN = ISBN;
  }
  getTitulo() {
    return this.Titulo
  }
  setTitulo(Titulo) {
    this.Titulo = Titulo;
  }
  getAutor() {
    return this.Autor
  }
  setAutor(Autor) {
    this.Autor = Autor;
  }
  getNumPaginas() {
    return this.NumPaginas
  }
  setNumPaginas(NumPaginas) {
    this.NumPaginas = NumPaginas;
  }
}

const libro1 = new Libro();
libro1.setISBN("978-3-16-148410-0");
libro1.setTitulo("Cien Años de Soledad");
libro1.setAutor("Gabriel García Márquez");
libro1.setNumPaginas(417);

const libro2 = new Libro();
libro2.setISBN("978-0-14-017739-8");
libro2.setTitulo("1984");
libro2.setAutor("George Orwell");
libro2.setNumPaginas(328);

libro1.mostrarLibro()
libro2.mostrarLibro()
libro1.getNumPaginas() > libro2.getNumPaginas()
  ? document.write(`${libro1.Titulo} tiene mas paginas`)
  : document.write(`${libro2.Titulo} tiene mas paginas`);
