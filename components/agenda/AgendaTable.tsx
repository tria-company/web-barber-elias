/**
 * Tabela de Agenda – agendamentos com Data, Horário, Cliente, Serviço, Profissional, Status.
 * Botão Visualizar por linha (opcional: navega para detalhe ou abre modal).
 */

"use client";

import React from "react";
import { IconChevronUpDown } from "@/components/ui/Icons";

export interface AgendaRow {
  id: string;
  data: string;
  horario: string;
  cliente: string;
  servico: string;
  profissional: string;
  status: "confirmado" | "pendente" | "realizado" | "cancelado";
}

export interface AgendaTableProps {
  data: AgendaRow[];
}

const sortIcon = (
  <span className="ml-1 inline-block text-gray-400" aria-hidden>
    <IconChevronUpDown className="h-4 w-4" />
  </span>
);

const statusLabels: Record<AgendaRow["status"], string> = {
  confirmado: "Confirmado",
  pendente: "Pendente",
  realizado: "Realizado",
  cancelado: "Cancelado",
};

const statusClass: Record<AgendaRow["status"], string> = {
  confirmado: "bg-emerald-100 text-emerald-800",
  pendente: "bg-amber-100 text-amber-800",
  realizado: "bg-gray-100 text-gray-700",
  cancelado: "bg-red-100 text-red-800",
};

export function AgendaTable({ data }: AgendaTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Data
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Horário
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Cliente
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Serviço
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Profissional
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Status
              {sortIcon}
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-600">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                {row.data}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.horario}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                {row.cliente}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.servico}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                {row.profissional}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusClass[row.status]}`}
                >
                  {statusLabels[row.status]}
                </span>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                <button
                  type="button"
                  className="font-medium text-[var(--color-primary)] hover:underline"
                >
                  Visualizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
