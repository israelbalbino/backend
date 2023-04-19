-- CreateTable
CREATE TABLE "info" (
    "id" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "saldo" TEXT NOT NULL,
    "data_lancamento" TEXT NOT NULL,

    CONSTRAINT "info_pkey" PRIMARY KEY ("id")
);
