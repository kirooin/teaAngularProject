import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../types/product.type";
import {OrderType} from "../types/order.type";
import {Observable} from "rxjs";

@Injectable()

export class ProductService {
  constructor(private http: HttpClient) {
  }

  getProducts(query: string | null): Observable<ProductType[]> {
    if (query === null) {
      return this.http.get<ProductType[]>('https://testologia.ru/tea');
    } else {
      return this.http.get<ProductType[]>(`https://testologia.ru/tea?search=${query}`);
    }
  }


  getProduct(id: string): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.ru/tea?id=${id}`);
  }

  createOrder(data: OrderType): Observable<{success: number, message?: string | undefined}> {
    return this.http.post<{ success: number, message?: string }>('https://testologia.ru//order-tea', data);
  }
}
