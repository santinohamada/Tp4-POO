/*7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}
let espacio = 0;
if (confirm("Desea personalizar el espacio de su agenda?")) {
  espacio = Math.abs(parseInt(prompt("Digite el espacio de su agenda:")));
} else {
  espacio = 10;
}
const agenda = {
  espacioDisponible: espacio,
  contactos: [],

  aniadirContacto: function (contacto) {
    if (this.huecosLibres() > 0) {
      this.contactos.push(contacto);
    } else {
      alert("No hay suficiente espacio en la agenda");
    }
  },

  existeContacto: function (contacto) {
    console.log(contacto.nombre);
    if (this.contactos.find((item) => item.nombre === contacto.nombre)) {
      alert("El contacto pasado existe");
    } else {
      alert("El contacto pasado no existe");
    }
  },

  listarContactos: function () {
    let lista = "";
    this.contactos.forEach((item, posicion) => {
      lista += `${posicion + 1}. Nombre: ${item.nombre}, Telefono: ${
        item.telefono
      }\n`;
    });

    alert(lista);
  },

  buscarContacto: function (nombre) {
    const item = this.contactos.find((item) => item.nombre === nombre);
    if (item) {
      alert(`Telefono: ${item.telefono}`);
    } else {
      alert("No existe un contacto con ese nombre");
    }
  },
  eliminarContacto: function (contacto) {
    if (this.contactos.find((item) => contacto.nombre) != undefined) {
      this.contactos = this.contactos.filter(
        (item) => item.nombre != contacto.nombre
      );
      alert("Se borró el contacto especificado");
    } else {
      alert("No existe dicho contacto");
    }
  },

  agendaLlena: function () {
    if (this.huecosLibres() === 0) {
      alert("La agenda está llena");
    } else {
      alert("La agenda no está llena");
    }
  },

  huecosLibres: function () {
    if (this.espacioDisponible > this.contactos.length) {
      return this.espacioDisponible - this.contactos.length;
    }
    return 0;
  },
};

do {
  switch (
    (opcion = parseInt(
      prompt(`
    1. Añadir un contacto
    2. Buscar la existencia de un contacto
    3. Listar contactos
    4. Obtener numero a partir del nombre de un contacto
    5. Eliminar un contacto
    6. Verificar estado de la agenda
    7. Obtener espacio restante en la agenda
    8. Salir.
    `)
    ))
  ) {
    case 1:
      let nombre = prompt("Ingrese el nombre del contacto: ");
      let telefono = prompt("Ingrese el telefono del contacto");
      agenda.aniadirContacto({ nombre, telefono });

      break;

    case 2:
      nombreBuscar = prompt("Ingrese el nombre del contacto a buscar: ");

      agenda.existeContacto({ nombre: nombreBuscar });

      break;

    case 3:
      agenda.listarContactos();
      break;

    case 4:
      agenda.buscarContacto(
        prompt("Ingrese el nombre del contacto a buscar: ")
      );
      break;
    case 5:
      agenda.eliminarContacto({
        nombre: prompt("Ingrese el nombre del contacto a eliminar: "),
      });
      break;
    case 6:
      agenda.agendaLlena();
      break;
    case 7:
      alert(`Quedan ${agenda.huecosLibres()} huecos libres `);
      break;
    case 8:
      document.write("Saliendo..");
      break;

    default:
      break;
  }
} while (opcion != 8);
