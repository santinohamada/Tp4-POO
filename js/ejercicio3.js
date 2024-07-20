/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
 */

class Rectangulo {
  setAltura(altura) {
    altura > 0
      ? (this.altura = altura)
      : document.write("<p>La altura no puede ser negativa</p>");
  }
  setAncho(ancho) {
    ancho > 0
      ? (this.ancho = ancho)
      : document.write("<p>El ancho no puede ser negativa</p>");
  }
  getAncho() {
    this.ancho
      ? document.write(`<p>El ancho del rectagulo es: ${this.ancho}</p>`)
      : document.write("<p>No se definió ancho para este rectangulo</p>");
  }
  getAltura() {
    this.altura
      ? document.write(`<p>La altura del rectagulo es: ${this.altura}</p>`)
      : document.write("<p>No se definió altura para este rectangulo</p>");
  }
  calcularArea() {
    !(isNaN(this.ancho) && !isNaN(this.altura))
      ? document.write(
          `<p>El area del rectangulo es: ${this.altura * this.ancho}</p>`
        )
      : document.write("<p>Verifique la altura o anchura del rectangulo</p>");
  }
  calcularPerimetro() {
    !(isNaN(this.ancho) && !isNaN(this.altura))
      ? document.write(
          `<p>El perimetro del rectangulo es: ${
            2 * this.altura + 2 * this.ancho
          }</p>`
        )
      : document.write("<p>Verifique la altura o anchura del rectangulo</p>");
  }
}
const rectagulo1 = new Rectangulo();
rectagulo1.setAltura(5);
rectagulo1.setAncho(5);
rectagulo1.getAltura();
rectagulo1.getAncho();
rectagulo1.calcularArea();
rectagulo1.calcularPerimetro();
