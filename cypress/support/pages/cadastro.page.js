class ProdutosPage {
  // --- Elementos do MENU (Topo) ---
  get menuCadastrarProdutos() { return '//a[@data-testid="cadastrar-produtos"]'; }

  // --- Elementos para Cadastro de PRODUTOS ---
  get inputNome() { return '//input[@data-testid="nome"]'; }
  get inputPreco() { return '//input[@data-testid="preco"]'; }
  get inputDesc() { return '//textarea[@data-testid="descricao"]'; }
  get inputQtd() { return '//input[@data-testid="quantity"]'; }
  get inputImagem() { return '//input[@id="imagem"]'; } 
  get btnCadastrar() { return '//button[@data-testid="cadastarProdutos"]'; }

  // --- Elementos para Cadastro de USUÁRIOS ---
  get inputNomeUser() { return '//input[@data-testid="nome"]'; }
  get inputEmailUser() { return '//input[@data-testid="email"]'; }
  get inputSenhaUser() { return '//input[@data-testid="password"]'; }
  get checkboxAdmin() { return '//input[@data-testid="checkbox"]'; }
  get btnSalvarUser() { return '//button[@data-testid="cadastrarUsuario"]'; }

  // --- Métodos de Negócio ---
  navegarParaCadastroDeProdutos() {
    cy.xpath(this.menuCadastrarProdutos).click();
  }

  cadastrarNovoProduto(nome, preco, desc, qtd, nomeArquivo) {
    cy.xpath(this.inputNome).type(nome);
    cy.xpath(this.inputPreco).type(preco);
    cy.xpath(this.inputDesc).type(desc);
    cy.xpath(this.inputQtd).type(qtd);
    cy.xpath(this.inputImagem).selectFile(`cypress/fixtures/${nomeArquivo}`);
    cy.xpath(this.btnCadastrar).click();
  }

  validarProdutoNaTabela(nome) {
    cy.url().should('include', '/admin/listarprodutos');
    cy.xpath(`//td[contains(text(), "${nome}")]`).should('be.visible');
  }

  cadastrarNovoUsuario(nome, email, senha) {
    cy.xpath(this.inputNomeUser).type(nome);
    cy.xpath(this.inputEmailUser).type(email);
    cy.xpath(this.inputSenhaUser).type(senha);
    cy.xpath(this.checkboxAdmin).check();
    cy.xpath(this.btnSalvarUser).click();
  }
}

export default new ProdutosPage();