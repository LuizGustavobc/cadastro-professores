CREATE SCHEMA IF NOT EXISTS "public";

CREATE TABLE "professores" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "disciplina" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "professores_pkey" PRIMARY KEY ("id")
);
