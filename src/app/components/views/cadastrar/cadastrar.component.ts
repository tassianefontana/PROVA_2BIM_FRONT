import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  nome!: String
  isbn!: String
  preco!: String

  livroColumns: string[] = ['nome']

  constructor(private service: LivroService, private snack: MatSnackBar) { }

  ngOnInit(): void {}

  cadastrar():void{
    let livro = new Livro()
    livro.nome = this.nome
    livro.isbn = this.isbn
    livro.preco = Number(this.preco)
    this.service.cadastrar(livro).subscribe((livro)=> {
      this.snack.open("Livro cadastrado", "livro", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
    })

  })
}

}
