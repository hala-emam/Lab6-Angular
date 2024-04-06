import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServiceService } from '../../services/products-service.service';
import { IProduct } from '../../models/iproduct';
import { Location } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  currentid!: number;
  currentProduct: IProduct | null = null;
  // arrayOfids: number[];
  currentidIndex: number = 0;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _ApiProductsService:ApiProductsService,
    private _Location: Location,
    private router: Router,

  ) {}
  //reactvex is a library(API) has observor design pattern
  ngOnInit(): void {
    //paramMap->is a type of observable design pattern
    this._activatedRoute.paramMap.subscribe((paramMap) => {
      this.currentid = Number(paramMap.get('id'));
      this._ApiProductsService.getProductById(this.currentid).subscribe({
        next:(res)=>{
          this.currentProduct=res;
        },
        error:(err)=>{
          console.log(err)
        }

      })
    });
    // this.currentid=Number(this._activatedRoute.snapshot.paramMap.get('id'));
  }

  toBack() {
    this._Location.back();
  }
  // toPrev() {
  //   this.currentidIndex = this.arrayOfids.findIndex(
  //     (id) => id == this.currentid
  //   );
  //   if (this.currentidIndex) {
  //     this.router.navigateByUrl(
  //       `/products/${this.arrayOfids[this.currentidIndex - 1]}`
  //     );
  //   }
  // }
  // toNext() {
  //   this.currentidIndex = this.arrayOfids.findIndex(
  //     (_id) => _id == this.currentid
  //   );
  //   if (this.currentidIndex != this.arrayOfids.length - 1) {
  //     this.router.navigateByUrl(
  //       `/products/${this.arrayOfids[this.currentidIndex + 1]}`
  //     );
  //   }
  // }
}
