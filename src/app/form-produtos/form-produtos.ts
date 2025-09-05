import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-produtos',
  imports: [FormsModule, JsonPipe],
  templateUrl: './form-produtos.html',
  styleUrl: './form-produtos.css'
})
export class FormProdutos {
  produto: any = {id: 0, nome:"", preco:0};
  @Output() onSalvar = new EventEmitter<any>();

  cadastrarProduto(){
    this.onSalvar.emit(this.produto); 
    alert("Produto cadastrado com sucesso!")
    this.produto = {id: 0, nome:"", preco:0};
  }

}
