import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  @Output() addToCardClick = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    console.log(this.product.price)
    this.addToCardClick.emit(this.product);
  }

}
