# Cadastro de professores

API com Node.js, Express, TypeScript, Prisma ORM e PostgreSQL.

## Estrutura

- `backend/src/server.ts`: configuração e inicialização do servidor.
- `backend/src/routes.ts`: rota de cadastro.
- `backend/src/controllers/professor/`: recebimento da requisição e envio da resposta.
- `backend/src/services/professor/`: cadastro utilizando o Prisma.
- `backend/src/schemas/` e `backend/src/middlewares/`: validação dos campos obrigatórios.
- `backend/src/prisma/`: conexão com o banco de dados.
- `backend/prisma/`: entidade Professor e migration.

## Executar

Requisitos: Node.js 24 e PostgreSQL em execução com um banco chamado `professores`.

Na pasta `backend`, execute:

```powershell
npm ci
Copy-Item .env.example .env
```

Configure o arquivo `.env` com os dados da conexão:

```dotenv
PORT=3333
DATABASE_URL="postgresql://postgres:SUA_SENHA@localhost:5432/professores?schema=public"
```

Em seguida:

```powershell
npm run prisma:migrate
npm run prisma:generate
npm run dev
```

## Cadastro

`POST http://localhost:3333/professores`

Cabeçalho: `Content-Type: application/json`.

```json
{
  "nome": "Maria Oliveira Santos",
  "email": "maria.oliveira@example.com",
  "disciplina": "Matemática",
  "telefone": "(17) 99999-1234"
}
```

A resposta retorna status `201` com os dados cadastrados e o `id` UUID gerado pelo Prisma.
