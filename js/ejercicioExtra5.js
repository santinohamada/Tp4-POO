/*Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números). Escribe una función que reciba un objeto alumno y un número, y que añada la calificación al array de calificaciones del alumno. Usa un bucle para calcular la calificación más alta del alumno y un switch para clasificar al alumno según su calificación más alta (A para 9-10, B para 7-8, C para 5-6, D para 0-4).*/

function asociarAlumnoYNota(alumno,nota){
    alumno.calificaciones.push(nota)
}
const alumno ={
    nombre: prompt("Ingrese el nombre del alumno"),
    curso : prompt("Ingrese el curso del alumno"),
    calificaciones:[]
}
do{
asociarAlumnoYNota(alumno,parseFloat(prompt("Ingrese una nota al alumno:")))
}
while(confirm("Desea ingresar otra nota al alumno?"))
let notaMaxima = 0;
alumno.calificaciones.forEach(item => {if(item > notaMaxima){
    notaMaxima = item}
})
let clasificacion;
    switch (true) {
        case (notaMaxima >= 9 && notaMaxima <= 10):
            clasificacion = 'A';
            break;
        case (notaMaxima >= 7 && notaMaxima < 9):
            clasificacion = 'B';
            break;
        case (notaMaxima >= 5 && notaMaxima < 7):
            clasificacion = 'C';
            break;
        case (notaMaxima >= 0 && notaMaxima < 5):
            clasificacion = 'D';
            break;
        default:
            clasificacion = 'Sin clasificar';
            break;
    }

  document.write(clasificacion);
