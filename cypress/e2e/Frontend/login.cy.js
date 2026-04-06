import loginPage from '../../support/pages/login.page';

describe('Frontend - Cenário 1: Login e Validação de Sessão', () => {
  it('Deve realizar login e validar a chegada na Dashboard', () => {
    loginPage.visit();
    
    loginPage.realizarLogin('fulano@qa.com', 'teste');

    loginPage.validarLoginSucesso();
  });
});