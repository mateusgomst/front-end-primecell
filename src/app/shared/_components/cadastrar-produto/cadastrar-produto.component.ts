import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../interfaces/produto.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastrar-produto',
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule],
  standalone: true,
  templateUrl: './cadastrar-produto.component.html',
  styleUrl: './cadastrar-produto.component.css',
  providers: [Router]
})
export class CadastrarProdutoComponent {
  form: FormGroup;
  selectedFile: File | null = null;
  tipos = [
    'ELETRONICOS',
    'FONES',
    'CARREGADORES',
    'CASE',
    'BATERIAS',
    'ACESSORIOS',
    'OUTROS'
  ];

  constructor(private fb: FormBuilder, private produtoService: ProdutoService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onSubmit() {
    if (this.form.invalid || !this.selectedFile) {
      alert('Preencha todos os campos e selecione uma imagem.');
      return;
    }

    const produto: Produto = this.form.value;

    this.produtoService.postProduct(produto, this.selectedFile).subscribe({
      next: () => {
        alert('Produto cadastrado com sucesso!');
        this.form.reset();
        this.selectedFile = null;
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao cadastrar produto.');
      }
    });
  }
}
