/**
 * CaixaToolbarWithModal.tsx
 *
 * Barra de controles da tela Caixa (período + Abrir caixa + Exportar)
 * e modal "Abrir caixa" aberto ao clicar no botão.
 */

"use client";

import React, { useState } from "react";
import { AbrirCaixaModal } from "./AbrirCaixaModal";
import { IconCash } from "@/components/ui/Icons";

export function CaixaToolbarWithModal() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative">
          <span
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            aria-hidden
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
          <input
            type="text"
            readOnly
            value="20 Jun até 26 Jun"
            className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-700 focus:border-[#F2A822] focus:outline-none focus:ring-1 focus:ring-[#F2A822]"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-[#F2A822] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#e09810]"
          >
            <IconCash className="h-5 w-5" />
            Abrir caixa
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Exportar
          </button>
        </div>
      </div>

      <AbrirCaixaModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={(valor, descricao) => {
          // Mock: poderia enviar para API ou atualizar lista
          console.log("Abrir caixa:", { valor, descricao });
        }}
      />
    </>
  );
}
