//Ej 1

const calcular = ({ a, b, c }) => (a * b) + c;

// Ejemplo de uso
const obj1 = { a: 5, b: 3, c: 2 };
console.log(calcular(obj1)); // Resultado: 17

//Ej 2

const filtrarEstudiantes = (estudiantes) => 
    estudiantes
        .filter(({ calificacion }) => calificacion > 70)
        .map(({ nombre }) => nombre);

// Ejemplo de uso
const estudiantes = [
    { nombre: "Juan", calificacion: 85 },
    { nombre: "Ana", calificacion: 60 },
    { nombre: "Pedro", calificacion: 72 },
];
console.log(filtrarEstudiantes(estudiantes)); 
// Resultado: ["Juan", "Pedro"]


//Ej 3

const crearUsuario = ({ nombre, edad = 25 }) => ({ nombre, edad });

// Ejemplo de uso
const usuario1 = { nombre: "Carlos", edad: 30 };
const usuario2 = { nombre: "Lucía" };

console.log(crearUsuario(usuario1)); // Resultado: { nombre: "Carlos", edad: 30 }
console.log(crearUsuario(usuario2)); // Resultado: { nombre: "Lucía", edad: 25 }
