/**
 * Relatório Serviços – Produtividade – design Figma APP-ELIAS, node 23-2927.
 * Breadcrumb Relatórios > Serviços - Produtividade, filtros (período, funcionário), Exportar, tabela.
 */

import React from "react";
import Link from "next/link";
import { HeaderHome } from "@/components/home/HeaderHome";
import {
  IconArrowLeft,
  IconArrowDownTray,
  IconCalendar,
  IconChevronDown,
  IconChevronUpDown,
} from "@/components/ui/Icons";

const sortIcon = (
  <span className="ml-1 inline-block text-gray-400" aria-hidden>
    <IconChevronUpDown className="h-4 w-4" />
  </span>
);

const rowsMock = [
  { servico: "Corte + Barba", quantidade: "456", comissao: "45", faturamento: "R$ 45.000,00", total: "R$ 246.000,00" },
  { servico: "Corte + Barba", quantidade: "456", comissao: "45", faturamento: "R$ 45.000,00", total: "R$ 246.000,00" },
  { servico: "Corte + Barba", quantidade: "456", comissao: "45", faturamento: "R$ 45.000,00", total: "R$ 246.000,00" },
];

export default function RelatorioServicosProdutividadePage() {
  return (
    <div className="min-h-screen bg-[#F1F3F5]">
      <HeaderHome />

      {/* Breadcrumb – Figma: Relatórios > Serviços - Produtividade */}
      <div className="relative z-10 mx-4 border-b border-gray-200 bg-[#F1F3F5] py-3 md:mx-6 lg:mx-8">
        <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
          <Link href="/dashboard/relatorios" className="hover:text-gray-900">
            Relatórios
          </Link>
          <span className="mx-2 text-gray-400">&#62;</span>
          <span className="font-medium text-gray-900">Serviços - Produtividade</span>
        </nav>
      </div>

      <main className="relative z-10 mx-4 -mt-px rounded-t-2xl bg-[#FFFFFF] shadow-lg md:mx-6 lg:mx-8">
        <div className="p-6 md:p-8">
          {/* Toolbar: Voltar, período, funcionário, Exportar – Figma 23-2927 */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/dashboard/relatorios"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <IconArrowLeft />
                Voltar
              </Link>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <IconCalendar className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  readOnly
                  value="20 Jun até 26 Jun"
                  className="w-full min-w-[180px] rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-700 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                  aria-label="Período"
                />
              </div>
              <div className="relative min-w-[200px]">
                <select
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-sm text-gray-700 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                  aria-label="Funcionário"
                >
                  <option value="">Selecionar um funcionário</option>
                  <option value="1">Luiz Fernando</option>
                  <option value="2">Carlos Brito</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <IconChevronDown className="h-4 w-4" />
                </span>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[var(--color-primary)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:bg-amber-50"
            >
              <IconArrowDownTray className="h-5 w-5" />
              Exportar
            </button>
          </div>

          {/* Tabela: Serviço, Quantidade, Comissão, Faturamento, Total */}
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Serviço
                    {sortIcon}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Quantidade
                    {sortIcon}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Comissão
                    {sortIcon}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Faturamento
                    {sortIcon}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Total
                    {sortIcon}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {rowsMock.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 1 ? "bg-gray-50/50" : ""}
                  >
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {row.servico}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                      {row.quantidade}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                      {row.comissao}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                      {row.faturamento}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {row.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
