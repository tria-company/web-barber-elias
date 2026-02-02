/**
 * Tela Gerência – design Figma APP-ELIAS, node 23-5154.
 * Busca "Buscar por nome", tabela Responsável, Profissional, Data e hora,
 * Valor do pagamento, Forma de pagamento, Período pago.
 */

import React from "react";
import { HeaderHome } from "@/components/home/HeaderHome";
import { GerenciaPageContent } from "@/components/gerencia/GerenciaPageContent";
import type { GerenciaRow } from "@/components/gerencia/GerenciaTable";

const gerenciaMock: GerenciaRow[] = [
  {
    id: "1",
    responsavel: "Alicia Watanabe",
    profissional: "Carina Henriques",
    dataHora: "21/08/2021 às 21:51",
    valorPagamento: "R$ 250,00",
    formaPagamento: "Dinheiro",
    periodoPago: "21/08/2021 - 31/08/2021",
  },
  {
    id: "2",
    responsavel: "Alicia Watanabe",
    profissional: "Carina Henriques",
    dataHora: "21/08/2021 às 21:51",
    valorPagamento: "R$ 250,00",
    formaPagamento: "Dinheiro",
    periodoPago: "21/08/2021 - 31/08/2021",
  },
  {
    id: "3",
    responsavel: "Alicia Watanabe",
    profissional: "Carina Henriques",
    dataHora: "21/08/2021 às 21:51",
    valorPagamento: "R$ 250,00",
    formaPagamento: "Dinheiro",
    periodoPago: "21/08/2021 - 31/08/2021",
  },
  {
    id: "4",
    responsavel: "Alicia Watanabe",
    profissional: "Carina Henriques",
    dataHora: "21/08/2021 às 21:51",
    valorPagamento: "R$ 250,00",
    formaPagamento: "Cartão",
    periodoPago: "21/08/2021 - 31/08/2021",
  },
  {
    id: "5",
    responsavel: "Alicia Watanabe",
    profissional: "Carina Henriques",
    dataHora: "21/08/2021 às 21:51",
    valorPagamento: "R$ 250,00",
    formaPagamento: "Dinheiro",
    periodoPago: "21/08/2021 - 31/08/2021",
  },
];

export default function GerenciaPage() {
  return (
    <div className="min-h-screen bg-[#F1F3F5]">
      <HeaderHome />

      <main className="relative z-10 mx-4 -mt-10 rounded-t-2xl bg-[#FFFFFF] shadow-lg md:-mt-14 md:mx-6 lg:mx-8">
        <div className="p-6 md:p-8">
          <GerenciaPageContent data={gerenciaMock} />
        </div>
      </main>
    </div>
  );
}
