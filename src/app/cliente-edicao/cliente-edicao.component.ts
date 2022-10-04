import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-edicao',
  templateUrl: './cliente-edicao.component.html',
  styleUrls: ['./cliente-edicao.component.css']
})
export class ClienteEdicaoComponent implements OnInit {

  mensagem: string = '';

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    //capturar o id do cliente enviado pela URL
    const idCliente = this.activatedRoute.snapshot.paramMap.get('idCliente') as number | null;

    //consultando o cliente na API
    this.httpClient.get(environment.apiUrl + "api/clientes/" + idCliente)
      .subscribe({
        next: (result) => {
          this.formEdicao.patchValue(result);
        },
        error: (e) => {
          console.log(e);
        }
      })
  }

  //criando a estrutura do formulário
  formEdicao = new FormGroup({
    //campo 'idCliente'
    idCliente: new FormControl('',[]),
    //campo 'nome'
    nome: new FormControl('', [Validators.required, Validators.minLength(6)]),
    //campo 'e-mail'
    email: new FormControl('', [Validators.required]),
    //campo 'cpf'
    cpf: new FormControl('', [Validators.required, Validators.minLength(11)])
  });

  //função para exibir as mensagens de validação
  get form(): any {
    return this.formEdicao.controls;
  }

  onSubmit(): void {
    //atualizando os dados do cliente
    this.httpClient.put(environment.apiUrl + "api/clientes", this.formEdicao.value,
      { responseType: 'text' })
      .subscribe({
        next: (result) => {
          this.mensagem = result;
        },
        error: (e) => {
          console.log(e);
          this.mensagem = 'Ocorreu um erro, tente novamente.';
        }
      })
  }

}
