

export function getAutenticacaoServiceMock() {
  return {
    usuarioCorrente: null,
    estaLogado: () => false,
    login: (id: number, nome: string) => { }
  };
}
