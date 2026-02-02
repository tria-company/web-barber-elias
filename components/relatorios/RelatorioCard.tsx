/**
 * Card de relatório – Figma node 23-3052.
 * Ativo: fundo branco, ícone verde, seta verde. Breve: fundo cinza, ícone e texto cinza.
 * Ícone customizável por título (faturamento, produtividade, comissões, etc.).
 */

import React from "react";
import Link from "next/link";
import { IconArrowRight } from "@/components/ui/Icons";

export interface RelatorioCardProps {
  title: string;
  href?: string;
  /** Se true, estilo "Breve" (cinza, desabilitado). */
  breve?: boolean;
  /** Ícone do card (ex: IconCash, IconChartBar). */
  icon: React.ReactNode;
}

export function RelatorioCard({ title, href = "#", breve = false, icon }: RelatorioCardProps) {
  const content = (
    <>
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
          breve ? "bg-gray-200 text-gray-500" : "bg-[var(--color-green)] text-white"
        }`}
      >
        {icon}
      </span>
      <span className={`min-w-0 flex-1 font-medium ${breve ? "text-gray-500" : "text-gray-800"}`}>
        {title}
        {breve && " (Breve)"}
      </span>
      <span className={breve ? "text-gray-400" : "text-[var(--color-green)]"}>
        <IconArrowRight className="h-5 w-5" />
      </span>
    </>
  );

  const className = `flex items-center gap-4 rounded-xl border px-5 py-4 text-left transition-colors ${
    breve
      ? "cursor-default border-gray-200 bg-gray-100"
      : "border-gray-200 bg-white shadow-sm hover:border-[var(--color-green)] hover:bg-gray-50"
  }`;

  if (breve) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
