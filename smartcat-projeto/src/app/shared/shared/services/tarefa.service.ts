import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from '../../model/tarefa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TarefaService {
    private URL_TAREFAS = "http://localhost:8001/tarefas";

    constructor(private http: HttpClient) {}

    cadastrar(tarefa: Tarefa): Observable<Tarefa> {
      return this.http.post<Tarefa>(this.URL_TAREFAS,tarefa);
    }

    listar(): Observable<Tarefa[]> {
      return this.http.get<Tarefa[]>(this.URL_TAREFAS);
    }

    remover(id: string): Observable<any> {
      return this.http.delete<Tarefa>(`${this.URL_TAREFAS}/${id}`);
    }
}
