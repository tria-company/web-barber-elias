/**
 * Conteúdo da tela Agenda.
 * Filtros (período, profissional), busca, botão Novo agendamento, tabela de agendamentos.
 * Modais: Novo agendamento, Visualizar agendamento.
 */

"use client";

import React, { useState } from "react";
import { AgendaTable } from "./AgendaTable";
import { NovoAgendamentoModal } from "./NovoAgendamentoModal";
import { AgendaVisualizarModal } from "./AgendaVisualizarModal";
import { IconCalendar, IconPlus, IconSearch } from "@/components/ui/Icons";
import type { AgendaRow } from "./AgendaTable";

export interface AgendaPageContentProps {
  data: AgendaRow[];
}

export function AgendaPageContent({ data }: AgendaPageContentProps) {
  const [openNovo, setOpenNovo] = useState(false);
  const [visualizarAgendamento, setVisualizarAgendamento] = useState<AgendaRow | null>(null);

  return (
    <>
      <NovoAgendamentoModal
        isOpen={openNovo}
        onClose={() => setOpenNovo(false)}
        onAgendar={() => setOpenNovo(false)}
      />
      <AgendaVisualizarModal
        isOpen={visualizarAgendamento !== null}
        onClose={() => setVisualizarAgendamento(null)}
        agendamento={visualizarAgendamento}
        onCancelarAgendamento={(id) => {
          // Aqui poderia atualizar a lista removendo ou alterando status do id
          setVisualizarAgendamento(null);
        }}
      />

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative max-w-[200px] sm:max-w-[240px]">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <IconCalendar className="h-5 w-5" />
            </span>
            <select
              className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-8 text-sm text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
              aria-label="Período"
            >
              <option>Hoje</option>
              <option>Amanhã</option>
              <option>Esta semana</option>
              <option>Próxima semana</option>
            </select>
          </div>
          <div className="relative max-w-[180px] sm:max-w-[220px]">
            <select
              className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-4 pr-8 text-sm text-gray-900 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
              aria-label="Profissional"
            >
              <option>Todos</option>
              <option>Maria Silva</option>
              <option>João Santos</option>
              <option>Ana Costa</option>
            </select>
          </div>
          <div className="relative flex-1 sm:max-w-xs">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <IconSearch className="h-5 w-5" />
            </span>
            <input
              type="search"
              placeholder="Buscar por cliente ou serviço"
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0"
              aria-label="Buscar por cliente ou serviço"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpenNovo(true)}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-[var(--color-primary-dark)]"
        >
          <IconPlus className="h-5 w-5" />
          Novo agendamento
        </button>
      </div>

      <AgendaTable data={data} onVisualizar={setVisualizarAgendamento} />
    </>
  );
}
