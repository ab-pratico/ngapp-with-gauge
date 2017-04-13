# Testando aplicação Angular 2 / Angular 4


Categoria de testes:

- Unitários

- de Integração

- Funcionais / Funcionalidades


## Testes unitários (jest / jasmine) e de integração (karma / jasmine) num mesmo de `spec` do jasmine

`yarn test` ou `npm test` para os testes de integração com o karma

`yarn test:unit` ou `npm run test:unit` para os testes unitários com o jest


## Exemplos de Testes

### Serviços

### Pipes

### Diretivas

### Componentes


## REFERÊNCIAS

- Patch para ZoneJS: https://github.com/angular/zone.js/pull/711/files

## JEST SETUP

- Para funcionar baseUrl

```json
    "moduleDirectories": ["node_modules", "src"],
```

## YARN

- Para manter versões de dependências e sub-dependências sob-controle.


### Para instalar o PhantomJS com o YARN

```bash
TMP_DIR=/tmp yarn add -D karma-phantomjs-launcer
```
