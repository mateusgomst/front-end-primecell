import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../interfaces/produto.interface';
import { ProdutoVitrineComponent } from '../produto-vitrine/produto-vitrine.component';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [
    CommonModule, 
    ProdutoVitrineComponent
  ],
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css'],
  providers: [ProdutoService]
})
export class VitrineComponent implements OnInit {
  listaProdutos: Produto[] = [];
  tipos: string[] = ['ELETRONICOS', 'FONES', 'CARREGADORES', 'CASE', 'BATERIAS', 'ACESSORIOS', 'OUTROS'];
  tipoSelecionado: string = '';

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.buscarTodosProdutos();
  }

  buscarTodosProdutos(): void {
    this.produtoService.getAllProducts().subscribe(
      (produtos) => {
        this.listaProdutos = produtos;
      },
      (error) => {
        console.error('Erro ao buscar todos os produtos:', error);
      }
    );
  }

  onTipoSelecionado(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const tipoSelecionado = selectElement.value;
    this.tipoSelecionado = tipoSelecionado;

    if (tipoSelecionado) {
      this.produtoService.getProductsByCategory(tipoSelecionado).subscribe(
        (produtos) => {
          this.listaProdutos = produtos;
        },
        (error) => {
          console.error('Erro ao buscar produtos por tipo:', error);
        }
      );
    } else {
      this.buscarTodosProdutos();
    }
  }
}