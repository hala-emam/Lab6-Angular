import { Directive, ElementRef ,HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true
})
export class ProductCardDirective {


 @Input() BGColor:string="#103778";


  constructor(private ele:ElementRef) {
    ele.nativeElement.style.border = 'none';
    ele.nativeElement.style.borderRadius = '15px';
    ele.nativeElement.style.boxShadow = ' rgba(149, 157, 165, 0.6) 0px 8px 24px';
    ele.nativeElement.style.backgroundColor=this.BGColor;

   }
   @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.boxShadow = ' rgba(149, 157, 165, 0.6) 0px 16px 48px';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.boxShadow = ' rgba(149, 157, 165, 0.6) 0px 8px 24px';
  }

}
