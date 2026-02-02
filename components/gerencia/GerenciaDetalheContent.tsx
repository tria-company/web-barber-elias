/**
 * Conteúdo da tela Detalhe Gerência – design Figma APP-ELIAS, node 23-5248.
 * Filtros (período, funcionário), 3 cards, tabela de comissões, listas COMISSÕES/OUTROS VALORES,
 * barra LUCRO EMPRESA / TOTAL A PAGAR / Pagar funcionário, rodapé Ver comissões.
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  IconArrowLeft,
  IconCalendar,
  IconChevronDown,
  IconChevronUpDown,
} from "@/components/ui/Icons";
import { GerenciaFinalizarPagamentoModal } from "./GerenciaFinalizarPagamentoModal";

const COMISSOES_LABELS = [
  "Dinheiro:",
  "Cartão (Crédito):",
  "Cartão (Débito):",
  "Voucher:",
  "Cheque:",
  "Transferência:",
  "Cortesia:",
  "Permuta:",
  "Interpag:",
  "Cartão (Crédito Predatado):",
];

const OUTROS_VALORES_LABELS = ["Vale/Empréstimo:", "Crédito(empresa):"];

const sortIcon = (
  <span className="ml-1 inline-block text-gray-400" aria-hidden>
    <IconChevronUpDown className="h-4 w-4" />
  </span>
);

const comissoesTableMock = [
  {
    comanda: "N° 151426",
    data: "Quinta - 23:25\n15 De Julho De 2021",
    servicosProdutos: "(2/2) Corte\nR$ 10,00",
    cliente: "Joao Matos",
    valorCobrado: "R$ 8,00",
    cmTaxa: "30%\n4.00%",
    formaPagamento: "Cartão (Débito)\nxxxx",
    comissao: "R$ 10,00",
  },
  ...Array.from({ length: 4 }, (_, i) => ({
    comanda: "N° 151426",
    data: "Quinta - 23:25\n15 De Julho De 2021",
    servicosProdutos: "(2/2) Corte\nR$ 10,00",
    cliente: "Joao Matos",
    valorCobrado: "R$ 8,00",
    cmTaxa: "30%\n4.00%",
    formaPagamento: "Cartão (Débito)\nxxxx",
    comissao: "R$ 10,00",
  })),
];

export interface GerenciaDetalheContentProps {
  id: string;
  responsavel?: string;
  profissional?: string;
}

export function GerenciaDetalheContent({
  id,
  responsavel = "Alicia Watanabe",
  profissional = "Carina Henriques",
}: GerenciaDetalheContentProps) {
  const [comissoesConfirmadas, setComissoesConfirmadas] = useState<Record<string, boolean>>(() =>
    COMISSOES_LABELS.reduce((acc, label) => ({ ...acc, [label]: false }), {})
  );
  const [outrosValoresConfirmados, setOutrosValoresConfirmados] = useState<Record<string, boolean>>(() =>
    OUTROS_VALORES_LABELS.reduce((acc, label) => ({ ...acc, [label]: false }), {})
  );

  const toggleComissao = (label: string) => {
    setComissoesConfirmadas((prev) => ({ ...prev, [label]: !prev[label] }));
  };
  const toggleOutroValor = (label: string) => {
    setOutrosValoresConfirmados((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const [modalFinalizarOpen, setModalFinalizarOpen] = useState(false);
  const valorTotalComissoes = "R$ 46.000,00";

  return (
    <>
      <Link
        href="/dashboard/gerencia"
        className="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <IconArrowLeft className="h-5 w-5" />
        Voltar
      </Link>

      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white py-2.5 pl-3 pr-4">
          <IconCalendar className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            defaultValue="20 Jun até 26 Jun"
            className="w-40 border-0 bg-transparent text-sm text-gray-900 focus:outline-none focus:ring-0"
            aria-label="Período"
          />
        </div>
        <div className="relative">
          <select
            className="w-56 appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-sm text-gray-700 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
            aria-label="Selecionar funcionário"
          >
            <option>Selecionar um funcionário</option>
            <option>{profissional}</option>
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            <IconChevronDown className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
            Último pagamento realizado
          </p>
          <p className="mt-1 text-sm font-semibold text-gray-900">15/07/2021</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
            Última comanda
          </p>
          <p className="mt-1 text-sm font-semibold text-gray-900">15/07/2021</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
            Último vale gerado
          </p>
          <p className="mt-1 text-sm font-semibold text-gray-900">15/07/2021</p>
        </div>
      </div>

      <div className="mb-6 overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Comanda
                {sortIcon}
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Data
                {sortIcon}
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Serviços/Produtos
                {sortIcon}
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Cliente
                {sortIcon}
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Valor cobrado
                {sortIcon}
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                CM/Taxa
                {sortIcon}
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Forma de pagamento
                {sortIcon}
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Comissão
                {sortIcon}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {comissoesTableMock.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-900">{row.comanda}</td>
                <td className="whitespace-pre-line px-4 py-3 text-sm text-gray-600">{row.data}</td>
                <td className="whitespace-pre-line px-4 py-3 text-sm text-gray-600">
                  {row.servicosProdutos}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">{row.cliente}</td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">
                  {row.valorCobrado}
                </td>
                <td className="whitespace-pre-line px-4 py-3 text-sm text-gray-600">{row.cmTaxa}</td>
                <td className="whitespace-pre-line px-4 py-3 text-sm text-gray-600">
                  {row.formaPagamento}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-600">{row.comissao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-6 grid gap-6 sm:grid-cols-2">
        <section>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Comissões:
          </h3>
          <p className="mb-2 text-xs text-gray-500">
            Marque para confirmar a comissão para o funcionário.
          </p>
          <ul className="space-y-2">
            {COMISSOES_LABELS.map((label) => (
              <li
                key={label}
                className="flex items-center justify-between gap-3 rounded border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
              >
                <span>{label}</span>
                <span className="flex items-center gap-3">
                  <span>R$0,00</span>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={comissoesConfirmadas[label] ?? false}
                      onChange={() => toggleComissao(label)}
                      className="h-4 w-4 rounded border-gray-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                      aria-label={`Confirmar comissão ${label}`}
                    />
                    <span className="text-xs text-gray-500">Confirmar</span>
                  </label>
                </span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Outros valores:
          </h3>
          <p className="mb-2 text-xs text-gray-500">
            Marque para confirmar o valor para o funcionário.
          </p>
          <ul className="space-y-2">
            {OUTROS_VALORES_LABELS.map((label) => (
              <li
                key={label}
                className="flex items-center justify-between gap-3 rounded border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
              >
                <span>{label}</span>
                <span className="flex items-center gap-3">
                  <span>R$0,00</span>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={outrosValoresConfirmados[label] ?? false}
                      onChange={() => toggleOutroValor(label)}
                      className="h-4 w-4 rounded border-gray-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                      aria-label={`Confirmar ${label}`}
                    />
                    <span className="text-xs text-gray-500">Confirmar</span>
                  </label>
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="rounded-lg border border-gray-200 bg-gray-100 px-5 py-3 text-sm font-medium text-gray-800">
          LUCRO EMPRESA: R$ 45.000,00
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="rounded-lg bg-[var(--color-green)] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            TOTAL A PAGAR: R$ 46.000,00
          </button>
          <button
            type="button"
            onClick={() => setModalFinalizarOpen(true)}
            className="rounded-lg bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)]"
          >
            Pagar funcionário
          </button>
        </div>
      </div>

      <GerenciaFinalizarPagamentoModal
        isOpen={modalFinalizarOpen}
        onClose={() => setModalFinalizarOpen(false)}
        profissional={profissional}
        valorTotalComissoes={valorTotalComissoes}
      />

      <div className="rounded-lg bg-[var(--color-green)] px-4 py-3 text-center">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 text-sm font-medium text-white hover:opacity-90"
        >
          Ver comissões
          <IconChevronDown className="h-4 w-4" />
        </button>
      </div>
    </>
  );
}
