export interface ProductsModel {
  readonly id: string;
  readonly title: string;
  readonly price: string;
  readonly image: string;
  readonly category: string;
}

export interface FormProductsModel{
  readonly title: string;
  readonly price: string;
  readonly category: string;
  readonly description: string;
}
