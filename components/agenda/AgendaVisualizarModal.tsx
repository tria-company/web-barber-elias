/**
 * Modal Visualizar agendamento – painel lateral com dados do agendamento e ações.
 */

"use client";

import React from "react";
import { IconTrash, IconX } from "@/components/ui/Icons";
import type { AgendaRow } from "./AgendaTable";

export interface AgendaVisualizarModalProps {
  isOpen: boolean;
  onClose: () => void;
  agendamento: AgendaRow | null;
  onCancelarAgendamento?: (id: string) => void;
}

const statusLabels: Record<AgendaRow["status"], string> = {
  confirmado: "Confirmado",
  pendente: "Pendente",
  realizado: "Realizado",
  cancelado: "Cancelado",
};

const statusClass: Record<AgendaRow["status"], string> = {
  confirmado: "bg-emerald-100 text-emerald-800",
  pendente: "bg-amber-100 text-amber-800",
  realizado: "bg-gray-100 text-gray-700",
  cancelado: "bg-red-100 text-red-800",
};

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="mt-0.5 text-base text-gray-900">{value || "—"}</p>
    </div>
  );
}

export function AgendaVisualizarModal({
  isOpen,
  onClose,
  agendamento,
  onCancelarAgendamento,
}: AgendaVisualizarModalProps) {
  if (!isOpen) return null;

  const podeCancelar =
    agendamento &&
    (agendamento.status === "confirmado" || agendamento.status === "pendente");

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
        aria-labelledby="agenda-visualizar-title"
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
          <h2 id="agenda-visualizar-title" className="mb-6 pr-12 text-xl font-bold text-gray-900">
            Visualizar agendamento
          </h2>

          {agendamento ? (
            <>
              <div className="mb-4">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${statusClass[agendamento.status]}`}
                >
                  {statusLabels[agendamento.status]}
                </span>
              </div>

              <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Data" value={agendamento.data} />
                  <Field label="Horário" value={agendamento.horario} />
                </div>
                <Field label="Cliente" value={agendamento.cliente} />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Serviço" value={agendamento.servico} />
                  <Field label="Profissional" value={agendamento.profissional} />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-end gap-3 border-t border-gray-200 pt-6">
                {podeCancelar && (
                  <button
                    type="button"
                    onClick={() => {
                      onCancelarAgendamento?.(agendamento.id);
                      onClose();
                    }}
                    className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-5 py-2.5 text-sm font-medium text-red-700 hover:bg-red-100"
                  >
                    <IconTrash className="h-5 w-5" />
                    Cancelar agendamento
                  </button>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-[var(--color-primary-dark)]"
                >
                  Fechar
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-500">Nenhum agendamento selecionado.</p>
          )}
        </div>
      </div>
    </>
  );
}
