function contarPalabras(texto) {
    const palabras = texto.split(' ');
    const palabrasFiltradas = palabras.filter(palabra => palabra !== '');
  
    return palabrasFiltradas.length;
  }
  
  const texto = "Llega navidad y yo sin ti, en esta soledad, recuerdo el dia en que te perdi";
  const cantidadPalabras = contarPalabras(texto);
  console.log(`Cantidad de palabras: ${cantidadPalabras}`);