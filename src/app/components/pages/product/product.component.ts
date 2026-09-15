import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductType} from "../../../types/product.type";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: ProductType;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: '',
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['id']) {
        this.productService.getProduct(params['id']).subscribe(data => {
          this.product = data;
        })
      }
    })
  }

}
