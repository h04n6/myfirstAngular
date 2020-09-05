import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  categories = [];
  total:number = 0;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    
  }

  remove(id:number){
  
  }
}
