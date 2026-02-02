/**
 * Tela Relatórios – design Figma APP-ELIAS, node 23-3052.
 * Seções: Principais relatórios, Serviços, Produto, Clientes (cards ativos e "Breve").
 * Ícone de cada card alinhado ao título (faturamento=dinheiro, produtividade=gráfico, etc.).
 */

import React from "react";
import { HeaderHome } from "@/components/home/HeaderHome";
import { RelatorioCard } from "@/components/relatorios/RelatorioCard";
import {
  IconCalendar,
  IconCash,
  IconChartBar,
  IconPercent,
  IconShoppingBag,
  IconUserMinus,
  IconUsers,
} from "@/components/ui/Icons";

const iconClass = "h-6 w-6";

export default function RelatoriosPage() {
  return (
    <div className="min-h-screen bg-[#F1F3F5]">
      <HeaderHome />

      <main className="relative z-10 mx-4 -mt-10 rounded-t-2xl bg-[#FFFFFF] shadow-lg md:-mt-14 md:mx-6 lg:mx-8">
        <div className="p-6 md:p-8">
          {/* Principais relatórios – Figma 23-3052 */}
          <section className="mb-8">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-700">
              Principais relatórios
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <RelatorioCard
                title="Faturamento (bruto)"
                href="/dashboard/relatorios/faturamento-bruto"
                icon={<IconCash className={iconClass} />}
              />
              <RelatorioCard title="Produtividade" href="#" icon={<IconChartBar className={iconClass} />} />
              <RelatorioCard title="Comissões" href="#" icon={<IconPercent className={iconClass} />} />
            </div>
          </section>

          {/* Serviços */}
          <section className="mb-8">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-700">
              Serviços
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <RelatorioCard
                title="Produtividade"
                href="/dashboard/relatorios/servicos/produtividade"
                icon={<IconChartBar className={iconClass} />}
              />
            </div>
          </section>

          {/* Produto */}
          <section className="mb-8">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-700">
              Produto
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <RelatorioCard title="Mais vendidos" href="#" icon={<IconShoppingBag className={iconClass} />} />
              <RelatorioCard title="Produtividade" href="#" icon={<IconChartBar className={iconClass} />} />
            </div>
          </section>

          {/* Clientes (Breve) */}
          <section>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-700">
              Clientes
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <RelatorioCard title="Melhores clientes" breve icon={<IconUsers className={iconClass} />} />
              <RelatorioCard title="Aniversariantes" breve icon={<IconCalendar className={iconClass} />} />
              <RelatorioCard title="Clientes ausentes" breve icon={<IconUserMinus className={iconClass} />} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
