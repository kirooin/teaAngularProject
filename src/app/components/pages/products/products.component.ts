import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductType[] = [];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
   this.productService.getProducts().subscribe(data => {
     this.products = data;
   })
  }
}
