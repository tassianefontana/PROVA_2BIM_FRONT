import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  livros!: MatTableDataSource<Livro>

  listarColumns: string[] = ['id', 'nome', 'isbn', 'preco', 'createdAt'];

  constructor(private service: LivroService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => {
      this.livros = new MatTableDataSource<Livro>(lista)
      
    }) 

  }
}
