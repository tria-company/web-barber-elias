/**
 * Dashboard (Home) – design Figma APP-ELIAS, node 23-2096.
 *
 * Acessível após clicar em Entrar no login. Header laranja + grid de cards.
 */

import React from "react";
import { HeaderHome } from "@/components/home/HeaderHome";
import { ChatCard } from "@/components/home/ChatCard";
import { ContasBancariasCard } from "@/components/home/ContasBancariasCard";
import { MetricCard } from "@/components/home/MetricCard";
import { AniversariantesCard } from "@/components/home/AniversariantesCard";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F1F3F5]">
      <HeaderHome />

      {/* Modal/painel branco com os dados do dashboard (fundo #FFFFFF) – sobe para encostar no header */}
      <main className="relative z-10 mx-4 -mt-10 rounded-t-2xl bg-[#FFFFFF] shadow-lg md:-mt-22 md:mx-6 lg:mx-8">
        <div className="grid gap-6 p-6 lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr] md:p-8">
          {/* Coluna esquerda: Chat + Contas Bancárias */}
          <div className="flex flex-col gap-6">
            <ChatCard />
            <ContasBancariasCard />
          </div>

          {/* Coluna direita: grid de métricas */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <MetricCard
              title="Agendamentos"
              value="165"
              subtitle="Para esta semana"
              change="10%"
            />
            <MetricCard
              title="Previsão"
              value="R$ 15.540,00"
              subtitle="Para esta semana"
              change="10%"
            />
            <MetricCard
              title="Total recebido"
              value="R$ 2.156,00"
              subtitle="Hoje"
              change="10%"
            />
            <MetricCard
              title="Agendamentos pelo app"
              value="61.2%"
              subtitle="Últimos 30 dias"
              change="10%"
              progress={61.2}
            />
            <MetricCard
              title="Agendamentos na semana"
              value="R$ 780,00"
              subtitle="Para esta semana"
              change="10%"
            />
            <MetricCard
              title="Comissões"
              value="R$ 484,00"
              subtitle="A pagar"
            />
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-md sm:col-span-2 xl:col-span-2">
              <h3 className="text-sm font-medium text-gray-700">
                Previsão de recebimento
              </h3>
              <p className="mt-2 text-xs text-gray-500">Em breve</p>
            </div>
            <AniversariantesCard />
          </div>
        </div>
      </main>
    </div>
  );
}
