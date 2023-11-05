function encontrarDuplicados(lista) {
    const contador = {};
    const duplicados = [];
  
    lista.forEach(numero => {
      if (contador[numero] === undefined) {
        contador[numero] = 1;
      } else {
        if (contador[numero] === 1) {
          duplicados.push(numero);
        }
        contador[numero]++;
      }
    });
  
    return duplicados;
  }
  
  const numeros = [9, 8, 7, 6, 5, 9, 7, 5, 4, 3, 1, 2];
  console.log("La lista de numero es: ", numeros);
  
  const duplicados = encontrarDuplicados(numeros);
  console.log("Números duplicados de la lista son:", duplicados);