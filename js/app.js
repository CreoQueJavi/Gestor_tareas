const tareas = [];
const lista = document.getElementById('lista');
function pintar() {
  lista.innerHTML = '';
  for (const t of tareas) {
    const li = document.createElement('li');
    li.textContent = t.titulo;
    if (t.hecha) li.className = 'hecha';
    li.onclick = () => { t.alternar(); pintar(); };
    lista.appendChild(li);
  }
}
document.getElementById('anadir').onclick = () => {
  const campo = document.getElementById('nueva');
  if (campo.value.trim() === '') return;
  tareas.push(new Tarea(tareas.length + 1, campo.value.trim()));
  campo.value = '';
  pintar();
};
// Funcion de prueba funciones
