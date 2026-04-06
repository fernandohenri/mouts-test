describe('API E2E - Validação de Fluxo de Estoque e Carrinho', () => {
  let token;
  let productId;
  const productName = `Notebook Pro ${Date.now()}`;

  before(() => {
    cy.request('POST', 'https://serverest.dev/login', {
      email: 'fulano@qa.com',
      password: 'teste'
    }).then(res => {
      token = res.body.authorization;

      cy.request({
        method: 'DELETE',
        url: 'https://serverest.dev/carrinhos/cancelar-compra',
        headers: { authorization: token },
        failOnStatusCode: false 
      });
    });
  });

  it('Deve garantir a integridade do produto ao cancelar um carrinho', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      headers: { authorization: token },
      body: {
        nome: productName,
        preco: 5000,
        descricao: "Gamer High End",
        quantidade: 10
      }
    }).then(resProd => {
      productId = resProd.body._id;

      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/carrinhos',
        headers: { authorization: token },
        body: {
          produtos: [{ idProduto: productId, quantidade: 2 }]
        }
      }).then(resCart => {
        expect(resCart.status).to.eq(201);
        
        cy.request({
          method: 'DELETE',
          url: 'https://serverest.dev/carrinhos/cancelar-compra',
          headers: { authorization: token }
        }).then(resCancel => {
          expect(resCancel.status).to.eq(200);

          cy.request('GET', `https://serverest.dev/produtos/${productId}`).then(resFinal => {
            expect(resFinal.status).to.eq(200);
            expect(resFinal.body.quantidade).to.eq(10);
          });
        });
      });
    });
  });

  after(() => {
    if (productId) {
      cy.request({
        method: 'DELETE',
        url: `https://serverest.dev/produtos/${productId}`,
        headers: { authorization: token },
        failOnStatusCode: false
      });
    }
  });
});