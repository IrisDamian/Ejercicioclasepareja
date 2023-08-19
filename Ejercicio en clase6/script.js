// Función que simula la selección de un archivo por el usuario
function seleccionarArchivo() {
  return new Promise((resolve) => { // Creamos una promesa
    setTimeout(() => { // Simulamos un proceso de selección de archivo que tarda 1 segundo
      const archivoSeleccionado = "archivo.mp4"; // Definimos el nombre del archivo seleccionado
      resolve(archivoSeleccionado); // Resolvemos la promesa con el nombre del archivo seleccionado
    }, 1000); // El proceso de selección tarda 1 segundo
  });
}

// Función que simula la verificación del formato del archivo
function verificarFormato(archivo) { // Recibimos el nombre del archivo seleccionado
  return new Promise((resolve) => { // Creamos una promesa
    setTimeout(() => { // Simulamos un proceso de verificación de formato que tarda 1.5 segundos
      const formatoValido = archivo.endsWith(".mp4"); // Verificamos que el archivo tenga la extensión .mp4
      resolve(formatoValido); // Resolvemos la promesa con el resultado de la verificación
    }, 1500);
  });
}

// Función que simula la verificación del tamaño del archivo
function verificarTamaño(archivo, formatoValido) { // Recibimos el nombre del archivo seleccionado y el resultado de la verificación del formato
  return new Promise((resolve) => { // Creamos una promesa
    setTimeout(() => { // Simulamos un proceso de verificación de tamaño que tarda 2 segundos
      const tamañoValido = formatoValido && archivo.length < 100000000; // Verificamos que el formato sea válido y que el tamaño sea menor a 100MB
      resolve(tamañoValido); // Resolvemos la promesa con el resultado de la verificación
    }, 2000); // El proceso de verificación tarda 2 segundos
  });
}

// Función que simula el proceso de carga del archivo
function cargarArchivo(archivo, tamañoValido) { // Recibimos el nombre del archivo seleccionado y el resultado de la verificación del tamaño
  return new Promise((resolve) => { // Creamos una promesa
    setTimeout(() => { // Simulamos un proceso de carga que tarda 3 segundos
      const cargaExitosa = tamañoValido; // Si el tamaño es válido, la carga es exitosa
      resolve(cargaExitosa); // Resolvemos la promesa con el resultado de la carga
    }, 3000); // El proceso de carga tarda 3 segundos
  });
}

// Función principal asincrónica que encadena las tareas
async function procesoDeCarga() { // La función es asincrónica
  try {
    const archivo = await seleccionarArchivo(); // Esperamos la selección del archivo
    const formatoValido = await verificarFormato(archivo); // Esperamos la verificación del formato
    const tamañoValido = await verificarTamaño(archivo, formatoValido); // Esperamos la verificación del tamaño
    const cargaExitosa = await cargarArchivo(archivo, tamañoValido); // Esperamos la carga del archivo

    if (cargaExitosa) {
      alert("Archivo cargado exitosamente."); // Si la carga fue exitosa, mostramos un mensaje
    } else {
      alert("Error en el proceso de carga."); // Si la carga falló, mostramos un mensaje
    }
  } catch (error) {
    console.error("Ocurrió un error:", error); // Si ocurre un error, lo mostramos en la consola
  }
}

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", procesoDeCarga);