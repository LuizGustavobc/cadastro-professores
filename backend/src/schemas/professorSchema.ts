import { z } from "zod";

export const createProfessorSchema = z.object({
  nome: z.string().trim().min(3, "Informe o nome completo do professor."),
  email: z.string().trim().email("Informe um e-mail válido."),
  disciplina: z.string().trim().min(1, "Informe a disciplina."),
  telefone: z.string().trim().min(1, "Informe o telefone."),
});
