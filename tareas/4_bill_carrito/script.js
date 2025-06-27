import { Products } from "./products.js";
import { calculateLineTotal, calculateInvoiceTotal } from "./carrito.js";

let data //<-- Globalización de los datos en la clase

//////////////////////////////////////////////CARGA DE DATOS


// Función que intenta obtener los datos de la API externa              
async function fetchFromAPI(url) {                                      
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
  const info = await res.json(); 
  
                                //...p spread operator, toma todo lo que ya hay (evitamos redundancias codificando)
  return info.products.map(p => ({ ...p, currency: info.currency })); //mapeamos para crear un Array con los datos del JSON, 
                                                                      // añadiendo atribtuo currency en cada JSON
}

// Función que carga datos: primero intenta API, si falla → local
async function loadData() {
  try {
    data = await fetchFromAPI('https://jsonblob.com/api/1385066399118057472');
    console.log("Datos cargados desde la API");
  } catch (err) {
    console.warn("Error al cargar API. Usando datos locales...", err.message);
    data = new Products().getData(); // Datos desde archivo local
  }

  init(); // Construye la interfaz una vez que hay datos
}

document.addEventListener("DOMContentLoaded", loadData);


/////////////////////////////////////////////// CONSTRUCCIONES JS


//INIT una vez tenemos DOM y datos
const init = () => {
  const tbody = document.querySelector(".table__body");                   // (TEMPLATE A) TBODY DE PRODUCTOS/CANTIDAD/PRECIOS
  const template = document.querySelector("#table-row-template");         //template del anterior
  const billingContainer = document.querySelector(".products__to__bill"); // (TEMPLATE B) FILAS DE PRODUCTO/PRECIO TOTAL A FACTURAR
  const billingTemplate = document.querySelector("#billing__rows");       //template del anterior
  
  //FOR EACH (item) de los datos
  data.forEach((item) => {

    //CLONE de nodes de HTML template para ir rellenando con datos de items***********************************
    const clone = template.content.cloneNode(true);

    // --------------------------------------------------------------------- (TEMPLATE A)
    clone.querySelector(".title__product").textContent = item.title;
    clone.querySelector(".ref__product").textContent = `Ref: ${item.SKU}`;
    clone.querySelector(".unidad").textContent = `${item.price}${item.currency}`;

    /////////////////////////////////////////////////////////////////////////ELEMENTOS HTML DINÁMICOS
    // Variables de ekementos dinámicos: btones */- e input de cantidades
    const input = clone.querySelector(".quantity-input");
    const increaseBtn = clone.querySelector(".increase");
    const decreaseBtn = clone.querySelector(".decrease");
    // Otra variable del elemento dinámico sumatorio total cantidad * precio
    const totalCell = clone.querySelector(".total");
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //********************************************************************************************************** */

    
    input.value = 0;        //Inicializamos input de cantidad a 0
    handleQuantityChange(); //(Q)   Listener de cambios en cantidad de productos alerta

    tbody.appendChild(clone);//.................................... appendChild Clone (TEMPLATE A)

    // Listener "+" click
    increaseBtn.addEventListener("click", () => {
      const current = parseInt(input.value) || 0; //Si no es parseable, default min 0
      if (current < 99) {                         // +1 hasta 99        default max 99
        input.value = current + 1;
        handleQuantityChange(); //(Q)   Listener de cambios en cantidad de productos alerta
      }
    });

    // Listener "−" click
    decreaseBtn.addEventListener("click", () => {
      const current = parseInt(input.value) || 0;
      input.value = Math.max(0, current - 1);
      handleQuantityChange();
    });

    // Extensión de filtro de datos inválidos en el input (campo input acepta caracteres no numéricos)
    input.addEventListener("keydown", (e) => {
      const invalidChars = ["e", "E", ".", "+", "-", ","];
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

    // Extensión de filtro de datos inválidos en el input (si numeros no enteros o mayores a 99, default 0 a 99)
    input.addEventListener("input", () => {
      const value = parseInt(input.value) || 0;
      if (value > 99) input.value = 99;
      handleQuantityChange();
    });

    //////////////////////////////////////////////////////////FUNCIONES DE APOYO

    //actualiza TOTALES en columnas tbody 
    function updateTotal() {
      const quantity = input.value;
      const price = item.price;
      const total = calculateLineTotal(quantity, price);  //FUNCION CARRITO que calcula cantidad*precio
      const currency = item.currency;
      totalCell.textContent = `${total}${item.currency}`;
    }

    //actualiza filas tablas FACTURACION/BILLING
    function updateBillingRow() {
      const quantity = parseInt(input.value) || 0;
      const price = item.price; 
      const total = calculateLineTotal(quantity, price);  //FUNCION CARRITO que calcula cantidad*precio
      const id = item.SKU;
                                                    //data set para IDentificar por SKU filas en el billing
      let existing = billingContainer.querySelector(`[data-id="${id}"]`);

      //HAY + 0 PRODUCTOS...
      if (quantity > 0) {
        // No hay ese SKU en el Billing, añadir fila con datos de ese item
        if (!existing) {
          // --------------------------------------------------------------------- (TEMPLATE B)
          const clone = billingTemplate.content.cloneNode(true);
          const row = clone.querySelector("tr");
          row.dataset.id = id; // marca única para este producto
          row.querySelector(".producto").textContent = item.title;
          row.querySelector(".precio").textContent = `${total}${item.currency}`;
          billingContainer.appendChild(clone);//.................................... appendChild Clone (TEMPLATE B)
          // Item con ese SKU ya en billing, solo modificar el total
        } else {
          existing.querySelector(".precio").textContent = `${total}${item.currency}`;
        }
      // 0 PRODUCTOS? REMOVE FILA
      } else {
        if (existing) existing.remove(); // si llega a 0, eliminamos
      }
    }

    // Actualiza el sumatorio TOAL del billing
    function updateInvoiceTotal() {
      const allPrices = [...billingContainer.querySelectorAll(".precio")].map(
        (cell) => cell.textContent
      );

      const grandTotal = calculateInvoiceTotal(allPrices); //FUNCION CARRITO calcula precio acumulado todos productos seleccionados
      const currency = data[0].currency || "€";
      document.querySelector(
        ".total__billing .total"
      ).textContent = `${grandTotal}${currency}`;
    }

    //LISTENER DE CAMBIOS en Columna cantidad (+/- e INPUT)
    function handleQuantityChange() {
      updateTotal();
      updateBillingRow();
      updateInvoiceTotal();
    }
    
  });
}



