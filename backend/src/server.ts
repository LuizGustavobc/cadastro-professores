import "dotenv/config";
import express, { ErrorRequestHandler } from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

const errorHandler: ErrorRequestHandler = (error: unknown, _request, response, _next) => {
  if (error instanceof SyntaxError && "status" in error && error.status === 400) {
    response.status(400).json({ error: "O corpo da requisição deve ser um JSON válido." });
    return;
  }

  console.error(error);
  response.status(500).json({ error: "Não foi possível cadastrar o professor." });
};

app.use(errorHandler);

const port = Number(process.env.PORT) || 3333;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
