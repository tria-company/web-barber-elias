/**
 * Tela Visualizar serviço – design Figma APP-ELIAS, node 23-4649.
 * Formulário de visualização/edição: título "Visualizar serviço", toggle Aplicativo,
 * Nome, Descrição, Preço (R$), Duração, Categoria, botões Cancelar e Salvar.
 */

import React from "react";
import { HeaderHome } from "@/components/home/HeaderHome";
import { ServicoVisualizarContent } from "@/components/cadastro/ServicoVisualizarContent";

interface ServicoDetail {
  id: string;
  nome: string;
  descricao: string;
  valor: string;
  duracao: string;
  categoria: string;
  aplicativo: boolean;
}

const servicoPorId: Record<string, ServicoDetail> = {
  "1": {
    id: "1",
    nome: "Corte",
    descricao: "Lorem ipsum",
    valor: "35,00",
    duracao: "20 minutos",
    categoria: "cabelo",
    aplicativo: true,
  },
  "2": {
    id: "2",
    nome: "Corte",
    descricao: "Lorem ipsum",
    valor: "45,00",
    duracao: "20 minutos",
    categoria: "cabelo",
    aplicativo: true,
  },
  "3": {
    id: "3",
    nome: "Corte",
    descricao: "Lorem ipsum",
    valor: "45,00",
    duracao: "20 minutos",
    categoria: "cabelo",
    aplicativo: true,
  },
  "4": {
    id: "4",
    nome: "Barba",
    descricao: "Barba completa",
    valor: "25,00",
    duracao: "15 minutos",
    categoria: "barba",
    aplicativo: true,
  },
  "5": {
    id: "5",
    nome: "Corte e Barba",
    descricao: "Corte + barba",
    valor: "65,00",
    duracao: "35 minutos",
    categoria: "cabelo",
    aplicativo: false,
  },
};

function getServico(id: string): ServicoDetail {
  return (
    servicoPorId[id] ?? {
      id,
      nome: "Corte",
      descricao: "Lorem ipsum",
      valor: "35,00",
      duracao: "20 minutos",
      categoria: "",
      aplicativo: false,
    }
  );
}

export default async function ServicoVisualizarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = getServico(id);

  return (
    <div className="min-h-screen bg-[#F1F3F5]">
      <HeaderHome />

      <main className="relative z-10 mx-4 -mt-10 rounded-t-2xl bg-[#FFFFFF] shadow-lg md:-mt-14 md:mx-6 lg:mx-8">
        <div className="p-6 md:p-8">
          <ServicoVisualizarContent
            id={data.id}
            nome={data.nome}
            descricao={data.descricao}
            valor={data.valor}
            duracao={data.duracao}
            categoria={data.categoria}
            aplicativo={data.aplicativo}
          />
        </div>
      </main>
    </div>
  );
}
