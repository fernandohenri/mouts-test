import loginPage from '../../support/pages/login.page';
import produtosPage from '../../support/pages/cadastro.page';

describe('Frontend - Cenário 3: Fluxo Ponta a Ponta', () => {
  const nomeUser = `QA Senior ${Date.now()}`;
  const emailUser = `mouts_qa_${Date.now()}@teste.com`;
  const nomeProduto = `Razer Mouse E2E ${Date.now()}`;

  it('Deve criar admin, deslogar, logar com novo e cadastrar produto via Menu', () => {
    loginPage.visit();
    loginPage.realizarLogin('fulano@qa.com', 'teste');
    cy.url().should('include', '/home');

    cy.visit('https://front.serverest.dev/admin/cadastrarusuarios');
    produtosPage.cadastrarNovoUsuario(nomeUser, emailUser, 'senha123');
    cy.xpath(`//td[contains(text(), "${nomeUser}")]`).should('be.visible');

    cy.xpath('//button[@data-testid="logout"]').click();

    loginPage.realizarLogin(emailUser, 'senha123');
    cy.xpath(`//h1[contains(., "${nomeUser}")]`).should('be.visible');

    produtosPage.navegarParaCadastroDeProdutos();
    produtosPage.cadastrarNovoProduto(nomeProduto, '1200', 'Mouse do Cenário 3', '20', 'mouse-razer.jpg');
    produtosPage.validarProdutoNaTabela(nomeProduto);
  });
});