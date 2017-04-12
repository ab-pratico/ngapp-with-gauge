import { Usuario } from './usuario';
import { Component, AfterViewInit } from '@angular/core';
import { AutenticacaoService } from './../autenticacao.service';

@Component({
  template: `
  <p> Usuário logado:
  <span *ngIf="estaLogado()" class="nome-usuario">{{usuarioCorrente?.nome}}</span>
  </p>`,
  selector: 'meu-component'
})
export class MeuComponent {


  constructor(private autenticacaoService: AutenticacaoService) {

  }

  estaLogado() {
    return this.autenticacaoService.estaLogado();
  }

  get usuarioCorrente() {
    return this.autenticacaoService.usuarioCorrente;
  }

}
