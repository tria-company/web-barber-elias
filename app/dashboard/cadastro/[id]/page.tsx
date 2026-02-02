/**
 * Tela Visualizar Cadastro de cliente – design Figma APP-ELIAS, node 23-3242.
 * Perfil do cliente: avatar, nome, stats (Agendamentos, Finalizados, Cancelados, Faltas),
 * abas Dados pessoais | Histórico, toggle Agendamento pelo aplicativo,
 * formulário Dados gerais + Endereço (E-mail + Reenviar), Remover cliente + Salvar.
 */

import React from "react";
import { HeaderHome } from "@/components/home/HeaderHome";
import { CadastroClienteVisualizarContent } from "@/components/cadastro/CadastroClienteVisualizarContent";

const clientMockPorId: Record<
  string,
  { nome: string; agendamentos: number; finalizados: number; cancelados: number; faltas: number; agendamentoPeloApp?: boolean }
> = {
  "1": { nome: "Esther Howard", agendamentos: 12, finalizados: 10, cancelados: 1, faltas: 0 },
  "2": { nome: "Arlene Bosco", agendamentos: 8, finalizados: 8, cancelados: 0, faltas: 1 },
  "3": { nome: "Danilo Flores", agendamentos: 17, finalizados: 17, cancelados: 0, faltas: 0 },
  "4": { nome: "Carla Mendes", agendamentos: 12, finalizados: 11, cancelados: 0, faltas: 0 },
  "5": { nome: "Roberto Silva", agendamentos: 5, finalizados: 5, cancelados: 1, faltas: 2 },
};

function getClient(id: string) {
  return (
    clientMockPorId[id] ?? {
      nome: "Carlos Brito",
      agendamentos: 27,
      finalizados: 0,
      cancelados: 0,
      faltas: 0,
      agendamentoPeloApp: true,
    }
  );
}

export default async function CadastroClienteVisualizarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = getClient(id);

  return (
    <div className="min-h-screen bg-[#F1F3F5]">
      <HeaderHome />

      <main className="relative z-10 mx-4 -mt-10 rounded-t-2xl bg-[#FFFFFF] shadow-lg md:-mt-14 md:mx-6 lg:mx-8">
        <div className="p-6 md:p-8">
          <CadastroClienteVisualizarContent
            id={id}
            nome={data.nome}
            agendamentos={data.agendamentos}
            finalizados={data.finalizados}
            cancelados={data.cancelados}
            faltas={data.faltas}
            agendamentoPeloApp={data.agendamentoPeloApp}
          />
        </div>
      </main>
    </div>
  );
}
