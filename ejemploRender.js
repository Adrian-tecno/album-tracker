/**
 * * Manipulación de la interfaz:
 * 1. Propiedad llamada innerhtml dentro de ella podremos observar todo el html que vive dentro de la etiqueta seleccionada. Si lo usamos sin cuidado podemos borrar todo lo que estaba.
 * ! Importante
 * !no usar innerhtml para renderizar solo txto si estoy recibiendo y mostrando inmediatamente (Propenso a inyección de html).
 *
 * 2. Propiedad llamada textContent esta solo mostrará el texto que tiene dentro.
 *
 *
 */

console.log(mainEl.innerHTML);
console.log("text content");
console.log(mainEl.textContent);

mainEl.innerHTML += "<h1> Hola mundo </h1>";
mainEl.innerHTML += card;

console.log(mainEl.innerHTML);

//mainEl.textContent += "hola";
//mainEl.textContent += card;

/**
 * Insert Adjacent HTML
 * Permite insertar html en el contenedor sin borrar lo que ya esta y en una posicion especifica.
 * Tiene 4 posiciones:
 * 1. beforebegin
 * 2. beforeend
 * 3. afterbegin
 * 4. afterend
 */

mainEl.insertAdjacentHTML(
  "beforeend",
  "<p>Insertado por insert adjacent HTML</p>",
);

mainEl.insertAdjacentHTML("beforeend", card);
