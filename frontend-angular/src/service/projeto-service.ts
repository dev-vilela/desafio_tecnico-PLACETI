import { environment } from '../app/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidade } from '@domain/cidade';
import { Observable } from 'rxjs';

@Injectable()
export class ProjetoService {

  private API = 'http://localhost:8080/placeti/cidades';

  constructor(private http: HttpClient) {}

  pesquisarCidades(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.API);
  }

  excluir(cidade: Cidade): Observable<any> {
    return this.http.delete(`${this.API}/${cidade.id}`);
  }

  salvar(cidade: Cidade): Observable<any> {
    if (cidade.id) {
      // UPDATE
      return this.http.put(this.API, cidade);
    } else {
      // CREATE
      return this.http.post(this.API, cidade);
    }
  }
listarComercios(): Observable<any[]> {
  return this.http.get<any[]>(`${environment.apiUrl}/comercios`);
}
}