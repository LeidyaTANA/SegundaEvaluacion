// Ejercicio 2: Gestión de Estudiantes
// Descripción: Crea un sistema para gestionar una lista de estudiantes y sus calificaciones.

// Requisitos:

// 1. Define un objeto escuela con una propiedad estudiantes que sea un array vacío.
// 2. Crea una función agregarEstudiante que reciba un nombre y un array de calificaciones, 
// y añada un objeto con estas propiedades al array estudiantes.
// 3. Crea una función listarEstudiantes que imprima en consola cada estudiante y sus calificaciones.

// 4. Crea una función promedioEstudiante que reciba el nombre de un estudiante y 
// devuelva el promedio de sus calificaciones.

let escuela = []

function AgregarEstudiante (nombre, calificaciones) {
    this.nombre = nombre;
    this.calificaciones = calificaciones;
}

let estudiante1 = new AgregarEstudiante("Juan", [45, 50, 45]);
let estudiante2 = new AgregarEstudiante("Leidy", [30, 45, 35]);
escuela.push(estudiante1, estudiante2);

function listarEstudiantes(){
    for(let i = 0; i < escuela.length; i++){
        console.log(`Estudiante: ${escuela[i].nombre}, Calificaciones: ${escuela[i].calificaciones}`);
    //console.log(inventario[i]);
    }
}

function promedioEstudiante(nombre) {
    
    if (estudiante) {
        let suma = escuela.calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
        let promedio = suma / escuela.calificaciones.length;
    
    } else {
        break;
    }
}

console.log(`Promedio de Juan: ${promedioEstudiante("Juan")}`);
console.log(`Promedio de Leidy: ${promedioEstudiante("Leidy")}`);