import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export function validateSchema(schema: z.ZodType) {
  return (request: Request, response: Response, next: NextFunction): void => {
    const result = schema.safeParse(request.body);

    if (!result.success) {
      response.status(400).json({
        error: "Dados inválidos.",
        details: result.error.issues.map((issue) => ({
          campo: issue.path.join("."),
          mensagem: issue.message,
        })),
      });
      return;
    }

    request.body = result.data;
    next();
  };
}
