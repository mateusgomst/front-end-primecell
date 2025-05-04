import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Produto[]>("http://localhost:8080/products");
  }

  getNewsProducts() {
      return this.http.get<Produto[]>("http://localhost:8080/products/new-products");
  }

  postProduct(produto: Produto){
    this.http.post<Produto>("http://localhost:8080/products", produto);
  }

  getProductsByCategory(type: string) {
    const params = new HttpParams().set('ProductType', type);
    return this.http.get<Produto[]>("http://localhost:8080/products/findByCategory", { params });
  }
  

}

