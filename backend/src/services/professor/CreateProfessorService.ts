import prismaClient from "../../prisma";

interface ProfessorRequest {
  nome: string;
  email: string;
  disciplina: string;
  telefone: string;
}

class CreateProfessorService {
  async execute({ nome, email, disciplina, telefone }: ProfessorRequest) {
    const professor = await prismaClient.professor.create({
      data: {
        nome,
        email,
        disciplina,
        telefone,
      },
    });

    return professor;
  }
}

export { CreateProfessorService };
