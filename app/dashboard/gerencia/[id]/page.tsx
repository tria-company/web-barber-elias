/**
 * Tela Detalhe Gerência – design Figma APP-ELIAS, node 23-5248.
 * Filtros (período, funcionário), 3 cards, tabela de comissões, COMISSÕES/OUTROS VALORES,
 * LUCRO EMPRESA / TOTAL A PAGAR / Pagar funcionário, rodapé Ver comissões.
 */

import React from "react";
import { HeaderHome } from "@/components/home/HeaderHome";
import { GerenciaDetalheContent } from "@/components/gerencia/GerenciaDetalheContent";

const gerenciaPorId: Record<
  string,
  { responsavel: string; profissional: string }
> = {
  "1": { responsavel: "Alicia Watanabe", profissional: "Carina Henriques" },
  "2": { responsavel: "Alicia Watanabe", profissional: "Carina Henriques" },
  "3": { responsavel: "Alicia Watanabe", profissional: "Carina Henriques" },
  "4": { responsavel: "Alicia Watanabe", profissional: "Carina Henriques" },
  "5": { responsavel: "Alicia Watanabe", profissional: "Carina Henriques" },
};

function getGerencia(id: string) {
  return (
    gerenciaPorId[id] ?? {
      responsavel: "Alicia Watanabe",
      profissional: "Carina Henriques",
    }
  );
}

export default async function GerenciaDetalhePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = getGerencia(id);

  return (
    <div className="min-h-screen bg-[#F1F3F5]">
      <HeaderHome />

      <main className="relative z-10 mx-4 -mt-10 rounded-t-2xl bg-[#FFFFFF] shadow-lg md:-mt-14 md:mx-6 lg:mx-8">
        <div className="p-6 md:p-8">
          <GerenciaDetalheContent
            id={id}
            responsavel={data.responsavel}
            profissional={data.profissional}
          />
        </div>
      </main>
    </div>
  );
}
