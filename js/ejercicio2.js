function calcularPromedioNotas(estudiantes) {
    const promedios = estudiantes.map(estudiante => {
      const nombre = estudiante.nombre;
      const notas = estudiante.notas;
      const sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
      const promedio = sumaNotas / notas.length;
  
      return { nombre, promedio };
    });
  
    return promedios;
  }
  

  const estudiantes = [
    { nombre: "Daniela", notas: [95, 90, 82, 68,100] },
    { nombre: "Pedro", notas: [98, 90, 86, 65,88] },
    { nombre: "Alejandra", notas: [93, 91, 82, 69,99] },
    { nombre: "Gineth", notas: [90, 97, 89, 85,98] },

  ];
  
  const promedios = calcularPromedioNotas(estudiantes);
  console.log(promedios);