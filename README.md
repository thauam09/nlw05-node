<div align="center">
  <h1>Chatty - Node WebSocket Chat</h1>
</div>

<div align="center">
  <img src="https://media.giphy.com/media/9DAod4Vc8nWarg7Zli/giphy.gif">
</div>

---

## Índice

- [Sobre 📖](#Sobre-)
- [Tecnologias Utilizadas 🚀](#Tecnologias-Utilizadas-)
- [Como Rodar o Projeto 📦](#Como-Rodar-o-Projeto-)

---

## Sobre 📖

Aplicação criada durante a semana do evento **Next Level Week** (NLW) da **RocketSeat**. A motivação do projeto foi para aprimorar meus conhecimentos em **Node** e conhecer um pouco sobre o protocolo **WebSocket**, e para isso foi desenvolvido o app **Chatty**. Trata-se principalmente de uma API em NodeJS com rotas para criação de usuários, configuração do chat para cada usuário e registro das mensagens de conversa, além é claro, do serviço WS para receber e entregar as mensagens do Chat em tempo real. Converse com as pessoas em tempo real!

**Obs:** Nesse projeto a interface gráfica foi criada minimalisticamente apenas para que fosse possível demontrar o protocolo websocket em funcionamento.

---

## Tecnologias Utilizadas 🚀

- NodeJS
- Express
- TypeORM
- Migrations
- SQLite
- Socket IO
- Typescript
- UUID

---

## Como Rodar o Projeto 📦

```bash
  # clonando o repositório
  $ git clone https://github.com/thauam09/nlw05-node

  # acessando o diretório do projeto
  $ cd nlw05-node

  # instalando as dependências
  $ yarn

  # criação do banco e execução das migrations
  $ yarn typeorm migration:run

  # rodando o projeto
  $ yarn dev

  # acessar o endereço para teste do chat como cliente
  http://localhost:3333/pages/client

  # acessar o endereço para teste do chat como admin
  http://localhost:3333/pages/admin
```

Obs: Lembrando que para a sua máquina estar apta para rodar o projeto você precisar ter o seguintes softwares instalados:

- NodeJs
- Yarn

---

Desenvolvido 🚀 por Thauã Martins
