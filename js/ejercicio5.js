/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:


esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.


*/

class Persona {
  constructor(nombre, edad, sexo, peso, altura, AnioNac) {
    this.nombre = nombre;
    this.edad = edad;
    if (peso > 0) {
      this.peso = peso;
    } else {
      document.write(
        "No ingresó un peso valido. Se le establecerá el valor 70 por defecto"
      );
      this.peso = 70;
    }

    if (altura > 0) {
      this.altura = altura;
    } else {
      document.write(
        "No ingresó una altura valida. Se le establecerá el valor 170cm por defecto"
      );
      this.peso = 170;
    }
    switch (sexo) {
      case "M":
        this.sexo = sexo;
        break;
      case "H":
        this.sexo = sexo;
        break;

      default:
        document.write(
          "No ingresó un sexo valido. Se le establecerá el valor F por defecto"
        );
        this.sexo = "F";
    }

    if (AnioNac >= 1930 && AnioNac <= 2010) {
      this.AnioNac = AnioNac;
    } else {
      document.write(
        "No ingresó una fecha valida. Se le establecerá el valor 2004 por defecto"
      );
      this.AnioNac = 2004;
    }
  }

  generarDni() {
    this.dni = Math.floor(10000000 + Math.random() * 90000000);
  }

  esMayorDeEdad() {
    this.edad >= 18
      ? document.write("La persona es mayor de edad")
      : document.write("La persona es menor de edad");
  }

  mostrarGeneracion() {
    switch (true) {
      case 1994 <= this.AnioNac && this.AnioNac <= 2010:
        document.write(
          `<p> ${this.nombre} pertenece a la Generación Z y su rasgo característico es Irreverencia. </p>`
        );
        break;
      case 1981 <= this.AnioNac && this.AnioNac <= 1993:
        document.write(
          `<p> ${this.nombre} pertenece a la Generación Y (Millennials) y su rasgo característico es Frustración. </p>`
        );
        break;
      case 1969 <= this.AnioNac && this.AnioNac <= 1980:
        document.write(
          `<p> ${this.nombre} pertenece a la Generación X y su rasgo característico es Obsesión por el éxito. </p>`
        );
        break;
      case 1949 <= this.AnioNac && this.AnioNac <= 1968:
        document.write(
          `<p> ${this.nombre} pertenece a la Baby Boom y su rasgo característico es Ambición.</p>`
        );
        break;
      case 1930 <= this.AnioNac && this.AnioNac <= 1948:
        document.write(
          `<p> ${this.nombre} pertenece a la Silent Generation y su rasgo característico es Austeridad.</p>`
        );
        break;
      default:
        document.write(
          `<p> ${this.nombre} pertenece a una Generación desconocida y su rasgo característico es Rasgo desconocido.</p>`
        );
    }
  }
}

const persona1 = new Persona("Santino", 20, "H", 80, 173, 2004);

persona1.esMayorDeEdad();
persona1.generarDni();
document.write(`<p> ${persona1.dni}</p>`);
persona1.mostrarGeneracion();
