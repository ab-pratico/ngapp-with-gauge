import { MeuComponent } from './meu-component';
import { TestBed, async, inject } from '@angular/core/testing';
import { ComponentFixture } from "@angular/core/testing";
import { AutenticacaoService } from './../autenticacao.service';
import { getAutenticacaoServiceMock } from './../../test/mock';


// em Isolamento
describe(MeuComponent.name, () => {

  let autenticacaoServiceMock;

  beforeEach(() => {
    autenticacaoServiceMock = getAutenticacaoServiceMock();
  });

  describe('Teste integrados com o Angular', () => {
    let fixture: ComponentFixture<MeuComponent>;
    let compiled: Element;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          MeuComponent
        ],
        providers: [
          {
            provide: AutenticacaoService, useValue: autenticacaoServiceMock
          }
        ]
      }).compileComponents();
      //aguardar a promise acima ser resolvida para então prosseguir: por conta do 'async'
      fixture = TestBed.createComponent<MeuComponent>(MeuComponent);
      fixture.autoDetectChanges();
      compiled = fixture.debugElement.nativeElement;
    }));

    it('exibe o nome do usuario logado', inject([AutenticacaoService], (autenticacaoService: AutenticacaoService) => {
      autenticacaoService.usuarioCorrente = { id: 1, nome: 'Eu' };
      autenticacaoService.estaLogado = jasmine.createSpy('estaLogado').and.returnValue(true);
      fixture.detectChanges();
      expect(compiled.querySelector('span.nome-usuario').textContent).toEqual('Eu');
    }));



    it('não exibe o nome casso o usuario esteja logado', () => {
      fixture.detectChanges();
      expect(compiled.querySelector('span.nome-usuario')).toBeNull();
    });




    // Funcional                               11111
    // unitário c/ Integração              11111111111111
    // Unitários (em isolamento)      111111111111111111111111

    xit('exibe o nome do usuario logado', () => {
      // fixture.componentInstance.usuarioCorrente = {
      //   id: 1,
      //   nome: 'Fulano'
      // };
      fixture.detectChanges();
      expect(compiled.querySelector('span.nome-usuario').textContent).toEqual('Fulano');
    })

  });

  describe('Testes em Isolamento', () => {

    let meuComponent: MeuComponent;


    //let autenticacaoService = new AutenticacaoService();

    describe('obter informações sobre autenticacao', () => {
      beforeEach(() => {
        meuComponent = new MeuComponent(<any>autenticacaoServiceMock);
      })

      it('invoca autenticacao service para obter estado da autenticacao do usuario', () => {
        autenticacaoServiceMock.estaLogado = jasmine.createSpy('estaLogado').and.returnValue(true);
        meuComponent.estaLogado();
        expect(autenticacaoServiceMock.estaLogado).toHaveBeenCalled();
      });

      // for (let i = 0; i < 200; i++) {
      it('invoca autenticacao service para obter usuario corrente', () => {
        autenticacaoServiceMock.usuarioCorrente =
          jasmine.createSpy('usuarioCorrente').and.returnValue({
            id: 1,
            nome: 'Eu'
          });

        expect(meuComponent.usuarioCorrente).toEqual(autenticacaoServiceMock.usuarioCorrente);
      });
      //}

    });



    describe('#estaLogado', () => {


      // it('retorna falso quando não há um usuario corrente', () => {
      //   expect(meuComponent.estaLogado()).toBeFalsy();
      // });

      // it('retorna true se tem usuário logado', () => {
      //   meuComponent.login(1, 'Abner');
      //   expect(meuComponent.estaLogado()).toBeTruthy();
      // });
    })
  });
});
