# Desafio de Automação Mouts - QA Engineer

Este projeto contém uma suíte de testes automatizados para a plataforma **ServeRest** (Front-end e Back-end), desenvolvida com **Cypress** utilizando o padrão **Page Objects (PoM)** e seletores **XPath**.

## Tecnologias e Ferramentas
* **Framework:** [Cypress](https://www.cypress.io/)
* **Linguagem:** JavaScript
* **Plugins:** `cypress-xpath` (para seletores dinâmicos)
* **Arquitetura:** Page Objects Model (PoM)
* **API de Teste:** [ServeRest](https://serverest.dev/)

---

## Estrutura do Projeto
O projeto está organizado para facilitar a manutenção e leitura:
* `cypress/e2e/`: Contém os arquivos de teste separados por Front-end e Back-end.
* `cypress/support/pages/`: Implementação do padrão **Page Objects**, encapsulando os seletores e as ações de cada tela.
* `cypress/fixtures/`: Arquivos estáticos utilizados nos testes (ex: imagem do Mouse Razer).
* `cypress/support/e2e.js`: Configuração global e importação de comandos customizados (XPath).

---

## Cenários Testados (Front-end)
1.  **Cenário 1 - Login:** Validação de acesso com credenciais válidas e verificação de elementos na Home com `normalize-space`.
2.  **Cenário 2 - Cadastro de Produto:** Fluxo de cadastro incluindo **Upload de Imagem** e validação dinâmica na tabela de listagem.
3.  **Cenário 3 - Fluxo de Negócio E2E:** Jornada completa do usuário:
    * Criação de um novo usuário administrador.
    * Troca de sessão (Logout/Login) com a nova credencial.
    * Navegação via menu superior.
    * Cadastro de produto e validação de persistência.

---

## Como Executar o Projeto

### Pré-requisitos
* [Node.js](https://nodejs.org/) instalado.
* [Git](https://git-scm.com/) para clonar o repositório.

### Passo a Passo
1.  **Clonar o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd [NOME_DA_PASTA]
    ```

2.  **Instalar as dependências:**
    ```bash
    npm install
    ```

3.  **Abrir o Cypress (Interface Gráfica):**
    ```bash
    npx cypress open
    ```

4.  **Executar em modo Headless (Terminal):**
    ```bash
    npx cypress run
    ```

---

## Boas Práticas Aplicadas
* **Massa de Dados Dinâmica:** Uso de `Date.now()` para evitar conflitos de dados em execuções repetidas.
* **Wait For Element:** Uso de asserções do Cypress (`should('be.visible')`) em vez de waits fixos.
* **XPaths Resilientes:** Seletores focados em `data-testid` para garantir que o teste não quebre com mudanças simples de layout.
* **Atomic Commits:** Histórico de Git organizado por funcionalidades e correções.

---
Feito por **Fernando Manco**