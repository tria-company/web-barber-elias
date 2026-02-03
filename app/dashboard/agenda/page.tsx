/**
 * Tela Agenda – agendamentos por data, horário, cliente, serviço, profissional e status.
 */

import React from "react";
import { HeaderHome } from "@/components/home/HeaderHome";
import { AgendaPageContent } from "@/components/agenda/AgendaPageContent";
import type { AgendaRow } from "@/components/agenda/AgendaTable";

const agendaMock: AgendaRow[] = [
  {
    id: "1",
    data: "02/02/2026",
    horario: "09:00",
    cliente: "Carlos Mendes",
    servico: "Corte + Barba",
    profissional: "Maria Silva",
    status: "confirmado",
  },
  {
    id: "2",
    data: "02/02/2026",
    horario: "10:30",
    cliente: "Ana Paula",
    servico: "Corte feminino",
    profissional: "João Santos",
    status: "pendente",
  },
  {
    id: "3",
    data: "02/02/2026",
    horario: "11:00",
    cliente: "Roberto Lima",
    servico: "Corte",
    profissional: "Maria Silva",
    status: "realizado",
  },
  {
    id: "4",
    data: "02/02/2026",
    horario: "14:00",
    cliente: "Fernanda Souza",
    servico: "Coloração",
    profissional: "Ana Costa",
    status: "confirmado",
  },
  {
    id: "5",
    data: "02/02/2026",
    horario: "15:30",
    cliente: "Pedro Oliveira",
    servico: "Corte + Barba",
    profissional: "João Santos",
    status: "cancelado",
  },
  {
    id: "6",
    data: "03/02/2026",
    horario: "09:30",
    cliente: "Juliana Rocha",
    servico: "Hidratação",
    profissional: "Ana Costa",
    status: "pendente",
  },
];

export default function AgendaPage() {
  return (
    <div className="min-h-screen bg-[#F1F3F5]">
      <HeaderHome />

      <main className="relative z-10 mx-4 -mt-10 rounded-t-2xl bg-[#FFFFFF] shadow-lg md:-mt-14 md:mx-6 lg:mx-8">
        <div className="p-6 md:p-8">
          <AgendaPageContent data={agendaMock} />
        </div>
      </main>
    </div>
  );
}
