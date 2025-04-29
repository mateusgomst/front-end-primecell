import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-produto-vitrine',
  imports: [],
  templateUrl: './produto-vitrine.component.html',
  styleUrl: './produto-vitrine.component.css'
})
export class ProdutoVitrineComponent {
  @Input() nomeProduto: string = "Nome Do Produto";
  @Input() description: string = "Descriçao"
  @Input() urlImagem: string = "https://placehold.co/200";


  // @Output() click = new EventEmitter;

  
  
}
