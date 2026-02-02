/**
 * Tela Cadastro de clientes – design Figma APP-ELIAS, node 23-3105.
 * Busca, botão Cadastrar clientes, cards Total/Web/Iphone/Android, tabela de clientes.
 * Ao clicar em Visualizar: modal 70% da tela com fundo desfocado (Figma 23-3720).
 */

import React from "react";
import { HeaderHome } from "@/components/home/HeaderHome";
import { CadastroPageContent } from "@/components/cadastro/CadastroPageContent";
import type { CadastroRow } from "@/components/cadastro/CadastroTable";

const cadastroMock: CadastroRow[] = [
  {
    id: "1",
    nome: "Esther Howard",
    telefone: "(11) 98765-4321",
    aparelho: "Android",
    agendamentos: 12,
    finalizados: 10,
    cancelados: 1,
    faltas: 0,
  },
  {
    id: "2",
    nome: "Arlene Bosco",
    telefone: "(11) 91234-5678",
    aparelho: "Iphone",
    agendamentos: 8,
    finalizados: 8,
    cancelados: 0,
    faltas: 1,
  },
  {
    id: "3",
    nome: "Danilo Flores",
    telefone: "(11) 99876-5432",
    aparelho: "Web",
    agendamentos: 17,
    finalizados: 17,
    cancelados: 0,
    faltas: 0,
  },
  {
    id: "4",
    nome: "Carla Mendes",
    telefone: "(11) 97654-3210",
    aparelho: "Iphone",
    agendamentos: 12,
    finalizados: 11,
    cancelados: 0,
    faltas: 0,
  },
  {
    id: "5",
    nome: "Roberto Silva",
    telefone: "(11) 96543-2109",
    aparelho: "Android",
    agendamentos: 5,
    finalizados: 5,
    cancelados: 1,
    faltas: 2,
  },
];

export default function CadastroPage() {
  return (
    <div className="min-h-screen bg-[#F1F3F5]">
      <HeaderHome />

      <main className="relative z-10 mx-4 -mt-10 rounded-t-2xl bg-[#FFFFFF] shadow-lg md:-mt-14 md:mx-6 lg:mx-8">
        <div className="p-6 md:p-8">
          <CadastroPageContent data={cadastroMock} />
        </div>
      </main>
    </div>
  );
}
