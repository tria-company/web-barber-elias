/**
 * Modal Novo agendamento – formulário lateral para criar agendamento.
 * Campos: Data, Horário, Cliente, Serviço, Profissional, Observações.
 */

"use client";

import React, { useState } from "react";
import { IconChevronDown, IconX } from "@/components/ui/Icons";

export interface NovoAgendamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAgendar?: (data: {
    data: string;
    horario: string;
    cliente: string;
    servico: string;
    profissional: string;
    observacoes: string;
  }) => void;
}

const CLIENTES = ["Carlos Mendes", "Ana Paula", "Roberto Lima", "Fernanda Souza", "Pedro Oliveira", "Juliana Rocha"];
const SERVICOS = ["Corte", "Corte + Barba", "Barba", "Corte feminino", "Coloração", "Hidratação"];
const PROFISSIONAIS = ["Maria Silva", "João Santos", "Ana Costa"];

export function NovoAgendamentoModal({
  isOpen,
  onClose,
  onAgendar,
}: NovoAgendamentoModalProps) {
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("09:00");
  const [cliente, setCliente] = useState("");
  const [servico, setServico] = useState("");
  const [profissional, setProfissional] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAgendar?.({
      data: data || new Date().toISOString().slice(0, 10),
      horario,
      cliente,
      servico,
      profissional,
      observacoes,
    });
    reset();
    onClose();
  };

  const reset = () => {
    setData("");
    setHorario("09:00");
    setCliente("");
    setServico("");
    setProfissional("");
    setObservacoes("");
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const horarios = Array.from({ length: 18 }, (_, i) => {
    const h = 8 + Math.floor(i / 2);
    const m = (i % 2) * 30;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  });

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
        aria-labelledby="novo-agendamento-title"
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
          <h2 id="novo-agendamento-title" className="mb-6 pr-12 text-xl font-bold text-gray-900">
            Novo agendamento
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="agenda-data" className="mb-1 block text-sm font-medium text-gray-700">
                  Data
                </label>
                <input
                  id="agenda-data"
                  type="date"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                />
              </div>
              <div>
                <label htmlFor="agenda-horario" className="mb-1 block text-sm font-medium text-gray-700">
                  Horário
                </label>
                <div className="relative">
                  <select
                    id="agenda-horario"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                    className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                  >
                    {horarios.map((h) => (
                      <option key={h} value={h}>
                        {h}
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
              <label htmlFor="agenda-cliente" className="mb-1 block text-sm font-medium text-gray-700">
                Cliente
              </label>
              <div className="relative">
                <select
                  id="agenda-cliente"
                  value={cliente}
                  onChange={(e) => setCliente(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                >
                  <option value="">Selecione o cliente</option>
                  {CLIENTES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <IconChevronDown className="h-4 w-4" />
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="agenda-servico" className="mb-1 block text-sm font-medium text-gray-700">
                  Serviço
                </label>
                <div className="relative">
                  <select
                    id="agenda-servico"
                    value={servico}
                    onChange={(e) => setServico(e.target.value)}
                    className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                  >
                    <option value="">Selecione o serviço</option>
                    {SERVICOS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <IconChevronDown className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div>
                <label htmlFor="agenda-profissional" className="mb-1 block text-sm font-medium text-gray-700">
                  Profissional
                </label>
                <div className="relative">
                  <select
                    id="agenda-profissional"
                    value={profissional}
                    onChange={(e) => setProfissional(e.target.value)}
                    className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                  >
                    <option value="">Selecione o profissional</option>
                    {PROFISSIONAIS.map((p) => (
                      <option key={p} value={p}>
                        {p}
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
              <label htmlFor="agenda-observacoes" className="mb-1 block text-sm font-medium text-gray-700">
                Observações <span className="text-gray-400">(opcional)</span>
              </label>
              <textarea
                id="agenda-observacoes"
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                placeholder="Ex.: preferência de tesoura, alergias..."
              />
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
                className="rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-[var(--color-primary-dark)]"
              >
                Agendar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
