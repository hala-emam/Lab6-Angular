import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  products: IProduct[];
  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Tablet Samsung',
        price: 15000,
        quantity: 2,
        imgURL: '../../../assets/images/tablet.jpg',
        categoryid: 1,
      },
      {
        id: 200,
        name: 'Laptop Lenovo',
        price: 30000,
        quantity: 0,
        imgURL: '../../../assets/images/laptop1.jpg',
        categoryid: 2,
      },
      {
        id: 300,
        name: 'Laptop Dell',
        price: 40000,
        quantity: 5,
        imgURL: '../../../assets/images/laptop2.jpg',
        categoryid: 2,
      },
      {
        id: 400,
        name: 'Iphon',
        price: 20000,
        quantity: 1,
        imgURL: '../../../assets/images/iphone.jpg',
        categoryid: 3,
      },
      {
        id: 500,
        name: 'Mobile Oppo',
        price: 5000,
        quantity: 4,
        imgURL: '../../../assets/images/oppo-phone.jpg',
        categoryid: 3,
      },
      {
        id: 600,
        name: 'Mobile Samsung',
        price: 5000,
        quantity: 3,
        imgURL: '../../../assets/images/samsung.jpg',
        categoryid: 3,
      },
    ];
  }
  getAllProducts(): IProduct[] {
    return this.products;
  }
  getProductsByCatid(catid: number): IProduct[] {
    if (catid == 0) {
      return this.products;
    } else {
      return this.products.filter((prod) => prod.categoryid == catid);
    }
  }

  getProductsByid(productid: number): IProduct | null {
    const findProduct = this.products.find((prod) => prod.id == productid);
    if (findProduct) {
      return findProduct;
    } else {
      return null;
    }
  }
  mapProductsToids(): number[] {
    return this.products.map((prod) => prod.id);
  }
}
