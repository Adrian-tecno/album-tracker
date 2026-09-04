/**
 * Todo lo que seleccionemos al principio debe ser inspeccionado mediante el documento
 *
 * * Opciones de seleccionado:
 * ? Clasicas:
 * getElementById.
 * getElementsByClassName.
 *
 * ? Modernas:
 * Nos permite seleccionar por un seletor css.
 * ! Selectores css:
 * etiqueta por ejemplo form.
 * clase . por ekemplo .form-control.
 * id # por ejemplo #title.
 *
 * querySelector() Si usamos un selector como de clase solo va a seleccionar la primera coincidencia.
 * querySelectorAll.
 *
 */

const formEl = document.getElementById("album-form"); // Solo selecciona por ID
console.log(formEl);
const mainEl = document.querySelector("#album-container"); // Selecciona por mas elementos
console.log(mainEl);
let albums = []; // Array

/**
 * * Eventos
 * Es cualquier acción que realiza el usuario en la página web.
 * Escuchar por el evento.
 * Es cuchamos por un evento para que cuando ocurra desencadene una respuesta.
 *
 * * Pasos para extraer la info del formulario:
 * 1. Agregar un event listener del evento submit.
 * 2. Prevenir el comportamineto por default
 * 3. Construir un form data dandole el elemento formulario.
 * 4. Extraer la inforamción del formData y guardarla en un array de arrays usando el spread operator.
 * ? El spread operator desmpaqueta la información de un iterable y la guarda en otro.
 * 5. crear un objeto con la información usando Object.formEntries() object from entries recibe un array de arrays.
 */
window.addEventListener("load", (event) => {
  if (getItemLocalStorage("albums") == undefined) return;
  albums = [...getItemLocalStorage("albums")];
  console.log(albums);
  albums.map((album) => renderCard(album, mainEl));
  /**
   * * Segunda opcion:
   * getItemLocalStorage("albums").forEach((album) => albums.push(album))
   */
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formEl);
  console.log(formData);
  const dataArray = [...formData];
  console.log(dataArray);
  const album = Object.fromEntries(dataArray);
  console.log(album);

  // * Como hacer todo eso en una linea
  // const album = Object.fromEntries([...new FormData(formEl)]);
  albums.push(album); // Agregar un elemento siemre al final del Array
  setLocalStorage("albums", albums);
  // Limpiamos antes de volver a renderizar las cars, para evitar la acumulación.
  mainEl.innerHTML = "";
  // Renderizamos todas las cards dentro del array de albums.
  albums.map((album) => renderCard(album, mainEl));
  formEl.reset();
});

const renderCard = (albumObject, htmlElement) => {
  const card = `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Title: ${albumObject.title}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Artis: ${albumObject.artist}</h6>
      <p class="card-text">Genre: ${albumObject.genre}</p>
      <a href="#" class="card-link">Year: ${albumObject.year}</a>
      <a href="#" class="card-link">Rating: ${albumObject.rating}</a>
    </div>
  </div>
`;
  htmlElement.insertAdjacentHTML("beforeend", card);
};

const setLocalStorage = (key, value) => {
  // Paso 1 convertir el valor a texto.
  const textValue = JSON.stringify(value);
  // Paso 2 almacenar
  localStorage.setItem(key, textValue);
};

const getItemLocalStorage = (key) => {
  if (localStorage.getItem(key) == null) return;
  // Convertimos de texto a lenguaje JS
  const data = JSON.parse(localStorage.getItem(key));
  return data;
};

/**
 * * Opcion solo para este script
 * const renderCard = (albumObject) => {
  const card = `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${albumObject.title}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${albumObject.artist}</h6>
      <p class="card-text">${albumObject.genre}</p>
      <a href="#" class="card-link">${albumObject.year}</a>
      <a href="#" class="card-link">${albumObject.raiting}</a>
    </div>
  </div>
`;
  mainEl.insertAdjacentHTML("beforeend", card);
};
 * 
 */
