import { Products } from './products.js';

const data = new Products().getData();


document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.querySelector('.table__body');
const template = document.querySelector('#table-row-template');

data.forEach(item => {
  const clone = template.content.cloneNode(true);
  clone.querySelector('.title__product').textContent = item.title;
  clone.querySelector('.ref__product').textContent = item.SKU;
  //clone.querySelector('.cantidad').textContent = item.cantidad;
  clone.querySelector('.unidad').textContent = item.price;
  //clone.querySelector('.total').textContent = item.total;
  tbody.appendChild(clone);});




  document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('keydown', (e) => {
      const invalidChars = ["e", "E", ".", "+", "-", ","];
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });
  })

















});
