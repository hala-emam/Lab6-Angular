import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/iproduct';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  categories: ICategory[];
  selectedCategoryid = 0;
  buyProducts: IProduct[] = [];
  constructor() {
    this.categories = [
      { id: 1, name: 'Tablets' },
      { id: 2, name: 'Laptops' },
      { id: 3, name: 'Phones' },
    ];
  }
  productInfo(product: IProduct) {
    const findProduct = this.buyProducts.find((prod) => prod.id === product.id);
    if (findProduct) {
      findProduct.quantity++;
      findProduct.price = product.price * findProduct.quantity;
    } else {
      this.buyProducts.push({ ...product, quantity: 1 });
    }
  }

  removeProduct(product: IProduct) {
    const findIndexOfProduct = this.buyProducts.findIndex(
      (prod) => prod.id === product.id
    );
    if (findIndexOfProduct !== -1) {
      const foundProduct = this.buyProducts[findIndexOfProduct];
      if (foundProduct.quantity > 1) {
        foundProduct.quantity--;
      } else {
        this.buyProducts.splice(findIndexOfProduct, 1);
      }
    }
  }
}
