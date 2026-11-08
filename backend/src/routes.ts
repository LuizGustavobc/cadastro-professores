import { Router } from "express";
import { CreateProfessorController } from "./controllers/professor/CreateProfessorController";
import { validateSchema } from "./middlewares/validateSchema";
import { createProfessorSchema } from "./schemas/professorSchema";

const router = Router();

router.post(
  "/professores",
  validateSchema(createProfessorSchema),
  new CreateProfessorController().handle,
);

export { router };
