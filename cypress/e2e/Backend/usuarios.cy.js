describe('API - Gestão de Usuários', () => {
  
  const uniqueEmail = `qa_test_${Date.now()}@test.com`;
  const userName = 'Fernando QA Senior';

  it('Cenário 1: Deve cadastrar um usuário e validar os dados via GET', () => {
    
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: userName,
        email: uniqueEmail,
        password: 'teste',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
      
      const idCriado = response.body._id;

      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/usuarios',
        qs: { 
          _id: idCriado,
          nome: userName,
          email: uniqueEmail
        }
      }).then((getResponse) => {
        expect(getResponse.status).to.eq(200);
        expect(getResponse.body.usuarios[0].nome).to.eq(userName);
        expect(getResponse.body.usuarios[0].email).to.eq(uniqueEmail);
      });
    });
  });
});