/**
 * Tabela de Serviços (Figma 23-4757).
 * Colunas: NOME, APLICATIVO (toggle), DURAÇÃO, VALOR, AÇÃO.
 * Cabeçalhos com ícone de ordenação.
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconChevronUpDown } from "@/components/ui/Icons";

export interface ServicoRow {
  id: string;
  nome: string;
  aplicativo: boolean;
  duracao: string;
  valor: string;
  descricao?: string;
  categoria?: string;
}

export interface ServicoTableProps {
  data: ServicoRow[];
  onToggleAplicativo?: (id: string, value: boolean) => void;
  /** Quando informado, "Visualizar" abre o modal em vez de navegar para a página. */
  onVisualizar?: (id: string) => void;
}

const sortIcon = (
  <span className="ml-1 inline-block text-gray-400" aria-hidden>
    <IconChevronUpDown className="h-4 w-4" />
  </span>
);

function Toggle({
  checked,
  onChange,
  id,
  ariaLabel,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  id: string;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={() => onChange(!checked)}
      className="inline-flex"
    >
      <span
        className={`inline-flex h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? "bg-[var(--color-primary)]" : "bg-gray-300"
        }`}
      >
        <span
          className={`mt-0.5 ml-0.5 inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </span>
    </button>
  );
}

export function ServicoTable({ data, onToggleAplicativo, onVisualizar }: ServicoTableProps) {
  const [localAplicativo, setLocalAplicativo] = useState<Record<string, boolean>>(() =>
    data.reduce((acc, row) => ({ ...acc, [row.id]: row.aplicativo }), {})
  );

  const getAplicativo = (id: string) => localAplicativo[id] ?? data.find((r) => r.id === id)?.aplicativo ?? false;

  const handleToggle = (id: string, value: boolean) => {
    setLocalAplicativo((prev) => ({ ...prev, [id]: value }));
    onToggleAplicativo?.(id, value);
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Nome
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Aplicativo
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Duração
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Valor
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Ação
              {sortIcon}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                {row.nome}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <Toggle
                  checked={getAplicativo(row.id)}
                  onChange={(v) => handleToggle(row.id, v)}
                  id={`aplicativo-${row.id}`}
                  ariaLabel={`Serviço ${row.nome} no aplicativo`}
                />
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.duracao}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.valor}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                {onVisualizar ? (
                  <button
                    type="button"
                    onClick={() => onVisualizar(row.id)}
                    className="text-sm font-medium text-[var(--color-primary)] hover:underline"
                  >
                    Visualizar
                  </button>
                ) : (
                  <Link
                    href={`/dashboard/cadastro/servico/${row.id}`}
                    className="text-sm font-medium text-[var(--color-primary)] hover:underline"
                  >
                    Visualizar
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
