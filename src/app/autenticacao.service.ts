import { Injectable } from '@angular/core';
import { Usuario } from './meu-modulo/usuario';

@Injectable()
export class AutenticacaoService {

  constructor() { }

  usuarioCorrente: Usuario = null;
  dataAtualizacao: Date = null;


  login(id: number, nome: string) {
    if (id == null) {
      throw new Error('Id não pode ser nulo');
    }
    this.usuarioCorrente = {
      id: id,
      nome: nome
    }
  }

  estaLogado() {
    return (this.usuarioCorrente != null);
  }



}
