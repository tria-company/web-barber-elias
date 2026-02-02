/**
 * CaixaTable.tsx
 *
 * Tabela do Caixa (Figma node 23-2213): RESPONSÁVEL, DATA/HORA, STATUS,
 * VALOR INICIAL, VALOR FINAL, AÇÃO. Cabeçalhos com ícone de ordenação.
 */

import React from "react";
import Link from "next/link";
import { IconChevronUpDown } from "@/components/ui/Icons";

export interface CaixaRow {
  id: string;
  responsavel: string;
  dataHora: string;
  status: "ABERTO" | "FECHADO";
  valorInicial: string;
  valorFinal: string;
}

const sortIcon = (
  <span className="ml-1 inline-block text-gray-400" aria-hidden>
    <IconChevronUpDown className="h-4 w-4" />
  </span>
);

export function CaixaTable({ data }: { data: CaixaRow[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Responsável
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Data/Hora
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Status
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Valor Inicial
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Valor Final
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
                {row.responsavel}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.dataHora}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                    row.status === "ABERTO"
                      ? "bg-[var(--color-green)] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.valorInicial}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.valorFinal}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <Link
                  href={`/dashboard/caixa/${row.id}`}
                  className="text-sm font-medium text-[#F2A822] hover:underline"
                >
                  Visualizar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
