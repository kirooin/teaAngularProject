import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit(): void {

  }


}
