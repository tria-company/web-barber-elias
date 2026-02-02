/**
 * Tela Visualizar Cadastro de cliente – Figma node 23-3242.
 * Avatar, nome, stats (Agendamentos, Finalizados, Cancelados, Faltas),
 * abas Dados pessoais | Histórico, toggle Agendamento pelo aplicativo,
 * formulário Dados gerais + Endereço (E-mail com Reenviar), Remover cliente + Salvar.
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconChevronUpDown, IconEnvelope, IconUser, IconX } from "@/components/ui/Icons";

export interface CadastroClienteVisualizarContentProps {
  id: string;
  nome: string;
  agendamentos: number;
  finalizados: number;
  cancelados: number;
  faltas: number;
  agendamentoPeloApp?: boolean;
}

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

function TabDadosPessoais() {
  return (
    <>
      <section className="mb-8">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Dados gerais
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { id: "nome", label: "Nome" },
            { id: "sobrenome", label: "Sobrenome" },
            { id: "username", label: "Username/Telefone" },
            { id: "nascimento", label: "Data de nascimento" },
            { id: "cpf", label: "CPF" },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="mb-1 block text-sm font-medium text-gray-700">
                {f.label}
              </label>
              <input
                id={f.id}
                type="text"
                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
              />
            </div>
          ))}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <div className="flex gap-2">
              <input
                id="email"
                type="email"
                className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
              />
              <button
                type="button"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-amber-100 px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-amber-200"
              >
                <IconEnvelope className="h-4 w-4" />
                Reenviar
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Endereço
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { id: "cep", label: "Cep" },
            { id: "rua", label: "Rua" },
            { id: "numero", label: "Número" },
            { id: "bairro", label: "Bairro" },
            { id: "cidade", label: "Cidade" },
            { id: "estado", label: "Estado" },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={`end-${f.id}`} className="mb-1 block text-sm font-medium text-gray-700">
                {f.label}
              </label>
              <input
                id={`end-${f.id}`}
                type="text"
                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/** Status de agendamento para exibição na aba Histórico (Figma 23-3407). */
const STATUS_STYLE: Record<string, string> = {
  Cancelado: "bg-red-100 text-red-800",
  "Em espera": "bg-amber-100 text-amber-800",
  Faltou: "bg-gray-200 text-gray-700",
  Confirmado: "bg-blue-100 text-blue-800",
  Finalizado: "bg-[var(--color-green)]/20 text-[var(--color-green)]",
};

const historicoMock: { profissionalUnidade: string; servico: string; status: string; dataHorario: string }[] = [
  { profissionalUnidade: "Luiz Gustavo Seu Elias Belvedere", servico: "Corte e Barba", status: "Finalizado", dataHorario: "21 de junho de 2021 às 21:51" },
  { profissionalUnidade: "Luiz Gustavo Seu Elias Belvedere", servico: "Corte e Barba", status: "Finalizado", dataHorario: "21 de junho de 2021 às 21:51" },
  { profissionalUnidade: "Luiz Gustavo Seu Elias Belvedere", servico: "Corte e Barba", status: "Finalizado", dataHorario: "21 de junho de 2021 às 21:51" },
  { profissionalUnidade: "Luiz Gustavo Seu Elias Belvedere", servico: "Corte e Barba", status: "Confirmado", dataHorario: "21 de junho de 2021 às 21:51" },
  { profissionalUnidade: "Luiz Gustavo Seu Elias Belvedere", servico: "Corte e Barba", status: "Faltou", dataHorario: "21 de junho de 2021 às 21:51" },
  { profissionalUnidade: "Luiz Gustavo Seu Elias Belvedere", servico: "Corte e Barba", status: "Em espera", dataHorario: "21 de junho de 2021 às 21:51" },
  { profissionalUnidade: "Luiz Gustavo Seu Elias Belvedere", servico: "Corte e Barba", status: "Cancelado", dataHorario: "21 de junho de 2021 às 21:51" },
  { profissionalUnidade: "Luiz Gustavo Seu Elias Belvedere", servico: "Corte e Barba", status: "Cancelado", dataHorario: "21 de junho de 2021 às 21:51" },
];

const sortIcon = (
  <span className="ml-1 inline-block text-gray-400" aria-hidden>
    <IconChevronUpDown className="h-4 w-4" />
  </span>
);

function TabHistorico() {
  return (
    <div className="mb-8 overflow-hidden rounded-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Profissional/Unidade
                {sortIcon}
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Serviço/Status
                {sortIcon}
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Data/Horário
                {sortIcon}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {historicoMock.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                  {row.profissionalUnidade}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span className="text-sm text-gray-900">{row.servico} </span>
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      STATUS_STYLE[row.status] ?? "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                  {row.dataHorario}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const clientTabs = [
  { id: "dados-pessoais", label: "Dados pessoais" },
  { id: "historico", label: "Histórico" },
];

export function CadastroClienteVisualizarContent({
  id,
  nome,
  agendamentos,
  finalizados,
  cancelados,
  faltas,
  agendamentoPeloApp = true,
}: CadastroClienteVisualizarContentProps) {
  const [tab, setTab] = useState("dados-pessoais");
  const [agendamentoApp, setAgendamentoApp] = useState(agendamentoPeloApp);

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/dashboard/cadastro"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-300 bg-white p-2 text-gray-600 hover:bg-gray-50"
          aria-label="Fechar e voltar à lista"
        >
          <IconX className="h-5 w-5" />
        </Link>
      </div>

      <div className="mb-8 flex flex-wrap items-start gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gray-200 bg-gray-100 text-gray-400">
            <IconUser className="h-12 w-12" />
          </div>
          <button
            type="button"
            className="text-xs font-medium text-[var(--color-primary)] hover:underline"
          >
            Alterar foto
          </button>
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-gray-900">{nome}</h1>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
            <span>{agendamentos} Agendamentos</span>
            <span>{finalizados} Finalizados</span>
            <span>{cancelados} Cancelados</span>
            <span>{faltas} Faltas</span>
          </div>
        </div>
      </div>

      <div className="mb-4 flex border-b border-gray-200">
        {clientTabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`border-b-2 px-3 pb-3 pt-0.5 text-sm font-medium transition-colors ${
              tab === t.id
                ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <Toggle
          checked={agendamentoApp}
          onChange={setAgendamentoApp}
          label="Agendamento pelo aplicativo"
        />
      </div>

      {tab === "dados-pessoais" && <TabDadosPessoais />}
      {tab === "historico" && <TabHistorico />}

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-6">
        <button
          type="button"
          className="rounded-lg border border-red-500 bg-white px-5 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50"
        >
          Remover cliente
        </button>
        <button
          type="button"
          className="rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)]"
        >
          Salvar
        </button>
      </div>
    </>
  );
}
