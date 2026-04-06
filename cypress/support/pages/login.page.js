class LoginPage {
  campoPorTestId(id) {
    return `//input[@data-testid="${id}"]`;
  }

  get btnEntrar() {
    return '//button[@data-testid="entrar"]';
  }

  get tituloBemVindo() {
    return '//h1[normalize-space()="Bem Vindo Fulano da Silva"]';  }

  get btnLogout() {
    return '//button[@data-testid="logout"]';  }

  visit() {
    cy.visit('https://front.serverest.dev/login');
  }

  realizarLogin(email, senha) {
    cy.xpath(this.campoPorTestId('email')).type(email);
    cy.xpath(this.campoPorTestId('senha')).type(senha);
    cy.xpath(this.btnEntrar).click();
  }

  validarLoginSucesso() {
    cy.url().should('include', '/admin/home');
    cy.xpath(this.tituloBemVindo).should('be.visible');
    cy.xpath(this.btnLogout).should('be.visible').and('contain', 'Logout');
  }
}

export default new LoginPage();