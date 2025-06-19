import { Products } from "./products.js";
import { calculateLineTotal, calculateInvoiceTotal } from "./carrito.js";

let data

data = new Products().getData();
//http://www.jsonblob.com/api/1385066399118057472

const init = () => {
  const tbody = document.querySelector(".table__body");
  const template = document.querySelector("#table-row-template");
  const billingTemplate = document.querySelector("#billing__rows");
  const billingContainer = document.querySelector(".products__to__bill");

  data.forEach((item) => {
    const clone = template.content.cloneNode(true);

    // Fill in product details
    clone.querySelector(".title__product").textContent = item.title;
    clone.querySelector(".ref__product").textContent = item.SKU;
    clone.querySelector(".unidad").textContent = item.price;

    // Grab interactive elements
    const input = clone.querySelector(".quantity-input");
    const increaseBtn = clone.querySelector(".increase");
    const decreaseBtn = clone.querySelector(".decrease");
    const totalCell = clone.querySelector(".total");

    input.value = 0;
    handleQuantityChange();

    // Add "+" click
    increaseBtn.addEventListener("click", () => {
      const current = parseInt(input.value) || 0;
      if (current < 99) {
        input.value = current + 1;
        handleQuantityChange();
      }
    });

    // Add "−" click
    decreaseBtn.addEventListener("click", () => {
      const current = parseInt(input.value) || 0;
      input.value = Math.max(0, current - 1);
      handleQuantityChange();
    });

    // Prevent invalid characters
    input.addEventListener("keydown", (e) => {
      const invalidChars = ["e", "E", ".", "+", "-", ","];
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

    input.addEventListener("input", () => {
      const value = parseInt(input.value) || 0;
      if (value > 99) input.value = 99;
      handleQuantityChange();
    });

    function updateTotal() {
      const quantity = input.value;
      const price = item.price;
      const total = calculateLineTotal(quantity, price);
      const currency = item.currency;
      totalCell.textContent = `${total}${item.currency}`;
    }

    function updateBillingRow() {
      const quantity = parseInt(input.value) || 0;
      const price = item.price;
      const total = calculateLineTotal(quantity, price);
      const id = item.SKU;

      let existing = billingContainer.querySelector(`[data-id="${id}"]`);

      if (quantity > 0) {
        if (!existing) {
          const clone = billingTemplate.content.cloneNode(true);
          const row = clone.querySelector("tr");
          row.dataset.id = id; // marca única para este producto
          row.querySelector(".producto").textContent = item.title;
          row.querySelector(".precio").textContent = `${total}${item.currency}`;
          billingContainer.appendChild(clone);
        } else {
          existing.querySelector(
            ".precio"
          ).textContent = `${total}${item.currency}`;
        }
      } else {
        if (existing) existing.remove(); // si llega a 0, eliminamos
      }
    }

    function updateInvoiceTotal() {
      const allPrices = [...billingContainer.querySelectorAll(".precio")].map(
        (cell) => cell.textContent
      );

      const grandTotal = calculateInvoiceTotal(allPrices);
      const currency = data[0].currency || "€";
      document.querySelector(
        ".total__billing .total"
      ).textContent = `${grandTotal}${currency}`;
    }

    function handleQuantityChange() {
      updateTotal();
      updateBillingRow();
      updateInvoiceTotal();
    }

    // Finally, insert the row into the table
    tbody.appendChild(clone);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  //AQUI ESTA EL FETCH DE INFO EN API
  fetch("http://www.jsonblob.com/api/1385066399118057472")  //USAMOS JSONBloB????  URL donde esta el JSON
    .then((res) => res.json())
    .then((info) => {
      data = info.products.map(p => ({ ...p, currency: info.currency }));  //<--- Globalización de la información
              //transformamos info que viene como objeto JSON --a--> ARRAY[jsons] 
      //                {"currency": "€","products": [ ... ]} --a--> [{SKU:...title:...,price:...,currency:...},{},...]
      init()  //<------ cargamos JSON traido desde la API
    });
});



//BACKUP URL
/* const primaryURL = "https://jsonblob.com/api/1385066399118057472";
const fallbackURL = "https://jsonblob.com/api/1385073008397686784"; // ← copia alternativa

async function fetchData(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error ${res.status} al cargar ${url}`);
  const info = await res.json();
  return info.products.map(p => ({ ...p, currency: info.currency }));
}

async function loadData() {
  try {
    data = await fetchData(primaryURL);
    console.log("✅ Datos cargados desde el JSON principal");
  } catch (err) {
    console.warn("⚠️ Falló el JSON principal. Intentando respaldo...");
    try {
      data = await fetchData(fallbackURL);
      console.log("✅ Datos cargados desde el JSON de respaldo");
    } catch (err2) {
      console.error("❌ No se pudo cargar ningún JSON");
      return;
    }
  }

  init(); // ← tu función que construye la interfaz
}

document.addEventListener("DOMContentLoaded", loadData); */
