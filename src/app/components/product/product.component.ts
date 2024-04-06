import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  OnInit,
} from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { ProductCardDirective } from '../../directives/product-card.directive';
import { NationaidPipe } from '../../pipes/nationa-id.pipe';
import { ProductsServiceService } from '../../services/products-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardDirective, NationaidPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnChanges,OnInit {
  products: IProduct[] =[] as IProduct[];
  totalOrderPrice: number = 0;
  filteredProducts: IProduct[];
  id: string = '30101142400443';
  FullDate: string = 'FullDate';
  currentid!: number;
  currentProduct: IProduct | null = null;

  constructor(
    private _ApiProductsService: ApiProductsService,
    private router: Router,
    private _activatedRoute:ActivatedRoute
  ) {

    this.onClickToBuyProduct = new EventEmitter<IProduct>();
    this.filteredProducts = this.products;
  }


  @Input() recievedCategoryid: number = 0;

  ngOnInit(): void {
      this._ApiProductsService.getAllProducts().subscribe({
        next:(res)=>{
         this.products=res;
         this.filteredProducts=this.products;
        },
        error:(err)=>{
          console.log(err)
        },
      })

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
  }

  ngOnChanges() {
   this._ApiProductsService.getProductsByCatId(this.recievedCategoryid).subscribe({
      next:(res)=>{
         this.filteredProducts=res;
      },
      error:(err)=>{
        console.log(err)
      },
    })


  }
  //define event
  @Output() onClickToBuyProduct: EventEmitter<IProduct>;

  // buy function
  buy(product: IProduct): void {
    if (product.quantity > 0) {
      product.quantity--;
    }
    //fire event
    this.onClickToBuyProduct.emit(product);
  }

  navigateToDetailsOfProduct(id: number) {
    //this.router.navigateByUrl("/Details")
    //this.router.navigateByUrl(`/Details/${id}`)
    this.router.navigate(['/products', id]);
  }

  deleteProduct(productId: number) {
    this._ApiProductsService. deleteProductById(productId).subscribe({
      next: () => {
        alert("Product deleted successfully!");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  updateProduct(id:number){
    this._ApiProductsService.getProductById(id).subscribe({
      next: (product) => {

        this.router.navigate([`/AddProduct/${id}`],{ state: { product } });
      },
      error: (error) => {
        console.error('Error fetching product:', error);
        // Optionally, handle errors or display error messages
      }
    });
  }
}
