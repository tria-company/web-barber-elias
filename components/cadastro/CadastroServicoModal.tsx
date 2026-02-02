/**
 * Modal Cadastrar serviços – design Figma APP-ELIAS, node 23-4541.
 * Título, toggle Aplicativo, campos Nome, Descrição, Preço (R$), Duração (select), Categoria (select),
 * botões Cancelar e Cadastrar.
 */

"use client";

import React, { useState } from "react";
import { IconChevronDown, IconX } from "@/components/ui/Icons";

export interface CadastroServicoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCadastrar?: (data: { nome: string; descricao: string; preco: string; duracao: string; categoria: string; aplicativo: boolean }) => void;
}

const DURACAO_OPCOES = ["20 minutos", "15 minutos", "30 minutos", "35 minutos", "45 minutos", "60 minutos"];

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

export function CadastroServicoModal({
  isOpen,
  onClose,
  onCadastrar,
}: CadastroServicoModalProps) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("0,00");
  const [duracao, setDuracao] = useState("20 minutos");
  const [categoria, setCategoria] = useState("");
  const [aplicativo, setAplicativo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCadastrar?.({
      nome,
      descricao,
      preco,
      duracao,
      categoria,
      aplicativo,
    });
    setNome("");
    setDescricao("");
    setPreco("0,00");
    setDuracao("20 minutos");
    setCategoria("");
    setAplicativo(false);
    onClose();
  };

  const handleClose = () => {
    setNome("");
    setDescricao("");
    setPreco("0,00");
    setDuracao("20 minutos");
    setCategoria("");
    setAplicativo(false);
    onClose();
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
        aria-labelledby="cadastro-servico-title"
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
          <div className="mb-6 flex flex-col gap-4 pr-12 sm:flex-row sm:items-center sm:justify-between">
            <h2 id="cadastro-servico-title" className="text-xl font-bold text-gray-900">
              Cadastrar serviços
            </h2>
            <Toggle checked={aplicativo} onChange={setAplicativo} label="Aplicativo" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="servico-nome" className="mb-1 block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                id="servico-nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                placeholder="Nome do serviço"
              />
            </div>

            <div>
              <label htmlFor="servico-descricao" className="mb-1 block text-sm font-medium text-gray-700">
                Descrição
              </label>
              <input
                id="servico-descricao"
                type="text"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                placeholder="Descrição"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="servico-preco" className="mb-1 block text-sm font-medium text-gray-700">
                  Preço
                </label>
                <div className="flex overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-offset-0">
                  <span className="flex items-center bg-gray-50 px-3 py-2.5 text-sm font-medium text-gray-600">
                    R$
                  </span>
                  <input
                    id="servico-preco"
                    type="text"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    className="min-w-0 flex-1 border-0 py-2.5 px-3 text-gray-900 focus:outline-none focus:ring-0"
                    placeholder="0,00"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="servico-duracao" className="mb-1 block text-sm font-medium text-gray-700">
                  Duração
                </label>
                <div className="relative">
                  <select
                    id="servico-duracao"
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
              <label htmlFor="servico-categoria" className="mb-1 block text-sm font-medium text-gray-700">
                Categoria
              </label>
              <div className="relative">
                <select
                  id="servico-categoria"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-gray-700 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                >
                  <option value="">Selecione a categoria</option>
                  <option value="cabelo">Cabelo</option>
                  <option value="barba">Barba</option>
                  <option value="estetica">Estética</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <IconChevronDown className="h-4 w-4" />
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-300"
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
