/**
 * Modal Finalizar o pagamento – design Figma APP-ELIAS, node 23-5414.
 * Painel lateral: título, alerta azul, destinatário + valor total, data do pagamento,
 * forma de pagamento + valor, adicionar outras formas, observações, botão Pagar.
 */

"use client";

import React, { useState } from "react";
import { IconCalendar, IconChevronDown, IconInfo, IconPlus, IconUser, IconX } from "@/components/ui/Icons";

const ALERTA_VALE =
  "Atenção! Para transformar o pagamento em um vale, basta adicionar um valor superior ao que está sendo mostrado abaixo e confirmar.";

const FORMAS_PAGAMENTO = [
  { value: "", label: "Selecione a forma de pagamento" },
  { value: "dinheiro", label: "Dinheiro" },
  { value: "cartao_credito", label: "Cartão (Crédito)" },
  { value: "cartao_debito", label: "Cartão (Débito)" },
  { value: "transferencia", label: "Transferência" },
  { value: "pix", label: "PIX" },
  { value: "cheque", label: "Cheque" },
];

export interface FormaPagamentoRow {
  forma: string;
  valor: string;
}

export interface GerenciaFinalizarPagamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
  profissional: string;
  valorTotalComissoes: string;
  onPagar?: (data: { dataPagamento: string; formas: FormaPagamentoRow[]; observacoes: string }) => void;
}

export function GerenciaFinalizarPagamentoModal({
  isOpen,
  onClose,
  profissional,
  valorTotalComissoes,
  onPagar,
}: GerenciaFinalizarPagamentoModalProps) {
  const [dataPagamento, setDataPagamento] = useState("16/07/2021");
  const [formas, setFormas] = useState<FormaPagamentoRow[]>([
    { forma: "", valor: "100,00" },
  ]);
  const [observacoes, setObservacoes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPagar?.({
      dataPagamento,
      formas: formas.filter((f) => f.forma),
      observacoes,
    });
    onClose();
  };

  const addForma = () => {
    setFormas((prev) => [...prev, { forma: "", valor: "0,00" }]);
  };

  const updateForma = (index: number, field: "forma" | "valor", value: string) => {
    setFormas((prev) =>
      prev.map((f, i) => (i === index ? { ...f, [field]: value } : f))
    );
  };

  const removeForma = (index: number) => {
    if (formas.length <= 1) return;
    setFormas((prev) => prev.filter((_, i) => i !== index));
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        aria-hidden
        onClick={onClose}
      />
      <div
        className="fixed inset-y-0 right-0 z-50 flex w-[70vw] max-w-2xl flex-col overflow-hidden bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="finalizar-pagamento-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300"
          aria-label="Fechar"
        >
          <IconX className="h-5 w-5" />
        </button>

        <div className="flex flex-1 flex-col overflow-y-auto p-6 md:p-8">
          <h2 id="finalizar-pagamento-title" className="mb-4 pr-12 text-xl font-bold text-gray-900">
            Finalizar o pagamento
          </h2>

          <div className="mb-6 flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white" aria-hidden>
              <IconInfo className="h-5 w-5" />
            </span>
            <p className="text-sm leading-relaxed text-blue-900">{ALERTA_VALE}</p>
          </div>

          <div className="mb-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gray-200 bg-gray-100 text-gray-400">
                <IconUser className="h-8 w-8" />
              </div>
              <span className="text-lg font-semibold text-gray-900">{profissional}</span>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Valor total das comissões
              </p>
              <p className="mt-0.5 text-xl font-bold text-[var(--color-green)]">
                {valorTotalComissoes}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="data-pagamento" className="mb-1 block text-sm font-medium text-gray-700">
                Data do pagamento
              </label>
              <div className="flex items-center overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-offset-0">
                <span className="flex items-center pl-3 text-gray-400">
                  <IconCalendar className="h-5 w-5" />
                </span>
                <input
                  id="data-pagamento"
                  type="text"
                  value={dataPagamento}
                  onChange={(e) => setDataPagamento(e.target.value)}
                  className="min-w-0 flex-1 border-0 py-2.5 px-3 text-gray-900 focus:outline-none focus:ring-0"
                  placeholder="dd/mm/aaaa"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Forma de pagamento
              </label>
              <div className="space-y-3">
                {formas.map((f, index) => (
                  <div key={index} className="flex flex-wrap items-end gap-3">
                    <div className="relative min-w-[200px] flex-1">
                      <select
                        value={f.forma}
                        onChange={(e) => updateForma(index, "forma", e.target.value)}
                        className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-sm text-gray-700 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                        aria-label="Forma de pagamento"
                      >
                        {FORMAS_PAGAMENTO.map((opt) => (
                          <option key={opt.value || "vazio"} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <IconChevronDown className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="flex w-32 overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-offset-0">
                      <span className="flex items-center bg-gray-50 px-2 py-2.5 text-sm font-medium text-gray-600">
                        R$
                      </span>
                      <input
                        type="text"
                        value={f.valor}
                        onChange={(e) => updateForma(index, "valor", e.target.value)}
                        className="min-w-0 flex-1 border-0 py-2.5 px-2 text-sm text-gray-900 focus:outline-none focus:ring-0"
                        placeholder="0,00"
                      />
                    </div>
                    {formas.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeForma(index)}
                        className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50"
                        aria-label="Remover forma de pagamento"
                      >
                        Remover
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addForma}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
                >
                  <IconPlus className="h-4 w-4" />
                  Adicionar outras formas de pagamento
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="observacoes" className="mb-1 block text-sm font-medium text-gray-700">
                Observações
              </label>
              <textarea
                id="observacoes"
                rows={3}
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                placeholder="Observações"
              />
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="rounded-lg bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)]"
              >
                Pagar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
