const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
const store = createStore(contador);

// Obtenemos el elemento con el id 'valor'
const valor = document.getElementById('valor');

function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store
  const contador = store.getState().contador;

  // Seteamos el número obtenido como texto dentro del elemento con id 'valor'
  valor.textContent = contador;
}

// Ejecutamos la función 'renderContador'
renderContador();

// Nos suscribimos al store pasándole la función 'renderContador'
store.subscribe(renderContador);

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click
// hagan un dispatch al store de la acción correspondiente
document.getElementById('incremento').addEventListener('click', function() {
  store.dispatch(incremento());
});

document.getElementById('decremento').addEventListener('click', function() {
  store.dispatch(decremento());
});