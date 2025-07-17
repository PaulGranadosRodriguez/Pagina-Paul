class CargadorTexto {
  constructor(archivo, destinoId) {
    this.archivo = archivo;
    this.destino = document.getElementById(destinoId);
  }

  cargar() {
    fetch(this.archivo)
      .then(res => res.text())
      .then(texto => {
        this.destino.textContent = texto;
      })
      .catch(err => console.error('Error al cargar el archivo:', err));
  }
}

// Uso
const lector = new CargadorTexto('../Textos/Lenguajes.txt', 'contenido');

lector.cargar();
