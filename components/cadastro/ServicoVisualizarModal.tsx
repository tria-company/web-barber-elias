/**
 * Modal Visualizar serviço – design Figma 23-4649.
 * Fundo desfocado, painel à direita (70%) com formulário: título "Visualizar serviço",
 * toggle Aplicativo, Nome, Descrição, Preço (R$), Duração, Categoria, Cancelar e Salvar.
 */

"use client";

import React, { useState } from "react";
import { IconChevronDown, IconX } from "@/components/ui/Icons";

export interface ServicoVisualizarModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    nome: string;
    descricao: string;
    valor: string;
    duracao: string;
    categoria: string;
    aplicativo: boolean;
  };
}

const DURACAO_OPCOES = ["15 minutos", "20 minutos", "30 minutos", "35 minutos", "45 minutos", "60 minutos"];
const CATEGORIA_OPCOES = [
  { value: "", label: "Selecione a categoria" },
  { value: "cabelo", label: "Cabelo" },
  { value: "barba", label: "Barba" },
  { value: "estetica", label: "Estética" },
];

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex items-center gap-2"
    >
      <span
        className={`inline-flex h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? "bg-[var(--color-primary)]" : "bg-gray-300"
        }`}
      >
        <span
          className={`mt-0.5 ml-0.5 inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </span>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </button>
  );
}

export function ServicoVisualizarModal({ isOpen, onClose, service }: ServicoVisualizarModalProps) {
  const [nome, setNome] = useState(service.nome);
  const [descricao, setDescricao] = useState(service.descricao);
  const [valor, setValor] = useState(service.valor.replace(/^R\$\s*/, "") || "0,00");
  const [duracao, setDuracao] = useState(service.duracao);
  const [categoria, setCategoria] = useState(service.categoria);
  const [aplicativo, setAplicativo] = useState(service.aplicativo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
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
        className="fixed inset-y-0 right-0 z-50 flex w-[70vw] max-w-4xl flex-col overflow-hidden bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="servico-visualizar-title"
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
          <div className="mb-6 flex flex-col gap-4 pr-12 sm:flex-row sm:items-center sm:justify-between">
            <h1 id="servico-visualizar-title" className="text-xl font-bold text-gray-900">
              Visualizar serviço
            </h1>
            <Toggle checked={aplicativo} onChange={setAplicativo} label="Aplicativo" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="servico-modal-nome" className="mb-1 block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                id="servico-modal-nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
              />
            </div>

            <div>
              <label htmlFor="servico-modal-descricao" className="mb-1 block text-sm font-medium text-gray-700">
                Descrição
              </label>
              <input
                id="servico-modal-descricao"
                type="text"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                placeholder="Descrição"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="servico-modal-valor" className="mb-1 block text-sm font-medium text-gray-700">
                  Preço
                </label>
                <div className="flex overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-offset-0">
                  <span className="flex items-center bg-gray-50 px-3 py-2.5 text-sm font-medium text-gray-600">
                    R$
                  </span>
                  <input
                    id="servico-modal-valor"
                    type="text"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    className="min-w-0 flex-1 border-0 py-2.5 px-3 text-gray-900 focus:outline-none focus:ring-0"
                    placeholder="0,00"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="servico-modal-duracao" className="mb-1 block text-sm font-medium text-gray-700">
                  Duração
                </label>
                <div className="relative">
                  <select
                    id="servico-modal-duracao"
                    value={duracao}
                    onChange={(e) => setDuracao(e.target.value)}
                    className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                  >
                    {DURACAO_OPCOES.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <IconChevronDown className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="servico-modal-categoria" className="mb-1 block text-sm font-medium text-gray-700">
                Categoria
              </label>
              <div className="relative">
                <select
                  id="servico-modal-categoria"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-gray-700 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                >
                  {CATEGORIA_OPCOES.map((opt) => (
                    <option key={opt.value || "vazio"} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <IconChevronDown className="h-4 w-4" />
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)]"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
