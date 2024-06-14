// Ejercicio 2: Gestión de Estudiantes
// Descripción: Crea un sistema para gestionar una lista de estudiantes y sus calificaciones.

// Requisitos:

// 1. Define un objeto escuela con una propiedad estudiantes que sea un array vacío.
// 2. Crea una función agregarEstudiante que reciba un nombre y un array de calificaciones,
// y añada un objeto con estas propiedades al array estudiantes.
// 3. Crea una función listarEstudiantes que imprima en consola cada estudiante y sus calificaciones.

// 4. Crea una función promedioEstudiante que reciba el nombre de un estudiante y
// devuelva el promedio de sus calificaciones.

let escuela = {
    estudiantes: []
}

function AgregarEstudiante (nombre, calificaciones) {
    this.nombre = nombre;
    this.calificaciones = calificaciones;
}
// let estudiante2 = new AgregarEstudiante("Leidy", [30, 45, 35]);
escuela.estudiantes.push(new AgregarEstudiante("Juan", [45, 50, 45]));
escuela.estudiantes.push(new AgregarEstudiante("Leidy", [45, 50, 45]));

console.log(escuela.estudiantes);


//
//
function listarEstudiantes(){
    for(let i = 0; i < escuela.estudiantes.length; i++){
        console.log(`Estudiante: ${escuela.estudiantes[i].nombre}, Calificaciones: ${escuela.estudiantes[i].calificaciones}`);
    }
}

console.log(listarEstudiantes());

function promedioEstudiante(nombre) {

    if (escuela.estudiantes) {
        let estudianteIndividual = escuela.estudiantes.find((estudiante) => estudiante.nombre === nombre)
        let suma = estudianteIndividual.calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
        let promedio = suma / estudianteIndividual.calificaciones.length;
        return promedio;
    }
}
//
console.log(`Promedio de Juan: ${promedioEstudiante("Leidy")}`);
// console.log(`Promedio de Leidy: ${promedioEstudiante("Leidy")}`);