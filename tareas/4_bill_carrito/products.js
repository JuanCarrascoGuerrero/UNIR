export class Products {
  constructor() {
    this.currency = "€";
    this.products = [
      {
        SKU: "0K3QOSOV4V",
        title: "iFhone 13 Pro",
        price: "938.99"
      },
      {
        SKU: "TGD5XORY1L",
        title: "Cargador",
        price: "49.99"
      },
      {
        SKU: "IOKW9BQ9F3",
        title: "Funda de piel",
        price: "79.99"
      }
    ];
  }

  getData() {
    return this.products.map(product => ({
      title: product.title,
      SKU: product.SKU,
      price: product.price
    }));
  }
}
