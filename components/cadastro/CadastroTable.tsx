/**
 * Tabela de Cadastro de clientes (Figma 23-3105).
 * Colunas: NOME/TELEFONE (nome + telefone + WhatsApp), APARELHO, AGENDAMENTOS,
 * FINALIZADOS, CANCELADOS, FALTAS, AÇÃO. Cabeçalhos com ícone de ordenação.
 */

import React from "react";
import { IconChevronUpDown, IconWhatsApp } from "@/components/ui/Icons";

export interface CadastroRow {
  id: string;
  nome: string;
  telefone: string;
  aparelho: "Web" | "Iphone" | "Android";
  agendamentos: number;
  finalizados: number;
  cancelados: number;
  faltas: number;
}

export interface CadastroTableProps {
  data: CadastroRow[];
  onVisualizar?: (id: string) => void;
}

const sortIcon = (
  <span className="ml-1 inline-block text-gray-400" aria-hidden>
    <IconChevronUpDown className="h-4 w-4" />
  </span>
);

export function CadastroTable({ data, onVisualizar }: CadastroTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Nome/Telefone
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Aparelho
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Agendamentos
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Finalizados
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Cancelados
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Faltas
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
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">{row.nome}</span>
                  <span className="flex items-center gap-1.5 text-sm text-gray-500">
                    {row.telefone}
                    <span className="text-[var(--color-green)]" aria-hidden>
                      <IconWhatsApp className="h-4 w-4" />
                    </span>
                  </span>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.aparelho}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.agendamentos}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.finalizados}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.cancelados}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.faltas}
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
                  <a
                    href={`/dashboard/cadastro/${row.id}`}
                    className="text-sm font-medium text-[var(--color-primary)] hover:underline"
                  >
                    Visualizar
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
