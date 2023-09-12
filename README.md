# Swag Labs (E-commerce)
  
- 🇧🇷 Neste  projeto, utilizei a linguagem de programação Java Script e o framework Cypress (versão 8.7.0), como o site foi construido para realizar apenas testes, tive alguns problemas relacionados a segurança para rodar os testes na versão mais atual do cypress;

- iniciando projeto: npm init -y

- Execução cypress: npx cypress open (após abrir o cypress só escolha qual spec executar)

# Comandos terminal:

- npm install cypress@8.7.0
- npx cypress open

# Caracteristicas do projeto/framework
- no arquivo de configuração do cypress presente na pasta (cypress.json), foi adicionado um código para ignorar a segurança, sem esse código não é possivel executar o projeto pois entra em um loop de carregamento infinito que não libera a página para a execução dos testes.

# cypress.json:
{ "chromeWebSecurity": false }
