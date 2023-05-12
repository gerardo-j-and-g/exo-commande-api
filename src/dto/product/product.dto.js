export class ProductDTO {
  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.description = product.description;
    this.qty = product.qty;
  }
}
