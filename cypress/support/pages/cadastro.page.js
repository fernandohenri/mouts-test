class ProdutosPage {
  get inputNome() { return '//input[@data-testid="nome"]'; }
  get inputPreco() { return '//input[@data-testid="preco"]'; }
  get inputDesc() { return '//textarea[@data-testid="descricao"]'; }
  get inputQtd() { return '//input[@data-testid="quantity"]'; }
  get inputImagem() { return '//input[@id="imagem"]'; } 
  get btnCadastrar() { return '//button[@data-testid="cadastarProdutos"]'; }

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
}
export default new ProdutosPage();