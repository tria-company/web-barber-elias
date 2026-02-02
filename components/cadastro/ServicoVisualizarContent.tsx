/**
 * Conteúdo da tela Visualizar serviço – design Figma APP-ELIAS, node 23-4649.
 * Título "Visualizar serviço", toggle Aplicativo, campos Nome, Descrição, Preço (R$), Duração, Categoria,
 * botões Cancelar e Salvar.
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconChevronDown, IconArrowLeft } from "@/components/ui/Icons";

export interface ServicoVisualizarContentProps {
  id: string;
  nome: string;
  descricao: string;
  valor: string;
  duracao: string;
  categoria: string;
  aplicativo: boolean;
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

export function ServicoVisualizarContent({
  id,
  nome: initialNome,
  descricao: initialDescricao,
  valor: initialValor,
  duracao: initialDuracao,
  categoria: initialCategoria,
  aplicativo: initialAplicativo,
}: ServicoVisualizarContentProps) {
  const [nome, setNome] = useState(initialNome);
  const [descricao, setDescricao] = useState(initialDescricao);
  const [valor, setValor] = useState(initialValor.replace(/^R\$\s*/, "") || "0,00");
  const [duracao, setDuracao] = useState(initialDuracao);
  const [categoria, setCategoria] = useState(initialCategoria);
  const [aplicativo, setAplicativo] = useState(initialAplicativo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: persistir alterações
  };

  return (
    <>
      <Link
        href="/dashboard/cadastro/servico"
        className="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <IconArrowLeft className="h-5 w-5" />
        Voltar
      </Link>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 id="visualizar-servico-title" className="text-xl font-bold text-gray-900">
          Visualizar serviço
        </h1>
        <Toggle checked={aplicativo} onChange={setAplicativo} label="Aplicativo" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="servico-vis-nome" className="mb-1 block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            id="servico-vis-nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
          />
        </div>

        <div>
          <label htmlFor="servico-vis-descricao" className="mb-1 block text-sm font-medium text-gray-700">
            Descrição
          </label>
          <input
            id="servico-vis-descricao"
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
            placeholder="Descrição"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="servico-vis-valor" className="mb-1 block text-sm font-medium text-gray-700">
              Preço
            </label>
            <div className="flex overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-offset-0">
              <span className="flex items-center bg-gray-50 px-3 py-2.5 text-sm font-medium text-gray-600">
                R$
              </span>
              <input
                id="servico-vis-valor"
                type="text"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                className="min-w-0 flex-1 border-0 py-2.5 px-3 text-gray-900 focus:outline-none focus:ring-0"
                placeholder="0,00"
              />
            </div>
          </div>
          <div>
            <label htmlFor="servico-vis-duracao" className="mb-1 block text-sm font-medium text-gray-700">
              Duração
            </label>
            <div className="relative">
              <select
                id="servico-vis-duracao"
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
          <label htmlFor="servico-vis-categoria" className="mb-1 block text-sm font-medium text-gray-700">
            Categoria
          </label>
          <div className="relative">
            <select
              id="servico-vis-categoria"
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
          <Link
            href="/dashboard/cadastro/servico"
            className="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-300"
          >
            Cancelar
          </Link>
          <button
            type="submit"
            className="rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)]"
          >
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}
