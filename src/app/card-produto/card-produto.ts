import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  imports: [],
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css'
})
export class CardProduto {
  @Input() produto: any = { id:1, nome:"Produto 1", preco: 100 };
}
