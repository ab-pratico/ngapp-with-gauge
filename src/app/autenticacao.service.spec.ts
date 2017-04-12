import { AutenticacaoService } from './autenticacao.service';
import { TestBed, inject } from '@angular/core/testing';

describe('AutenticacaoService', () => {

  let servico: AutenticacaoService;

  beforeEach(() => {
    servico = new AutenticacaoService();
  });

  describe('login() ', () => {

    it('deve retornar "Id não pode ser nulo" se id == null', () => {
      expect(() => {
        servico.login(null, 'Eu');
      }).toThrowError('Id não pode ser nulo');
    });

    it('deve definir usuario logado', () => {
      servico.login(2, 'Eu');
      expect(servico.usuarioCorrente).not.toBeNull();
    });

    it('estaLogado() deve retornar true quando logado', () => {
      servico.login(2, 'Eu');
      expect(servico.estaLogado()).toBeTruthy();
    });

    it('estaLogado() deve retornar false nao loguei', () => {
      expect(servico.estaLogado()).toBeFalsy();
    });

  });


});

describe('Testes integrados', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AutenticacaoService
      ]
    });
  });


  it('checar se inicializa com usuario deslogado', inject([AutenticacaoService], (servico: AutenticacaoService) => {
    expect(servico.estaLogado()).toBeFalsy();
  }));

});
