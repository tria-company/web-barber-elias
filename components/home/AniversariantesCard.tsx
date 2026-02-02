/**
 * AniversariantesCard.tsx
 *
 * Card "Aniversariantes do dia" com lista de nomes e link "Alterar mensagem".
 */

import React from "react";
import Link from "next/link";

const aniversariantesMock = [
  "Maria Silva",
  "João Santos",
  "Ana Oliveira",
  "Pedro Costa",
];

export function AniversariantesCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-md overflow-hidden">
      <div className="border-b border-gray-200 px-4 py-3">
        <h3 className="text-sm font-medium text-gray-700">Aniversariantes do dia</h3>
        <Link href="#" className="mt-1 inline-block text-xs font-medium text-[#F2A822] hover:underline">
          Alterar mensagem
        </Link>
      </div>
      <div className="divide-y divide-gray-200">
        {aniversariantesMock.map((nome, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-300 text-sm font-medium text-gray-600">
              {nome.charAt(0)}
            </span>
            <span className="text-sm font-medium text-gray-900">{nome}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
