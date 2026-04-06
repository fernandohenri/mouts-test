import loginPage from '../../support/pages/login.page';
import produtosPage from '../../support/pages/cadastro.page';

describe('Frontend - Cenário 2: Cadastro de Produto', () => {
  const nomeMouse = `Razer DeathAdder V3 ${Date.now()}`;

  beforeEach(() => {
    loginPage.visit();
    loginPage.realizarLogin('fulano@qa.com', 'teste');
    
    cy.url().should('include', '/home');
  });

  it('Deve cadastrar o mouse da Razer com sucesso', () => {
    cy.visit('https://front.serverest.dev/admin/cadastrarprodutos');
    
    produtosPage.cadastrarNovoProduto(
      nomeMouse, 
      '800', 
      'Mouse Gamer Ultra Leve', 
      '10', 
      'mouse-razer.jpg'
    );

    produtosPage.validarProdutoNaTabela(nomeMouse);
  });
});