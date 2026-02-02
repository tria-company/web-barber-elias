/**
 * Button.tsx
 *
 * Botão reutilizável com variantes (primary, secondary, ghost).
 * Primary segue o design do Figma: fundo laranja/amarelo, texto branco.
 */

import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Estilo visual do botão */
  variant?: "primary" | "secondary" | "ghost";
  /** Largura total do container */
  fullWidth?: boolean;
  /** Conteúdo do botão */
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-[#F2A822] text-white hover:bg-[#e09810] focus:ring-[#F2A822] py-3 px-6",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400 py-3 px-6",
    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300 py-2 px-4",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
