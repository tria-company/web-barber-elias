/**
 * Relatório Faturamento (bruto) – design Figma APP-ELIAS, node 23-3001.
 * Breadcrumb Relatórios > Faturamento (bruto), período, Exportar, lista COMISSÕES por forma de pagamento.
 */

import React from "react";
import Link from "next/link";
import { HeaderHome } from "@/components/home/HeaderHome";
import { IconArrowLeft, IconArrowDownTray, IconCalendar } from "@/components/ui/Icons";

const comissoesMock = [
  { forma: "Dinheiro", valor: "R$ 12.500,00" },
  { forma: "Cartão (Crédito)", valor: "R$ 28.300,00" },
  { forma: "Cartão (Débito)", valor: "R$ 15.720,00" },
  { forma: "Voucher", valor: "R$ 2.100,00" },
  { forma: "Cheque", valor: "R$ 0,00" },
  { forma: "Transferência", valor: "R$ 8.450,00" },
  { forma: "Cortesia", valor: "R$ 0,00" },
  { forma: "Permuta", valor: "R$ 0,00" },
  { forma: "Interpag", valor: "R$ 3.200,00" },
  { forma: "Cartão (Crédito Predatado)", valor: "R$ 1.800,00" },
];

export default function RelatorioFaturamentoBrutoPage() {
  return (
    <div className="min-h-screen bg-[#F1F3F5]">
      <HeaderHome />

      {/* Breadcrumb – Figma: Relatórios > Faturamento (bruto) */}
      <div className="relative z-10 mx-4 border-b border-gray-200 bg-[#F1F3F5] py-3 md:mx-6 lg:mx-8">
        <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
          <Link href="/dashboard/relatorios" className="hover:text-gray-900">
            Relatórios
          </Link>
          <span className="mx-2 text-gray-400">&#62;</span>
          <span className="font-medium text-gray-900">Faturamento (bruto)</span>
        </nav>
      </div>

      <main className="relative z-10 mx-4 -mt-px rounded-t-2xl bg-[#FFFFFF] shadow-lg md:mx-6 lg:mx-8">
        <div className="p-6 md:p-8">
          {/* Toolbar: Voltar, período, Exportar – Figma 23-3001 */}
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
            </div>
            <button
              type="button"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              <IconArrowDownTray className="h-5 w-5" />
              Exportar
            </button>
          </div>

          {/* Seção COMISSÕES – lista por forma de pagamento (Figma 23-3001) */}
          <section className="rounded-lg border border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 bg-gray-50 px-6 py-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700">
                Comissões
              </h2>
            </div>
            <ul className="divide-y divide-gray-200">
              {comissoesMock.map((item, i) => (
                <li
                  key={i}
                  className="flex flex-wrap items-center justify-between gap-2 px-6 py-4 hover:bg-gray-50/50"
                >
                  <span className="text-sm font-medium text-gray-800">{item.forma}</span>
                  <span className="text-sm font-semibold text-gray-900 tabular-nums">
                    {item.valor}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
