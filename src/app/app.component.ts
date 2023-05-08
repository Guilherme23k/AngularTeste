import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cepConsult';

  cep: string = '';
  endereco: any;

  pesquisado = false;
  espera = false;

  constructor(private http: HttpClient) {}

  pesquisarCep() {

    this.espera = true;

    this.cep=this.cep.replace(/\D/g,'')
    this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe((endereco: any) => {
      this.endereco = endereco;
      this.pesquisado=true;
      this.espera=false;
    });
  }

  limpa(){
    this.endereco = '';
    this.pesquisado = false;
  }
}
