import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = "http://localhost:8080/products";

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Produto[]>(this.baseUrl);
  }

  getNewsProducts() {
    return this.http.get<Produto[]>(`${this.baseUrl}/new-products`);
  }

  getProductsByCategory(type: string) {
    const params = { ProductType: type };
    return this.http.get<Produto[]>(`${this.baseUrl}/findByCategory`, { params });
  }

  /**
   * Envia produto + imagem como multipart/form-data
   */
  postProduct(produto: Produto, imagem: File) {
    const formData = new FormData();

    formData.append('product', JSON.stringify(produto));
    if (imagem) {
      formData.append('image', imagem);
    }

    const authToken = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    if (authToken) {
      headers = headers.set('Authorization', `Bearer ${authToken}`);
    }

    return this.http.post<Produto>(this.baseUrl, formData, { headers });
  }


}
