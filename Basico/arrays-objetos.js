//array de objetos

let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 22 }
  ];

console.log(personas[0])


//objeto con arrays

let estudiante = {
    nombre: "Ana",
    cursos: ["Matemáticas", "Historia", "Inglés"],
    calificaciones: [90, 85, 95]
  };

  console.log('las primera calificacion del estudiantes es '+ estudiante.calificaciones[0])

  //array de objetos con arrays

  let libros = [
    { titulo: "El señor de los anillos", autores: ["J.R.R. Tolkien"], tags: ["fantasía", "aventura"] },
    { titulo: "Cien años de soledad", autores: ["Gabriel García Márquez"], tags: ["realismo mágico"] },
    { titulo: "Harry Potter", autores: ["J.K. Rowling"], tags: ["fantasía", "magia"] }
  ];