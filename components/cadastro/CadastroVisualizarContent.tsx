/**
 * Conteúdo da tela Visualizar Cadastro – Figma node 23-3720.
 * Cabeçalho (avatar, nome, stats, Ativo), abas, toggles Aplicativo/Agenda,
 * formulário Dados gerais + Endereço, botões Remover e Salvar.
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconArrowLeft, IconCalendar, IconChevronDown, IconChevronUpDown, IconPlus, IconTrash, IconUser } from "@/components/ui/Icons";
import { InputPassword } from "@/components/ui/InputPassword";

export interface CadastroVisualizarContentProps {
  id: string;
  nome: string;
  avaliacao?: string;
  servicos?: string;
  faltas?: string;
  ativo?: boolean;
  /** Quando em modal: Voltar fecha o modal em vez de navegar. */
  onVoltar?: () => void;
}

const tabs = [
  { id: "dados-pessoais", label: "Dados pessoais" },
  { id: "acesso", label: "Acesso" },
  { id: "almoco", label: "Almoço/Lanche" },
  { id: "servicos", label: "Serviços/comissão" },
  { id: "folgas", label: "Folgas" },
];

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
            { id: "cnpj", label: "CNPJ" },
            { id: "email", label: "E-mail" },
          ].map((f) => (
            <div key={f.id} className={f.id === "email" ? "sm:col-span-2" : ""}>
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

/** Aba Acesso – Figma node 23-3854: senha, cargo, acesso personalizado, permissões. */
function TabAcesso() {
  const [acessoPersonalizado, setAcessoPersonalizado] = useState(true);
  const permissoesPaginas = [
    { id: "acesso-app", label: "Acesso APP" },
    { id: "agendar-cliente-pag", label: "Agendar cliente" },
  ];
  const permissoesBotoes = [
    "Desativar lanche",
    "Agendar cliente",
    "Editar serviços",
    "Chegou",
    "Em atendimento",
    "Editar comanda",
    "Acesso APP",
    "Agendar cliente",
  ];
  return (
    <div className="mb-8 space-y-8">
      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Alterar senha de acesso
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <InputPassword label="Nova senha" placeholder="Nova senha" id="nova-senha" />
          <InputPassword label="Repetir nova senha" placeholder="Repetir nova senha" id="repetir-senha" />
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Cargo
        </h2>
        <div className="space-y-4">
          <div className="relative max-w-xs">
            <select
              defaultValue="gerencia"
              className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-sm text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
              aria-label="Cargo"
            >
              <option value="">Selecione o Cargo</option>
              <option value="gerencia">Gerência</option>
              <option value="atendente">Atendente</option>
              <option value="profissional">Profissional</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              <IconChevronDown className="h-4 w-4" />
            </span>
          </div>
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={acessoPersonalizado}
              onChange={(e) => setAcessoPersonalizado(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
            />
            <span className="text-sm font-medium text-gray-700">Acesso personalizado</span>
          </label>
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Permissões app
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-700">Páginas</h3>
            <div className="space-y-2">
              {permissoesPaginas.map((p) => (
                <label key={p.id} className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-gray-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                  />
                  <span className="text-sm text-gray-700">{p.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-gray-700">Botões agenda</h3>
            <div className="space-y-2">
              {permissoesBotoes.map((label, i) => (
                <label key={`${label}-${i}`} className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-gray-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                  />
                  <span className="text-sm text-gray-700">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const DIAS_SEMANA = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

/** Aba Almoço/Lanche – Figma node 23-4356: dia, horário início/fim, adicionar, tabela por dia. */
function TabAlmocoLanche() {
  const [diasSelecionados, setDiasSelecionados] = useState<string[]>([]);
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const [breaks, setBreaks] = useState<Record<string, { inicio: string; fim: string }[]>>(() => {
    const initial: Record<string, { inicio: string; fim: string }[]> = {};
    DIAS_SEMANA.forEach((d) => {
      initial[d] = [{ inicio: "13:00", fim: "14:00" }, ...(d === "Terça" ? [] : [{ inicio: "13:00", fim: "14:00" }])];
    });
    return initial;
  });

  const toggleDia = (dia: string) => {
    setDiasSelecionados((prev) =>
      prev.includes(dia) ? prev.filter((d) => d !== dia) : [...prev, dia]
    );
  };

  const adicionar = () => {
    if (!inicio.trim() || !fim.trim()) return;
    const toAdd = diasSelecionados.length ? diasSelecionados : DIAS_SEMANA;
    setBreaks((prev) => {
      const next = { ...prev };
      toAdd.forEach((dia) => {
        next[dia] = [...(next[dia] ?? []), { inicio: inicio.trim(), fim: fim.trim() }];
      });
      return next;
    });
    setInicio("");
    setFim("");
    setDiasSelecionados([]);
  };

  const removerBreak = (dia: string, index: number) => {
    setBreaks((prev) => ({
      ...prev,
      [dia]: prev[dia].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="mb-8 space-y-8">
      <section>
        <div className="flex flex-wrap items-end gap-4">
          <div className="min-w-[140px]">
            <label className="mb-1 block text-sm font-medium text-gray-700">Dia</label>
            <div className="flex flex-wrap gap-2 rounded-lg border border-gray-300 bg-white p-2">
              {DIAS_SEMANA.map((dia) => (
                <button
                  key={dia}
                  type="button"
                  onClick={() => toggleDia(dia)}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    diasSelecionados.includes(dia)
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {dia.slice(0, 3)}
                </button>
              ))}
            </div>
            {diasSelecionados.length > 0 && (
              <p className="mt-1 text-xs text-gray-500">
                {diasSelecionados.join(", ")}
              </p>
            )}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Início</label>
            <input
              type="text"
              value={inicio}
              onChange={(e) => setInicio(e.target.value)}
              placeholder="Horário inicial"
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0 sm:w-36"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Final</label>
            <input
              type="text"
              value={fim}
              onChange={(e) => setFim(e.target.value)}
              placeholder="Horário final"
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0 sm:w-36"
            />
          </div>
          <button
            type="button"
            onClick={adicionar}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)]"
          >
            <IconPlus className="h-4 w-4" />
            Adicionar
          </button>
        </div>
      </section>
      <section className="space-y-4">
        {DIAS_SEMANA.map((dia) => (
          <div key={dia} className="rounded-lg border border-gray-200 overflow-hidden">
            <h3 className="border-b border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-800">
              {dia}
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Início
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Final
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-semibold uppercase tracking-wider text-gray-600">
                      Ação
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {(breaks[dia] ?? []).length === 0 ? (
                    <tr>
                      <td colSpan={3} className="px-4 py-3 text-center text-sm text-gray-500">
                        Nenhum horário cadastrado
                      </td>
                    </tr>
                  ) : (
                    (breaks[dia] ?? []).map((b, index) => (
                      <tr key={`${dia}-${index}`} className="hover:bg-gray-50">
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-900">{b.inicio}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-900">{b.fim}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-right">
                          <button
                            type="button"
                            onClick={() => removerBreak(dia, index)}
                            className="text-red-500 hover:text-red-700"
                            aria-label="Remover"
                          >
                            <IconTrash className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

const sortIcon = (
  <span className="ml-1 inline-block text-gray-400" aria-hidden>
    <IconChevronUpDown className="h-4 w-4" />
  </span>
);

/** Aba Serviços/comissão – Figma node 23-3998: tabela Serviço, Valor, Duração, Comissão, toggle. */
function TabServicosComissao() {
  const [rows, setRows] = useState(() =>
    Array.from({ length: 11 }, (_, i) => ({
      id: i,
      servico: "Corte",
      valor: "100,00",
      duracao: "60 min",
      comissao: "35",
      ativo: i < 7,
    }))
  );

  const toggleAtivo = (id: number) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ativo: !r.ativo } : r))
    );
  };

  return (
    <div className="mb-8 overflow-hidden rounded-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Serviço
                {sortIcon}
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Valor
                {sortIcon}
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Duração
                {sortIcon}
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                Comissão
                {sortIcon}
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-600">
                Ativo
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
                  {row.servico}
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <div className="flex items-center overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-offset-0">
                    <span className="flex items-center bg-gray-50 px-3 py-2 text-sm font-medium text-gray-600">
                      R$
                    </span>
                    <input
                      type="text"
                      value={row.valor}
                      onChange={(e) =>
                        setRows((prev) =>
                          prev.map((r) =>
                            r.id === row.id ? { ...r, valor: e.target.value } : r
                          )
                        )
                      }
                      className="min-w-0 flex-1 border-0 py-2 px-3 text-sm text-gray-900 focus:outline-none focus:ring-0"
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <div className="relative w-28">
                    <select
                      value={row.duracao}
                      onChange={(e) =>
                        setRows((prev) =>
                          prev.map((r) =>
                            r.id === row.id ? { ...r, duracao: e.target.value } : r
                          )
                        )
                      }
                      className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-8 text-sm text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
                    >
                      <option>30 min</option>
                      <option>45 min</option>
                      <option>60 min</option>
                      <option>90 min</option>
                      <option>120 min</option>
                    </select>
                    <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                      <IconChevronDown className="h-4 w-4" />
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <div className="flex w-24 items-center overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-offset-0">
                    <input
                      type="text"
                      value={row.comissao}
                      onChange={(e) =>
                        setRows((prev) =>
                          prev.map((r) =>
                            r.id === row.id ? { ...r, comissao: e.target.value } : r
                          )
                        )
                      }
                      className="min-w-0 flex-1 border-0 py-2 px-3 text-right text-sm text-gray-900 focus:outline-none focus:ring-0"
                    />
                    <span className="flex items-center bg-gray-50 px-2 py-2 text-sm font-medium text-gray-600">
                      %
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-right">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={row.ativo}
                    onClick={() => toggleAtivo(row.id)}
                    className="inline-flex"
                  >
                    <span
                      className={`inline-flex h-6 w-11 shrink-0 rounded-full transition-colors ${
                        row.ativo ? "bg-[var(--color-primary)]" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`mt-0.5 ml-0.5 inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${
                          row.ativo ? "translate-x-5" : "translate-x-0.5"
                        }`}
                      />
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** Aba Folgas – Figma node 23-4227: Data inicial/final, Apenas um dia, tabela, Histórico de folgas. */
function TabFolgas() {
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [apenasUmDia, setApenasUmDia] = useState(false);
  const [periodos, setPeriodos] = useState<
    { id: number; inicio: string; fim: string }[]
  >([
    { id: 1, inicio: "20/07/2021", fim: "20/07/2021" },
    { id: 2, inicio: "25/07/2021", fim: "31/07/2021" },
    { id: 3, inicio: "15/10/2021", fim: "16/10/2021" },
  ]);

  const adicionar = () => {
    const inicio = dataInicial.trim() || "20/07/2021";
    const fim = apenasUmDia ? inicio : (dataFinal.trim() || inicio);
    setPeriodos((prev) => [...prev, { id: Date.now(), inicio, fim }]);
    setDataInicial("");
    setDataFinal("");
  };

  const remover = (id: number) => {
    setPeriodos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="mb-8 space-y-6">
      <section>
        <div className="flex flex-wrap items-end gap-4">
          <div className="min-w-[140px]">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Data inicial
            </label>
            <div className="flex items-center overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-offset-0">
              <span className="flex items-center pl-3 text-gray-400">
                <IconCalendar className="h-5 w-5" />
              </span>
              <input
                type="text"
                value={dataInicial}
                onChange={(e) => setDataInicial(e.target.value)}
                placeholder="dd/mm/aaaa"
                className="min-w-0 flex-1 border-0 py-2.5 px-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="min-w-[140px]">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Data final
            </label>
            <div className="flex items-center overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-offset-0">
              <span className="flex items-center pl-3 text-gray-400">
                <IconCalendar className="h-5 w-5" />
              </span>
              <input
                type="text"
                value={dataFinal}
                onChange={(e) => setDataFinal(e.target.value)}
                placeholder="dd/mm/aaaa"
                disabled={apenasUmDia}
                className="min-w-0 flex-1 border-0 py-2.5 px-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 disabled:bg-gray-50 disabled:text-gray-500"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={adicionar}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)]"
          >
            <IconPlus className="h-4 w-4" />
            Adicionar
          </button>
        </div>
        <label className="mt-3 flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={apenasUmDia}
            onChange={(e) => setApenasUmDia(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
          />
          <span className="text-sm font-medium text-gray-700">Apenas um dia</span>
        </label>
      </section>

      <section className="overflow-hidden rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Início
                  {sortIcon}
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Final
                  {sortIcon}
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Ação
                  {sortIcon}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {periodos.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-4 py-6 text-center text-sm text-gray-500">
                    Nenhum período cadastrado
                  </td>
                </tr>
              ) : (
                periodos.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-900">
                      {p.inicio}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-900">
                      {p.fim}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-right">
                      <button
                        type="button"
                        onClick={() => remover(p.id)}
                        className="text-red-500 hover:text-red-700"
                        aria-label="Remover"
                      >
                        <IconTrash className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <div>
        <a
          href="#"
          className="text-sm font-medium text-[var(--color-primary)] hover:underline"
        >
          Histórico de folgas
        </a>
      </div>
    </div>
  );
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

export function CadastroVisualizarContent({
  id,
  nome,
  avaliacao = "4.7/5",
  servicos = "10/17",
  faltas = "0",
  ativo: initialAtivo = true,
  onVoltar,
}: CadastroVisualizarContentProps) {
  const [tab, setTab] = useState("dados-pessoais");
  const [ativo, setAtivo] = useState(initialAtivo);
  const [aplicativo, setAplicativo] = useState(true);
  const [agenda, setAgenda] = useState(true);

  return (
    <>
      {onVoltar ? (
        <button
          type="button"
          onClick={onVoltar}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <IconArrowLeft />
          Voltar
        </button>
      ) : (
        <Link href="/dashboard/cadastro" className="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
          <IconArrowLeft />
          Voltar
        </Link>
      )}

      {/* Header: avatar, nome, stats, Ativo */}
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
          <Toggle checked={ativo} onChange={setAtivo} label="Ativo" />
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-gray-900">{nome}</h1>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
            <span>{avaliacao} Avaliação</span>
            <span>{servicos} Serviços</span>
            <span>{faltas} Faltas de clientes</span>
          </div>
        </div>
      </div>

      {/* Abas */}
      <div className="mb-4 flex border-b border-gray-200">
        {tabs.map((t) => (
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

      {/* Toggles Aplicativo / Agenda */}
      <div className="mb-6 flex flex-wrap gap-6">
        <Toggle checked={aplicativo} onChange={setAplicativo} label="Aplicativo" />
        <Toggle checked={agenda} onChange={setAgenda} label="Agenda" />
      </div>

      {tab === "dados-pessoais" && <TabDadosPessoais />}
      {tab === "acesso" && <TabAcesso />}
      {tab === "almoco" && <TabAlmocoLanche />}
      {tab === "servicos" && <TabServicosComissao />}
      {tab === "folgas" && <TabFolgas />}

      {/* Footer: Remover profissional, Salvar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-6">
        <button
          type="button"
          className="rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-600"
        >
          Remover profissional
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
