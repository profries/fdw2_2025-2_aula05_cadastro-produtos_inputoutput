import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-produtos',
  imports: [],
  templateUrl: './tabela-produtos.html',
  styleUrl: './tabela-produtos.css'
})
export class TabelaProdutos {
  @Input() lista: any[] = [];
}
