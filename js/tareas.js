class Tarea {
  constructor(id, titulo) {
    this.id = id;
    this.titulo = titulo;
    this.hecha = false;
  }
  alternar() {
    this.hecha = !this.hecha;
  }
}
