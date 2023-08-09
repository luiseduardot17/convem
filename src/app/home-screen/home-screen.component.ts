import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { IMensagem } from '../interfaces/IMensagem';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
})
export class HomeScreenComponent implements OnInit {
  mensagens: IMensagem[] = [];
  erro: string = '';

  constructor(private apiService: ApiService) {}
  ngOnInit() {}

  getMensagens(text: string) {
    this.apiService.validate(text).subscribe(
      (mensagens) => {
        this.mensagens = mensagens;
        this.erro = '';
      },
      (error) => {
        this.mensagens = [];
        this.erro = error;
      }
    );
  }
}
