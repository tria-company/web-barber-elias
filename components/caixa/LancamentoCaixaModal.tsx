/**
 * Modal "Lançamento caixa" – design Figma APP-ELIAS, node 23-2722.
 * Abas Receita | Despesas e cartões Aporte (ativo) e Venda de produto (Avulsos).
 * Ao clicar em Aporte: formulário Aporte (Figma node 23-2394).
 */

"use client";

import React, { useState } from "react";
import {
  IconArrowLeft,
  IconCash,
  IconChevronDown,
  IconMinus,
  IconPercent,
  IconShoppingBag,
  IconUser,
  IconX,
} from "@/components/ui/Icons";

export interface LancamentoCaixaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmAporte?: (valor: string, formaPagamento: string, descricao: string) => void;
}

type TabType = "receita" | "despesas";
type ViewType = "cards" | "aporte";

const formasPagamento = [
  "Dinheiro",
  "Cartão (Crédito)",
  "Cartão (Débito)",
  "Voucher",
  "Cheque",
  "Transferência",
  "Cortesia",
  "Permuta",
  "Interpag",
  "Crédito cliente",
];

export function LancamentoCaixaModal({ isOpen, onClose, onConfirmAporte }: LancamentoCaixaModalProps) {
  const [tab, setTab] = useState<TabType>("receita");
  const [view, setView] = useState<ViewType>("cards");
  const [valor, setValor] = useState("0,00");
  const [formaPagamento, setFormaPagamento] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleClose = () => {
    setView("cards");
    setValor("0,00");
    setFormaPagamento("");
    setDescricao("");
    onClose();
  };

  const handleVoltarAporte = () => {
    setView("cards");
    setValor("0,00");
    setFormaPagamento("");
    setDescricao("");
  };

  const handleConfirmarAporte = () => {
    onConfirmAporte?.(valor, formaPagamento, descricao);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        aria-hidden
        onClick={handleClose}
      />
      <div
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-lg flex-col bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lancamento-caixa-title"
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-400 text-white shadow-md hover:bg-slate-500"
          aria-label="Fechar"
        >
          <IconX />
        </button>

        <div className="flex flex-1 flex-col overflow-auto p-8 pt-16">
          <h2 id="lancamento-caixa-title" className="mb-4 text-xl font-bold text-gray-800">
            Lançamento caixa
          </h2>

          {view === "cards" ? (
            <>
              {/* Abas: Receita | Despesas – Figma 23-2722 / 23-2820 */}
              <div className="mb-6 flex border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => setTab("receita")}
                  className={`border-b-2 px-1 pb-3 pt-0.5 text-sm font-medium transition-colors ${
                    tab === "receita"
                      ? "border-[#F2A822] text-[#F2A822]"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Receita
                </button>
                <button
                  type="button"
                  onClick={() => setTab("despesas")}
                  className={`ml-6 border-b-2 px-1 pb-3 pt-0.5 text-sm font-medium transition-colors ${
                    tab === "despesas"
                      ? "border-[#F2A822] text-[#F2A822]"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Despesas
                </button>
              </div>

              {tab === "receita" ? (
                /* Cartões Receita: Aporte (ativo) e Venda de produto */
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setView("aporte")}
                    className="flex flex-1 flex-col items-center justify-center gap-3 rounded-xl bg-[var(--color-green)] px-6 py-8 text-white shadow-md hover:bg-[var(--color-green-dark)]"
                  >
                    <IconCash className="h-10 w-10" />
                    <span className="text-base font-bold">Aporte</span>
                  </button>
                  <button
                    type="button"
                    className="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-100 px-6 py-8 text-gray-500 shadow-sm hover:bg-gray-200"
                  >
                    <IconPercent className="h-10 w-10 text-gray-400" />
                    <span className="text-base font-bold text-gray-600">Venda de produto</span>
                    <span className="text-sm text-gray-400">Avulsos</span>
                  </button>
                </div>
              ) : (
                /* Cartões Despesas – Figma node 23-2820: Sangria, Despesas, Vale funcionário, Compra de produto */
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex flex-col items-center justify-center gap-3 rounded-xl bg-[var(--color-green)] px-4 py-6 text-white shadow-md hover:bg-[var(--color-green-dark)] sm:py-8"
                  >
                    <IconCash className="h-10 w-10" />
                    <span className="text-center text-sm font-bold sm:text-base">Sangria</span>
                  </button>
                  <button
                    type="button"
                    className="flex flex-col items-center justify-center gap-3 rounded-xl bg-[var(--color-green)] px-4 py-6 text-white shadow-md hover:bg-[var(--color-green-dark)] sm:py-8"
                  >
                    <IconMinus className="h-10 w-10" />
                    <span className="text-center text-sm font-bold sm:text-base">Despesas</span>
                  </button>
                  <button
                    type="button"
                    className="flex flex-col items-center justify-center gap-3 rounded-xl bg-[var(--color-green)] px-4 py-6 text-white shadow-md hover:bg-[var(--color-green-dark)] sm:py-8"
                  >
                    <IconUser className="h-10 w-10" />
                    <span className="text-center text-sm font-bold sm:text-base">Vale funcionário</span>
                  </button>
                  <button
                    type="button"
                    className="flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-100 px-4 py-6 text-gray-500 shadow-sm hover:bg-gray-200 sm:py-8"
                  >
                    <IconShoppingBag className="h-10 w-10 text-gray-400" />
                    <span className="text-center text-sm font-bold text-gray-600 sm:text-base">Compra de produto</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Formulário Aporte – Figma node 23-2394 */
            <>
              <button
                type="button"
                onClick={handleVoltarAporte}
                className="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <IconArrowLeft />
                Voltar
              </button>

              <h3 className="mb-6 text-base font-bold text-gray-800">Aporte</h3>

              <div className="flex flex-col gap-6">
                <div>
                  <label htmlFor="aporte-valor" className="mb-2 block text-sm font-medium text-gray-700">
                    Valor em dinheiro
                  </label>
                  <div className="flex overflow-hidden rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-[#F2A822] focus-within:ring-offset-0">
                    <span className="flex items-center bg-gray-50 px-4 text-sm font-medium text-gray-600">
                      R$
                    </span>
                    <input
                      id="aporte-valor"
                      type="text"
                      value={valor}
                      onChange={(e) => setValor(e.target.value)}
                      className="min-w-0 flex-1 border-0 py-3 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0"
                      placeholder="0,00"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="aporte-forma" className="mb-2 block text-sm font-medium text-gray-700">
                    Forma de pagamento
                  </label>
                  <div className="relative">
                    <select
                      id="aporte-forma"
                      value={formaPagamento}
                      onChange={(e) => setFormaPagamento(e.target.value)}
                      className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-3 pl-4 pr-10 text-gray-900 focus:border-[#F2A822] focus:outline-none focus:ring-2 focus:ring-[#F2A822] focus:ring-offset-0"
                    >
                      <option value="">Selecione a forma de pagamento</option>
                      {formasPagamento.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                      <IconChevronDown className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="aporte-descricao" className="mb-2 block text-sm font-medium text-gray-700">
                    Descrição
                  </label>
                  <textarea
                    id="aporte-descricao"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 py-3 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F2A822] focus:ring-offset-0"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleVoltarAporte}
                  className="rounded-lg border-2 border-[#F2A822] bg-white px-5 py-2.5 text-sm font-medium text-[#F2A822] hover:bg-amber-50"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleConfirmarAporte}
                  className="rounded-lg bg-[#F2A822] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#e09810]"
                >
                  Confirmar
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
