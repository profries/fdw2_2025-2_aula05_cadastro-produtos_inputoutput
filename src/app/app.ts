import { Component, signal } from '@angular/core';
import { TabelaProdutos } from "./tabela-produtos/tabela-produtos";
import { FormProdutos } from "./form-produtos/form-produtos";
import { ListCardProdutos } from "./list-card-produtos/list-card-produtos";

@Component({
  selector: 'app-root',
  imports: [TabelaProdutos, FormProdutos, ListCardProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  listaProdutos: any[] = [
    {id: 1, nome:"Produto 1", preco: 100},
    {id: 2, nome:"Produto 2", preco: 200},
    {id: 3, nome:"Produto 3", preco: 300},
    {id: 4, nome:"Produto 4", preco: 400},
    {id: 5, nome:"Produto 5", preco: 500},
  ];

  addProduto(produto:any) {
    this.listaProdutos.push(produto);
  }
}
