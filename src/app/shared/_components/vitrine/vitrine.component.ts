import { Component } from '@angular/core';
import { ProdutoVitrineComponent } from '../produto-vitrine/produto-vitrine.component';
import { HttpClient } from '@angular/common/http';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../interfaces/produto.interface';
import { response } from 'express';

@Component({
  selector: 'app-vitrine',
  imports: [ProdutoVitrineComponent],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css',
  providers: [
    ProdutoService
  ]
})
export class VitrineComponent {
  listaProdutos: Produto[]= [];

  constructor(
    private produtoService: ProdutoService
  ){
    produtoService.getAllProducts().subscribe(
      response => {
        this.listaProdutos = response;
        console.log(this.listaProdutos);
      }
    );
  }
    
}
