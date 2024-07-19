/*Ejercicio 1:
Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (un array de strings). Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona. Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos de la persona y el nuevo hobby.*/

function agregarHobby(persona) {
  persona.hobbies.push(prompt("Ingrese un nuevo hobbie a la persona"));
}

const persona = {
  nombre: prompt("Ingrese el nombre de la persona"),
  edad: Math.abs(parseInt(prompt("Ingrese la edad la de la persona"))),
  hobbies: [prompt("Ingrese un hobbie a la persona")],
};
do {
  agregarHobby(persona);
} while (confirm("Desea agregar un nuevo hobbie a la persona?"));
persona.hobbies.forEach((element) => {
  document.write(`${element}<br>`);
});
