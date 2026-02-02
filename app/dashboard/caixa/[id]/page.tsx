/**
 * Tela Visualizar Caixa – design Figma APP-ELIAS, node 23-2491.
 *
 * Detalhe de uma sessão de caixa: valor inicial/final, receitas, despesas,
 * total recebido por forma de pagamento, outros valores.
 */

import React from "react";
import { HeaderHome } from "@/components/home/HeaderHome";
import { CaixaVisualizarToolbar } from "@/components/caixa/CaixaVisualizarToolbar";
import { IconChevronUpDown } from "@/components/ui/Icons";

const sortIcon = (
  <span className="ml-1 inline-block text-gray-400" aria-hidden>
    <IconChevronUpDown className="h-4 w-4" />
  </span>
);

const receitasMock = [
  { descricao: "Faltou dinheiro", tipo: "Aporte", horario: "Hoje às 22:26", total: "+R$1.500,00", pagamento: "Dinheiro" },
  { descricao: "Capital de giro", tipo: "Aporte", horario: "Hoje às 22:26", total: "+R$9.500,00", pagamento: "Dinheiro" },
];

const despesasMock = [
  { descricao: "Precisão", tipo: "Despesa", horario: "Hoje às 22:26", total: "-R$500,00", pagamento: "Dinheiro" },
];

const totalRecebidoMock = [
  { label: "Dinheiro", valor: "R$0,00" },
  { label: "Cartão (Crédito)", valor: "R$0,00" },
  { label: "Cartão (Débito)", valor: "R$0,00" },
  { label: "Voucher", valor: "R$0,00" },
  { label: "Cheque", valor: "R$0,00" },
  { label: "Transferência", valor: "R$0,00" },
  { label: "Cortesia", valor: "R$0,00" },
  { label: "Permuta", valor: "R$0,00" },
  { label: "Interpag", valor: "R$0,00" },
  { label: "Crédito cliente", valor: "R$0,00" },
];

const outrosValoresMock = [
  { label: "Divida de Cliente", valor: "-R$0,00", negative: true },
  { label: "Descontos (em dinheiro)", valor: "-R$0,00", negative: true },
  { label: "Sangria", valor: "-R$0,00", negative: true },
  { label: "Despesas", valor: "-R$0,00", negative: true },
  { label: "Aportes", valor: "-R$0,00", negative: true },
  { label: "Valor inicial do caixa", valor: "+ R$45.000,00", negative: false },
];

export default async function CaixaVisualizarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await params; // id disponível para futura busca por sessão
  return (
    <div className="min-h-screen bg-[#F1F3F5]">
      <HeaderHome />

      <main className="relative z-10 mx-4 -mt-10 rounded-t-2xl bg-[#FFFFFF] shadow-lg md:-mt-14 md:mx-6 lg:mx-8">
        <div className="p-6 md:p-8">
          <CaixaVisualizarToolbar />

          {/* Conteúdo principal: overview + tabelas + sidebar (Figma) */}
          <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-[1fr_320px]">
            <div className="space-y-8">
              {/* Valor inicial e final do caixa */}
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Valor inicial do caixa:
                  </p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">R$ 45.000,00</p>
                </div>
                <div className="rounded-xl bg-[var(--color-green)] px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                    Valor final do caixa: (Dinheiro)
                  </p>
                  <p className="mt-1 text-2xl font-bold text-white">R$ 46.000,00</p>
                </div>
              </div>

              {/* 2 Receitas */}
              <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 bg-gray-50 px-6 py-4">
                  <h3 className="text-sm font-bold text-gray-800">2 Receitas</h3>
                  <span className="text-sm font-semibold text-gray-700">Total: R$ 11.000,00</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Descrição{sortIcon}</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Tipo{sortIcon}</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Horário{sortIcon}</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Total{sortIcon}</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Pagamento{sortIcon}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {receitasMock.map((r, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{r.descricao}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">{r.tipo}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">{r.horario}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-[var(--color-green)]">{r.total}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">{r.pagamento}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 1 Despesa */}
              <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 bg-gray-50 px-6 py-4">
                  <h3 className="text-sm font-bold text-gray-800">1 Despesa</h3>
                  <span className="text-sm font-semibold text-gray-700">Total: R$ 500,00</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Descrição{sortIcon}</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Tipo{sortIcon}</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Horário{sortIcon}</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Total{sortIcon}</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Pagamento{sortIcon}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {despesasMock.map((d, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{d.descricao}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">{d.tipo}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">{d.horario}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-red-600">{d.total}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">{d.pagamento}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar direita: Total recebido + Outros valores (Figma) */}
            <aside className="space-y-6 border-l-0 border-gray-200 xl:border-l xl:pl-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700">Total recebido:</h3>
                <ul className="mt-3 space-y-2">
                  {totalRecebidoMock.map((item, i) => (
                    <li key={i} className="flex justify-between text-sm text-gray-600">
                      <span>{item.label}</span>
                      <span>{item.valor}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700">Outros valores:</h3>
                <ul className="mt-3 space-y-2">
                  {outrosValoresMock.map((item, i) => (
                    <li key={i} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.label}</span>
                      <span className={item.negative ? "text-red-600" : "text-[var(--color-green)]"}>
                        {item.valor}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
