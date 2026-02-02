/**
 * Conteúdo da tela Cadastro > Serviço (Figma 23-4757).
 * Busca "Buscar por nome", botão "Cadastrar serviços" (abre modal Figma 23-4541), tabela de serviços.
 */

"use client";

import React, { useState } from "react";
import { ServicoTable } from "./ServicoTable";
import { CadastroServicoModal } from "./CadastroServicoModal";
import { ServicoVisualizarModal } from "./ServicoVisualizarModal";
import { IconPlus, IconSearch } from "@/components/ui/Icons";
import type { ServicoRow } from "./ServicoTable";

export interface ServicoPageContentProps {
  data: ServicoRow[];
  onServicoCadastrado?: (row: ServicoRow) => void;
}

function toVisualizarService(row: ServicoRow) {
  return {
    id: row.id,
    nome: row.nome,
    descricao: row.descricao ?? "Lorem ipsum",
    valor: row.valor,
    duracao: row.duracao,
    categoria: row.categoria ?? "",
    aplicativo: row.aplicativo,
  };
}

export function ServicoPageContent({ data, onServicoCadastrado }: ServicoPageContentProps) {
  const [modalCadastroOpen, setModalCadastroOpen] = useState(false);
  const [selectedServico, setSelectedServico] = useState<ReturnType<typeof toVisualizarService> | null>(null);
  const [list, setList] = useState<ServicoRow[]>(data);

  const handleCadastrar = (form: {
    nome: string;
    descricao: string;
    preco: string;
    duracao: string;
    categoria: string;
    aplicativo: boolean;
  }) => {
    const novo: ServicoRow = {
      id: String(Date.now()),
      nome: form.nome,
      aplicativo: form.aplicativo,
      duracao: form.duracao,
      valor: form.preco.includes("R$") ? form.preco : `R$ ${form.preco}`,
      descricao: form.descricao || undefined,
      categoria: form.categoria || undefined,
    };
    setList((prev) => [novo, ...prev]);
    onServicoCadastrado?.(novo);
  };

  const handleVisualizar = (id: string) => {
    const row = list.find((r) => r.id === id);
    if (row) setSelectedServico(toVisualizarService(row));
  };

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-md">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <IconSearch className="h-5 w-5" />
          </span>
          <input
            type="search"
            placeholder="Buscar por nome"
            className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
            aria-label="Buscar por nome"
          />
        </div>
        <button
          type="button"
          onClick={() => setModalCadastroOpen(true)}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-amber-100 px-4 py-2.5 text-sm font-semibold text-[var(--color-primary)] shadow-sm hover:bg-amber-200"
        >
          <IconPlus className="h-5 w-5" />
          Cadastrar serviços
        </button>
      </div>

      <ServicoTable data={list} onVisualizar={handleVisualizar} />

      <CadastroServicoModal
        isOpen={modalCadastroOpen}
        onClose={() => setModalCadastroOpen(false)}
        onCadastrar={handleCadastrar}
      />

      {selectedServico && (
        <ServicoVisualizarModal
          isOpen
          onClose={() => setSelectedServico(null)}
          service={selectedServico}
        />
      )}
    </>
  );
}
