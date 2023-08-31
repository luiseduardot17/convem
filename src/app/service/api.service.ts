import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMensagem } from '../interfaces/IMensagem';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://apiconvem.onrender.com/mensagem';

  constructor(private http: HttpClient) {}

  sendResponse(response: string): Observable<IMensagem> {
    return this.http.post<IMensagem>(this.apiUrl, { resposta: response });
  }
}