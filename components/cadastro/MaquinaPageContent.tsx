/**
 * Conteúdo da tela Cadastro > Máquinas (Figma 23-5055).
 * Banner informativo, busca "Buscar por nome", botão "Cadastrar máquinas" (abre modal Figma 23-4851), tabela de máquinas.
 */

"use client";

import React, { useState } from "react";
import { MaquinaTable } from "./MaquinaTable";
import { CadastroMaquinaModal } from "./CadastroMaquinaModal";
import { IconInfo, IconPlus, IconSearch } from "@/components/ui/Icons";
import type { MaquinaRow } from "./MaquinaTable";

const BANNER_TEXT =
  "Atenção: Para que o Barber Tech possa realizar todos os cálculos de maneira eficiente e diminuir a probabilidade de erros, precisamos que você faça uma antecipação no valor que será gerado em cada máquina. Lembrando que você pode selecionar e deselecionar as comandas para que se chegue ao valor aproximado que deseja antecipar.";

export interface MaquinaPageContentProps {
  data: MaquinaRow[];
}

export function MaquinaPageContent({ data }: MaquinaPageContentProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [list, setList] = useState<MaquinaRow[]>(data);

  const handleCadastrar = (form: {
    nome: string;
    codigo: string;
    descricao: string;
    quandoRecebeDebito: string;
    quandoRecebeCredito: string;
  }) => {
    const novo: MaquinaRow = {
      id: String(Date.now()),
      nome: form.nome,
      codigo: form.codigo,
      recebimentoDebito: 0,
      recebimentoCredito: 0,
      status: true,
    };
    setList((prev) => [novo, ...prev]);
  };

  return (
    <>
      <div className="mb-6 flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white" aria-hidden>
          <IconInfo className="h-5 w-5" />
        </span>
        <p className="text-sm leading-relaxed text-blue-900">
          {BANNER_TEXT}
        </p>
      </div>

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
          onClick={() => setModalOpen(true)}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-amber-100 px-4 py-2.5 text-sm font-semibold text-[var(--color-primary)] shadow-sm hover:bg-amber-200"
        >
          <IconPlus className="h-5 w-5" />
          Cadastrar máquinas
        </button>
      </div>

      <MaquinaTable data={list} />

      <CadastroMaquinaModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onCadastrar={handleCadastrar}
      />
    </>
  );
}
