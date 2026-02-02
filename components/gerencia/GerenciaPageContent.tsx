/**
 * Conteúdo da tela Gerência (Figma 23-5154).
 * Busca "Buscar por nome", tabela Responsável, Profissional, Data e hora,
 * Valor do pagamento, Forma de pagamento, Período pago.
 */

"use client";

import React from "react";
import { GerenciaTable } from "./GerenciaTable";
import { IconSearch } from "@/components/ui/Icons";
import type { GerenciaRow } from "./GerenciaTable";

export interface GerenciaPageContentProps {
  data: GerenciaRow[];
}

export function GerenciaPageContent({ data }: GerenciaPageContentProps) {
  return (
    <>
      <div className="mb-6">
        <div className="relative max-w-md">
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
      </div>

      <GerenciaTable data={data} />
    </>
  );
}
