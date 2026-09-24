import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../service/product.service";
import {finalize} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductType[] = [];
  loading: boolean = false;
  title: string = ''

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,) {
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const search = params['search'];

      if (search) {
        this.title = `Результаты поиска по запросу ${search}`;
      } else {
        this.title = 'Наши чайные коллекции';
      }

      this.loading = true;
      this.productService.getProducts(search || '')
        .pipe(
          finalize(() => this.loading = false)
        )
        .subscribe(data => {
          this.products = data;
        });
    });
  }


}
