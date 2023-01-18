# Teste Prático - QA Ploomes 💻

## Instruções de uso

Você pode clonar o repositório ou baixar o arquivo ZIP. Depois, execute o comando:

```bash
npm install
```

Para rodar os testes em 'window mode' você pode executar o comando:

```bash
npm run cy:open
```

Para rodar os testes em modo 'headless', execute:

```bash
npm run test
```

## Implementação

### 👨‍💻 Framework

Cypress

### 💾 Elementos testados

- Testes de API:

  - CRUD em Clientes (/Contacts)
  - CRUD em Negócios (/Deals)

- Teste no Front-end:
  - Login do sistema
  - CRUD em Clientes
  - CRUD em Negócios
  - CRUD em Produtos

## Limitações

- A maioria dos elementos HTML não possuem seletores específicos para testes (por exemplo: "data-test", "data-testid" ou "data-cy"), dificultando a seleção de elementos e tornando-a menos robusta e confiável.
- No geral, o login na plataforma gerava muitas mensagens de erro no console, afetando o desempenho dos testes em termos de velocidade.

## Próximos passos para a evolução do sistema

- Criar seletores específicos para testes nos elementos HTML da página, o que tornaria os cenários de testes mais confiáveis e evitaria erros.
- Refinar as respostas e status codes da API (algumas respostas são genéricas e dificultam a identificação do problema).
