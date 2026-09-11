import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../types/product.type";

@Injectable()

export class ProductService {
  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get<ProductType[]>('https://testologia.ru/tea');
  }

  getProduct(id: string) {
    return this.http.get<ProductType>(`https://testologia.ru/tea?id=${id}`);
  }
}
