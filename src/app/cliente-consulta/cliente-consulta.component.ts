import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-cliente-consulta',
  templateUrl: './cliente-consulta.component.html',
  styleUrls: ['./cliente-consulta.component.css']
})
export class ClienteConsultaComponent implements OnInit {
 
  clientes: any[] = [];
  mensagem: string = '';
 
  constructor(
    private httpClient: HttpClient
  ) { }
 
  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl + "api/clientes")
      .subscribe({
        next: (result) => {
          this.clientes = result as any[];
        },
        error: (e) => {
          console.log(e);
        }
      })
  }
 
  onDelete(idCliente: number): void {
    if (window.confirm('Deseja realmente excluir o cliente?')) {
      this.httpClient.delete(environment.apiUrl + "api/clientes/" + idCliente,
        { responseType: 'text' })
        .subscribe({
          next: (result) => {
            this.mensagem = result;
            this.ngOnInit();
          },
          error: (e) => {
            console.log(e);
            this.mensagem = 'Ocorreu um erro, por favor tente novamente.';
          }
        })
    }
  }
 
}
 


