import { Component } from '@angular/core';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'app-list-card-produtos',
  imports: [CardProduto],
  templateUrl: './list-card-produtos.html',
  styleUrl: './list-card-produtos.css'
})
export class ListCardProdutos {
  listaProdutos: any[] = [
    {id: 1, nome:"Produto 1", preco: 100},
    {id: 2, nome:"Produto 2", preco: 200},
    {id: 3, nome:"Produto 3", preco: 300},
    {id: 4, nome:"Produto 4", preco: 400},
    {id: 5, nome:"Produto 5", preco: 500},
  ];
}
