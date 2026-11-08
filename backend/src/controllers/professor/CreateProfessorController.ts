import { Request, Response } from "express";
import { CreateProfessorService } from "../../services/professor/CreateProfessorService";

class CreateProfessorController {
  async handle(request: Request, response: Response) {
    const { nome, email, disciplina, telefone } = request.body;
    const createProfessorService = new CreateProfessorService();

    const professor = await createProfessorService.execute({
      nome,
      email,
      disciplina,
      telefone,
    });

    return response.status(201).json(professor);
  }
}

export { CreateProfessorController };
