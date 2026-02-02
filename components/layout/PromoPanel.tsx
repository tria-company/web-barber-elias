/**
 * PromoPanel.tsx
 *
 * Painel direito da tela de login (fundo laranja).
 * Exibe logo de fundo (logo-login.png) como marca d'água, link "Voltar para site",
 * mensagem promocional. Design conforme Figma (APP-ELIAS, node 23-2070).
 */

import React from "react";
import Link from "next/link";
import { IconArrowLeft } from "@/components/ui/Icons";

export interface PromoPanelProps {
  /** Classe CSS adicional */
  className?: string;
}

export function PromoPanel({ className = "" }: PromoPanelProps) {
  return (
    <div
      className={`relative flex min-h-screen flex-col overflow-hidden bg-[#F2A822] p-8 md:p-12 ${className}`}
    >
      {/* Logo de fundo (public/logo-login.png): marca d'água “Seu Elias” bem clarinha – <img> para carregamento garantido em qualquer ambiente */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
        aria-hidden
      >
        <img
          src="/logo-login.png"
          alt=""
          width={700}
          height={600}
          className="max-h-full max-w-full object-contain opacity-[0.58]"
          style={{ minWidth: "75%", minHeight: "55%" }}
        />
      </div>

      {/* Navegação: Voltar para site – texto preto */}
      <div className="relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-black hover:underline"
        >
          <IconArrowLeft className="h-5 w-5" />
          <span>Voltar para site</span>
        </Link>
      </div>

      {/* Mensagem promocional centralizada verticalmente, texto alinhado à esquerda */}
      <div className="relative z-10 flex flex-1 flex-col items-start justify-center text-left">
        <h2 className="text-4xl font-bold leading-tight text-black md:text-5xl">
          Feito exclusivamente para você.
        </h2>
        <p className="mt-4 text-xl text-black/90">
          Rápido, intuitivo e dinâmico.
        </p>
      </div>
    </div>
  );
}
