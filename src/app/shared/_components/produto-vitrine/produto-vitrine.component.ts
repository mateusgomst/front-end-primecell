// produto-vitrine.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-vitrine.component.html',
  styleUrl: './produto-vitrine.component.css'
})
export class ProdutoVitrineComponent {
  @Input() nomeProduto: string = "Nome Do Produto";
  @Input() description: string = "Descrição";
  @Input() image: string = "https://placehold.co/200";
  
  get imagemUrl(): string {
    if (!this.image) {
      return "https://placehold.co/200";
    }
    // Se a imagem vier do backend (nome do arquivo), monta a URL completa
    if (!this.image.startsWith('http')) {
      return `http://localhost:8080/images/${this.image}`;
    }
    return this.image;
  }
  
  get urlWhatsapp(): string {
    const mensagem = `Olá, estou interessado no produto "${this.nomeProduto}"!`;
    return `https://wa.me/62994180706?text=${encodeURIComponent(mensagem)}`;
  }
  
  handleImageError(event: any): void {
    event.target.src = 'https://placehold.co/200';
  }
}