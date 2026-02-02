/**
 * Tabela de Gerência (Figma 23-5154).
 * Colunas: RESPONSÁVEL, PROFISSIONAL, DATA E HORA, VALOR DO PAGAMENTO (alinhado à direita),
 * FORMA DE PAGAMENTO, PERIODO PAGO. Cabeçalhos com ícone de ordenação.
 * Clique na linha navega para /dashboard/gerencia/[id].
 */

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IconChevronUpDown } from "@/components/ui/Icons";

export interface GerenciaRow {
  id: string;
  responsavel: string;
  profissional: string;
  dataHora: string;
  valorPagamento: string;
  formaPagamento: string;
  periodoPago: string;
}

export interface GerenciaTableProps {
  data: GerenciaRow[];
}

const sortIcon = (
  <span className="ml-1 inline-block text-gray-400" aria-hidden>
    <IconChevronUpDown className="h-4 w-4" />
  </span>
);

export function GerenciaTable({ data }: GerenciaTableProps) {
  const router = useRouter();

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
              Profissional
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Data e hora
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-600">
              Valor do pagamento
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Forma de pagamento
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Período pago
              {sortIcon}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((row) => (
            <tr
              key={row.id}
              role="button"
              tabIndex={0}
              onClick={() => router.push(`/dashboard/gerencia/${row.id}`)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  router.push(`/dashboard/gerencia/${row.id}`);
                }
              }}
              className="cursor-pointer hover:bg-gray-50"
            >
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                {row.responsavel}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.profissional}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.dataHora}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-600">
                {row.valorPagamento}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.formaPagamento}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.periodoPago}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
