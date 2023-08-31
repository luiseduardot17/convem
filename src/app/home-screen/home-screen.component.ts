import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
})
export class HomeScreenComponent {
  respostaUsuario: string = '';
  respostaServidor: string | null = null; // Variável para armazenar a resposta do servidor.
  loading: boolean = false;

  constructor(private apiService: ApiService) {}

  enviarResposta() {
    this.loading = true;

    this.apiService.sendResponse(this.respostaUsuario).subscribe(
      (mensagem) => {
        this.respostaServidor = mensagem.mensagem; // Armazena a resposta da api.
        this.loading = false;
      },
      (error) => {
        console.error('Erro ao enviar resposta:', error);
        this.loading = false;
      }
    );
  }
}
