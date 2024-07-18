/*Ejercicio 2: 
Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota. Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. Usa un bucle para recorrer el array. Usa prompt para ingresar los datos de los estudiantes.*/
const ArrayObjetos = [];

class Estudiante{
    constructor(nombre,nota){
        this.nombre = nombre;
        this.nota = nota
    }
}
do{
    ArrayObjetos.push({nombre:prompt("Ingrese el nombre del estudiante"), nota: parseInt(prompt("ingrese la nota del estudiante"))})
}
while(confirm("Desea ingresar otro estudiante?"))
let promedio = 0;
ArrayObjetos.forEach(element => {
    promedio += element.nota / ArrayObjetos.length
});

document.write(`El promedio final de los estudiantes es: ${promedio}`)