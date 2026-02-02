/**
 * ContasBancariasCard.tsx
 *
 * Card "Contas Bancárias" com lista de bancos e saldo (Figma home).
 */

import React from "react";

const contasMock = [
  { letra: "B", nome: "Banco do Brasil S.A" },
  { letra: "S", nome: "Banco Sicredi S.A" },
  { letra: "B", nome: "Banco Bradesco S.A" },
];

export function ContasBancariasCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-md overflow-hidden">
      <div className="bg-gray-200/80 px-4 py-2.5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600">
          Contas Bancárias
        </h3>
      </div>
      <div className="divide-y divide-gray-200">
        {contasMock.map((conta, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-emerald-400 text-sm font-bold text-white">
              {conta.letra}
            </span>
            <span className="text-sm font-medium text-gray-900">{conta.nome}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 px-4 py-3">
        <p className="text-sm font-semibold text-gray-900">R$ 2.156,00</p>
      </div>
    </div>
  );
}
