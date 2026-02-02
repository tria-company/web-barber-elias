/**
 * Tela Caixa – design Figma APP-ELIAS, node 23-2213.
 *
 * Mesmo layout do dashboard: header laranja + modal branco sobre fundo #F1F3F5.
 * Conteúdo: seletor de período, botões Abrir caixa e Exportar, tabela de movimentações.
 */

import React from "react";
import { HeaderHome } from "@/components/home/HeaderHome";
import { CaixaTable } from "@/components/caixa/CaixaTable";
import { CaixaToolbarWithModal } from "@/components/caixa/CaixaToolbarWithModal";
import type { CaixaRow } from "@/components/caixa/CaixaTable";

const caixaMock: CaixaRow[] = [
  {
    id: "1",
    responsavel: "Luiz Fernando",
    dataHora: "21 de junho de 2021 às 21:51",
    status: "ABERTO",
    valorInicial: "R$ 45.000,00",
    valorFinal: "R$ 45.000,00",
  },
  {
    id: "2",
    responsavel: "Escobar Magalhães",
    dataHora: "20 de junho de 2021 às 21:51",
    status: "FECHADO",
    valorInicial: "R$ 45.000,00",
    valorFinal: "R$ 45.000,00",
  },
  {
    id: "3",
    responsavel: "Luiz Fernando",
    dataHora: "19 de junho de 2021 às 09:00",
    status: "FECHADO",
    valorInicial: "R$ 50.000,00",
    valorFinal: "R$ 52.340,00",
  },
];

export default function CaixaPage() {
  return (
    <div className="min-h-screen bg-[#F1F3F5]">
      <HeaderHome />

      <main className="relative z-10 mx-4 -mt-10 rounded-t-2xl bg-[#FFFFFF] shadow-lg md:-mt-14 md:mx-6 lg:mx-8">
        <div className="p-6 md:p-8">
          <CaixaToolbarWithModal />

          {/* Tabela do Caixa */}
          <CaixaTable data={caixaMock} />
        </div>
      </main>
    </div>
  );
}
