/**
 * Modal Cadastrar máquinas – design Figma APP-ELIAS, node 23-4851.
 * Painel lateral: título "Cadastrar máquinas", DADOS GERAIS (Nome, Código, Descrição,
 * Quando recebe Débito/Crédito), TAXAS CARTÃO DE CRÉDITO (tabela), Cancelar e Cadastrar.
 */

"use client";

import React, { useState } from "react";
import { IconChevronUpDown, IconX } from "@/components/ui/Icons";

export interface CadastroMaquinaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCadastrar?: (data: {
    nome: string;
    codigo: string;
    descricao: string;
    quandoRecebeDebito: string;
    quandoRecebeCredito: string;
    taxas?: { servico: string; debito: string; credito1x: string; credito2a6: string; credito7a12: string }[];
  }) => void;
}

const TAXAS_SERVICOS = [
  "MASTERCARD",
  "Visa",
  "Hipercard",
  "Elo",
  "Amex",
  "Aura",
  "Dinersclub",
  "Maestro",
];

const sortIcon = (
  <span className="ml-1 inline-block text-gray-400" aria-hidden>
    <IconChevronUpDown className="h-4 w-4" />
  </span>
);

const initialTaxa = () => ({
  debito: "0,00",
  credito1x: "0,00",
  credito2a6: "0,00",
  credito7a12: "0,00",
});

export function CadastroMaquinaModal({
  isOpen,
  onClose,
  onCadastrar,
}: CadastroMaquinaModalProps) {
  const [nome, setNome] = useState("");
  const [codigo, setCodigo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quandoRecebeDebito, setQuandoRecebeDebito] = useState("");
  const [quandoRecebeCredito, setQuandoRecebeCredito] = useState("");
  const [taxas, setTaxas] = useState<Record<string, ReturnType<typeof initialTaxa>>>(
    () => TAXAS_SERVICOS.reduce((acc, s) => ({ ...acc, [s]: initialTaxa() }), {})
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCadastrar?.({
      nome,
      codigo,
      descricao,
      quandoRecebeDebito,
      quandoRecebeCredito,
      taxas: TAXAS_SERVICOS.map((servico) => ({
        servico,
        ...taxas[servico],
        credito2a6: taxas[servico].credito2a6,
        credito7a12: taxas[servico].credito7a12,
      })),
    });
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setNome("");
    setCodigo("");
    setDescricao("");
    setQuandoRecebeDebito("");
    setQuandoRecebeCredito("");
    setTaxas(TAXAS_SERVICOS.reduce((acc, s) => ({ ...acc, [s]: initialTaxa() }), {}));
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const updateTaxa = (servico: string, field: keyof ReturnType<typeof initialTaxa>, value: string) => {
    setTaxas((prev) => ({
      ...prev,
      [servico]: { ...prev[servico], [field]: value },
    }));
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        aria-hidden
        onClick={handleClose}
      />
      <div
        className="fixed inset-y-0 right-0 z-50 flex w-[70vw] max-w-4xl flex-col overflow-hidden bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cadastro-maquina-title"
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300"
          aria-label="Fechar"
        >
          <IconX className="h-5 w-5" />
        </button>

        <div className="flex flex-1 flex-col overflow-y-auto p-6 md:p-8">
          <h2 id="cadastro-maquina-title" className="mb-6 pr-12 text-xl font-bold text-gray-900">
            Cadastrar máquinas
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <section>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Dados gerais
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="maq-nome" className="mb-1 block text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <input
                    id="maq-nome"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                    placeholder="Nome"
                  />
                </div>
                <div>
                  <label htmlFor="maq-codigo" className="mb-1 block text-sm font-medium text-gray-700">
                    Código
                  </label>
                  <input
                    id="maq-codigo"
                    type="text"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                    placeholder="Código"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="maq-descricao" className="mb-1 block text-sm font-medium text-gray-700">
                  Descrição
                </label>
                <input
                  id="maq-descricao"
                  type="text"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                  placeholder="Descrição"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="maq-recebe-debito" className="mb-1 block text-sm font-medium text-gray-700">
                  Quando você recebe (Débito)?
                </label>
                <input
                  id="maq-recebe-debito"
                  type="text"
                  value={quandoRecebeDebito}
                  onChange={(e) => setQuandoRecebeDebito(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                  placeholder="Quando você recebe (Débito)?"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="maq-recebe-credito" className="mb-1 block text-sm font-medium text-gray-700">
                  Quando você recebe (Crédito)?
                </label>
                <input
                  id="maq-recebe-credito"
                  type="text"
                  value={quandoRecebeCredito}
                  onChange={(e) => setQuandoRecebeCredito(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                  placeholder="Quando você recebe (Crédito)?"
                />
              </div>
            </section>

            <section>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Taxas cartão de crédito
              </h3>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                        Serviço
                        {sortIcon}
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                        Débito
                        {sortIcon}
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                        Crédito 1x
                        {sortIcon}
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                        Crédito 2-6x
                        {sortIcon}
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                        Crédito 7-12x
                        {sortIcon}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {TAXAS_SERVICOS.map((servico) => (
                      <tr key={servico} className="hover:bg-gray-50">
                        <td className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-900">
                          {servico}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2">
                          <div className="flex overflow-hidden rounded border border-gray-300 bg-gray-50 focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-offset-0">
                            <span className="flex items-center px-2 py-1.5 text-xs font-medium text-gray-600">R$</span>
                            <input
                              type="text"
                              value={taxas[servico]?.debito ?? "0,00"}
                              onChange={(e) => updateTaxa(servico, "debito", e.target.value)}
                              className="w-20 border-0 bg-transparent py-1.5 px-2 text-sm text-gray-900 focus:outline-none focus:ring-0"
                            />
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2">
                          <div className="flex overflow-hidden rounded border border-gray-300 bg-gray-50 focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-offset-0">
                            <span className="flex items-center px-2 py-1.5 text-xs font-medium text-gray-600">R$</span>
                            <input
                              type="text"
                              value={taxas[servico]?.credito1x ?? "0,00"}
                              onChange={(e) => updateTaxa(servico, "credito1x", e.target.value)}
                              className="w-20 border-0 bg-transparent py-1.5 px-2 text-sm text-gray-900 focus:outline-none focus:ring-0"
                            />
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2">
                          <div className="flex overflow-hidden rounded border border-gray-300 bg-gray-50 focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-offset-0">
                            <span className="flex items-center px-2 py-1.5 text-xs font-medium text-gray-600">R$</span>
                            <input
                              type="text"
                              value={taxas[servico]?.credito2a6 ?? "0,00"}
                              onChange={(e) => updateTaxa(servico, "credito2a6", e.target.value)}
                              className="w-20 border-0 bg-transparent py-1.5 px-2 text-sm text-gray-900 focus:outline-none focus:ring-0"
                            />
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2">
                          <div className="flex overflow-hidden rounded border border-gray-300 bg-gray-50 focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-offset-0">
                            <span className="flex items-center px-2 py-1.5 text-xs font-medium text-gray-600">R$</span>
                            <input
                              type="text"
                              value={taxas[servico]?.credito7a12 ?? "0,00"}
                              onChange={(e) => updateTaxa(servico, "credito7a12", e.target.value)}
                              className="w-20 border-0 bg-transparent py-1.5 px-2 text-sm text-gray-900 focus:outline-none focus:ring-0"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <div className="flex flex-wrap justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)]"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
