
//La informacion global deviene mantenerla en una variable accesible globalmente
let recipesinfo



//Para evitar el "Callback Hell", dividimos en pequeñas funciones
const paintRecipeDetail = (recipeid) => {
  console.log(recipeid)
  const recipe = recipesinfo.recipes.find(recipe => {
    console.log(recipe.id)     // ESTAN DE DIFERENTE COLOR ?¿?¿?¿?   uno es un String otro un Integer
    /*return*/ recipe.id === recipeid     // La comparacion da un 'undefined", no nos vale

    return recipe.id === Number(recipeid)
  })
}



const init = () => {

  const recipeListItemTpl = document.querySelector("#recipes-list-item");
  const recipesList = document.querySelector(".recipes__list");

  const recipeDetailItemTpl = document.querySelector("#recipes-detail-item");
  const recipesDetail = document.querySelector(".recipes__w-detail");

  recipesinfo.recipes.forEach((recipe) => {
    const newRecipeListItem = recipeListItemTpl.content.cloneNode(true);
    newRecipeListItem.querySelector(".recipes__list-item"); //.dataset.id = recipe.id; si es util... data-

    const img = newRecipeListItem.querySelector(".recipes__img")
    img.setAttribute("src", recipe.image);
    img.dataset.recipeId = recipe.id;      // data-          

    newRecipeListItem.querySelector(".recipes__title").textContent = recipe.name;
    recipesList.append(newRecipeListItem);
  });



  //No es buena solucion para el detail listening el evento onclick

  // const ultimoelemento = recipesList.querySelector('.recipes__list-item:last-child')
  // ultimoelemento.addEventListener('click', () => {
  //   const newRecipeDetailItem = recipeDetailItemTpl.content.cloneNode(true)
  //   newRecipeDetailItem.querySelector('.recipes__detail-img').setAttribute('src', recipe.image)
  //   newRecipeDetailItem.querySelector('.recipes__detail-title').textContent = recipe.name
  //   recipesDetail.textContent = ''
  //   recipesDetail.append(newRecipeDetailItem)
  // })




  //Solucion profesional

  //target nos identifica el elemento especifico donde hemos inicializado el evento

  //Oreja en el padre
  recipesList.addEventListener("click", (e) => {
    console.log(e.target);  // Target.... ¿Qué hijo lo disparo? (ID?) 
                            // (arriba)  Ojo Construccion de templates... hemos generado el famoso "data-..."
        //destructuracion
    const id = e.target.dataset.recipeId;
    if(typeof id !== 'undefined'){
      paintRecipeDetail(id)
    }
  });

};

document.addEventListener("DOMContentLoaded", () => {
  //AQUI ESTA EL FETCH DE INFO EN API
  fetch("https://jsonblob.com/api/jsonBlob/1384922780243517440")  //USAMOS JSONBloB????  URL donde esta el JSON
    .then((res) => res.json())
    .then((info) => {
      recipesinfo = info  //<--- Globalización de la información
      init()  //<------ cargamos JSON traido desde la API
    });
});

