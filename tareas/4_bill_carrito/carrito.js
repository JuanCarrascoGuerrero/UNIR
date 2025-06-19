//AQUI SOLO CALCULOS, NADA DEL DOM

export function calculateLineTotal(cantidad, price) {
  const quantity = parseInt(cantidad) || 0;
  const unitPrice = parseFloat(price) || 0;
  return +(quantity * unitPrice).toFixed(2);
}

export function calculateInvoiceTotal(formattedPrices = []) {
  return formattedPrices.reduce((sum, priceString) => {
    const numeric = parseFloat(priceString.replace(/[^\d.]/g, "")) || 0;
    return +(sum + numeric).toFixed(2);
  }, 0);
}
