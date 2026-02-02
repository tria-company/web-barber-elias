/**
 * Tela Cadastro > Máquinas – design Figma APP-ELIAS, node 23-5055.
 * Banner informativo, busca "Buscar por nome", botão "Cadastrar máquinas",
 * tabela NOME, CÓDIGO, RECEBIMENTO (DÉBITO), RECEBIMENTO (CRÉDITO), STATUS, AÇÃO.
 */

import React from "react";
import { HeaderHome } from "@/components/home/HeaderHome";
import { MaquinaPageContent } from "@/components/cadastro/MaquinaPageContent";
import type { MaquinaRow } from "@/components/cadastro/MaquinaTable";

const maquinaMock: MaquinaRow[] = [
  { id: "1", nome: "Cielo", codigo: "9854", recebimentoDebito: 1, recebimentoCredito: 31, status: true },
  { id: "2", nome: "Cielo", codigo: "9854", recebimentoDebito: 1, recebimentoCredito: 31, status: true },
  { id: "3", nome: "Cielo", codigo: "9854", recebimentoDebito: 1, recebimentoCredito: 31, status: true },
  { id: "4", nome: "Cielo", codigo: "9854", recebimentoDebito: 1, recebimentoCredito: 31, status: true },
  { id: "5", nome: "Cielo", codigo: "9854", recebimentoDebito: 1, recebimentoCredito: 31, status: true },
  { id: "6", nome: "Cielo", codigo: "9854", recebimentoDebito: 1, recebimentoCredito: 31, status: true },
  { id: "7", nome: "Cielo", codigo: "9854", recebimentoDebito: 1, recebimentoCredito: 31, status: true },
  { id: "8", nome: "Cielo", codigo: "9854", recebimentoDebito: 1, recebimentoCredito: 31, status: true },
];

export default function CadastroMaquinaPage() {
  return (
    <div className="min-h-screen bg-[#F1F3F5]">
      <HeaderHome />

      <main className="relative z-10 mx-4 -mt-10 rounded-t-2xl bg-[#FFFFFF] shadow-lg md:-mt-14 md:mx-6 lg:mx-8">
        <div className="p-6 md:p-8">
          <MaquinaPageContent data={maquinaMock} />
        </div>
      </main>
    </div>
  );
}
