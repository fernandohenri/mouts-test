describe('API - Autenticação', () => {

  it('Cenário 2: Deve realizar login com sucesso e retornar o token', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        "email": "fulano@qa.com",
        "password": "teste"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq('Login realizado com sucesso');
      expect(response.body).to.have.property('authorization');
    });
  });

  it('Deve retornar erro ao tentar login com credenciais inválidas', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        "email": "email_inexistente@qa.com",
        "password": "senha_errada"
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq('Email e/ou senha inválidos');
    });
  });
});