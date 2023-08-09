import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IMensagem } from '../interfaces/IMensagem';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/mensagem';

  constructor(private http: HttpClient) {}

  validate(text: string): Observable<IMensagem[]> {
    const textLowerCase = text.toLowerCase();

    if (textLowerCase === 'sim') {
      return this.http.get<IMensagem[]>(this.apiUrl).pipe(
        map((mensagens: IMensagem[]) => {
          return mensagens;
        }),
        catchError((error) => {
          const errorMessage = 'Erro ao buscar mensagem: ' + error.message;
          return throwError(errorMessage);
        })
      );
    } else {
      const errorMessage = 'Erro: Entrada inválida';
      return throwError(errorMessage);
    }
  }
}
