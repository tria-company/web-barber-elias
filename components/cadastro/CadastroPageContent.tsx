/**
 * Conteúdo da tela Cadastro de clientes (Figma 23-3105).
 * Busca, botão Cadastrar clientes, 4 cards (Total, Web, Iphone, Android), tabela e modal Visualizar.
 */

"use client";

import React from "react";
import { CadastroTable } from "./CadastroTable";
import { IconArrowUp, IconSearch, IconUsers } from "@/components/ui/Icons";
import type { CadastroRow } from "./CadastroTable";

const statsCards = [
  { title: "Total", value: 698 },
  { title: "Web", value: 98 },
  { title: "Iphone", value: 300 },
  { title: "Android", value: 300 },
];

export interface CadastroPageContentProps {
  data: CadastroRow[];
}

export function CadastroPageContent({ data }: CadastroPageContentProps) {
  return (
    <>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-md">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <IconSearch className="h-5 w-5" />
          </span>
          <input
            type="search"
            placeholder="Buscar clientes"
            className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
            aria-label="Buscar clientes"
          />
        </div>
        <button
          type="button"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-amber-100 px-4 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-amber-200"
        >
          <IconUsers className="h-5 w-5" />
          Cadastrar clientes
        </button>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-gray-500">{card.title}</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">{card.value}</p>
            <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
              <span className="text-[var(--color-green)]">
                <IconArrowUp className="h-4 w-4" />
              </span>
              10% vs mês anterior
            </p>
          </div>
        ))}
      </div>

      <CadastroTable data={data} />
    </>
  );
}
