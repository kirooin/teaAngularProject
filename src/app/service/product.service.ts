import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../types/product.type";
import {OrderType} from "../types/order.type";

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

  createOrder(data: OrderType) {
    return this.http.post<{ success: number, message?: string }>('https://testologia.ru//order-tea', data);
  }
}
