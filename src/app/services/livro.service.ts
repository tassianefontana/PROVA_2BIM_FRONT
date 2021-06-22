import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private baseUrl = "http://localhost:3000/"

  constructor(private http:HttpClient) {}

  listar(): Observable <Livro[]>{
   return this.http.get<Livro[]>(`${this.baseUrl}livro/listar`)
  }

  cadastrar(livro:Livro): Observable<Livro>{
    return this.http.post<Livro>(`${this.baseUrl}livro/cadastrar`, livro)
  }
}
