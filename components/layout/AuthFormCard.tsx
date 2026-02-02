/**
 * AuthFormCard.tsx
 *
 * Painel esquerdo da tela de login (fundo branco).
 * Encapsula logo, mensagem de boas-vindas, formulário e copyright.
 * Figma: copyright no canto inferior esquerdo da coluna.
 */

import React from "react";

export interface AuthFormCardProps {
  /** Conteúdo do card (formulário, logo, etc.) */
  children: React.ReactNode;
  /** Classe CSS adicional */
  className?: string;
}

export function AuthFormCard({ children, className = "" }: AuthFormCardProps) {
  return (
    <div
      className={`relative flex min-h-screen flex-col bg-white py-12 pl-16 pr-8 ${className}`}
    >
      {/* Conteúdo alinhado à esquerda e no topo (pl-16 = 4rem, igual à primeira tela) */}
      <div className="flex flex-1 flex-col items-start justify-start">
        <div className="w-full max-w-md">{children}</div>
      </div>
      {/* Copyright no fim da coluna, mesmo padding que o conteúdo acima */}
      <p className="mt-auto shrink-0 pt-6 text-left text-xs text-gray-400">
        © 2026. All Right Reserved.
      </p>
    </div>
  );
}
