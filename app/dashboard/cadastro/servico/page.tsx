/**
 * Tela Cadastro > Serviço – design Figma APP-ELIAS, node 23-4757.
 * Busca "Buscar por nome", botão "Cadastrar serviços", tabela NOME, APLICATIVO (toggle), DURAÇÃO, VALOR, AÇÃO.
 */

import React from "react";
import { HeaderHome } from "@/components/home/HeaderHome";
import { ServicoPageContent } from "@/components/cadastro/ServicoPageContent";
import type { ServicoRow } from "@/components/cadastro/ServicoTable";

const servicoMock: ServicoRow[] = [
  { id: "1", nome: "Corte", aplicativo: true, duracao: "20 minutos", valor: "R$ 45,00", descricao: "Lorem ipsum", categoria: "cabelo" },
  { id: "2", nome: "Corte", aplicativo: true, duracao: "20 minutos", valor: "R$ 45,00", descricao: "Lorem ipsum", categoria: "cabelo" },
  { id: "3", nome: "Corte", aplicativo: true, duracao: "20 minutos", valor: "R$ 45,00", descricao: "Lorem ipsum", categoria: "cabelo" },
  { id: "4", nome: "Barba", aplicativo: true, duracao: "15 minutos", valor: "R$ 25,00", descricao: "Barba completa", categoria: "barba" },
  { id: "5", nome: "Corte e Barba", aplicativo: false, duracao: "35 minutos", valor: "R$ 65,00", descricao: "Corte + barba", categoria: "cabelo" },
];

export default function CadastroServicoPage() {
  return (
    <div className="min-h-screen bg-[#F1F3F5]">
      <HeaderHome />

      <main className="relative z-10 mx-4 -mt-10 rounded-t-2xl bg-[#FFFFFF] shadow-lg md:-mt-14 md:mx-6 lg:mx-8">
        <div className="p-6 md:p-8">
          <ServicoPageContent data={servicoMock} />
        </div>
      </main>
    </div>
  );
}
