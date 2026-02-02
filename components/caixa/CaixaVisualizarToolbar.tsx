/**
 * Barra de ações da tela Visualizar Caixa: Voltar, status, data, Lançamento, Fechar caixa.
 * Controla a abertura do modal Lançamento caixa (Figma 23-2722).
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconArrowLeft, IconCash, IconX } from "@/components/ui/Icons";
import { LancamentoCaixaModal } from "./LancamentoCaixaModal";

export interface CaixaVisualizarToolbarProps {
  sessionInfo?: string;
}

export function CaixaVisualizarToolbar({
  sessionInfo = "21 de junho de 2021 às 21:51 por Luiz Fernando",
}: CaixaVisualizarToolbarProps) {
  const [lancamentoOpen, setLancamentoOpen] = useState(false);

  return (
    <>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/dashboard/caixa"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <IconArrowLeft />
            Voltar
          </Link>
          <span className="inline-flex rounded-full bg-[var(--color-green)] px-3 py-1 text-xs font-medium text-white">
            ABERTO
          </span>
          <span className="text-sm text-gray-600">{sessionInfo}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setLancamentoOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-[#F2A822] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#e09810]"
          >
            <IconCash />
            Lançamento
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-600"
          >
            <IconX />
            Fechar caixa
          </button>
        </div>
      </div>

      <LancamentoCaixaModal
        isOpen={lancamentoOpen}
        onClose={() => setLancamentoOpen(false)}
      />
    </>
  );
}
