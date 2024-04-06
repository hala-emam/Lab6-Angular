import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { ApiCategoriesService } from '../../services/api-categories.service';
import { ApiProductsService } from '../../services/api-products.service';
import { CommonModule, formatDate } from '@angular/common';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{
  catergories: ICategory[] =[] as ICategory[];
  newProduct: IProduct ={} as IProduct;
  newAddProduct: IProduct = {
    id:0,
    name: '',
    price: 0,
    quantity: 0,
    categoryid:0, // assuming categoryid is a string, adjust accordingly if it's a number
    imgURL: ''
  };
  constructor(
    private _ApiCategoriesService:ApiCategoriesService,
    private _ApiProductsService:ApiProductsService,
    private router:Router,
    private route: ActivatedRoute,
    private http: HttpClient,


    ){

  }
  ngOnInit(): void {
    this._ApiCategoriesService.getAllCategoriess().subscribe({
      next:(res)=>{
        this.catergories=res;
        // console.log(this.newProduct)
      },
      error:(err)=>{
        console.log(err);
      }
    })

    //to add set data to form
    const product: IProduct = history.state.product;
    if (product) {
      // Populate the form with product data
      this.newAddProduct = product;
      console.log(this.newAddProduct)
    }
  }

  addNewProduct(){
    this._ApiProductsService.addProduct(this.newProduct).subscribe({
      next:()=>{
       alert("Done!")
       this.router.navigateByUrl('/Products')
      },
      error:(err)=>{
       console.log(err)
      }
    })
  }


}
