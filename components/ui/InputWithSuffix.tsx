/**
 * InputWithSuffix.tsx
 *
 * Campo de entrada com sufixo fixo à direita (ex: ".haircut.tech").
 * Usado no login para o nome da empresa + domínio.
 */

import React from "react";

export interface InputWithSuffixProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
  /** Rótulo exibido acima do campo */
  label: string;
  /** Texto fixo exibido à direita do input (sufixo) */
  suffix: string;
  /** Mensagem quando o campo está vazio */
  placeholder?: string;
  /** Classe do container */
  className?: string;
}

export function InputWithSuffix({
  label,
  suffix,
  placeholder = "",
  className = "",
  id,
  ...inputProps
}: InputWithSuffixProps) {
  const inputId = id ?? `input-${label.replace(/\s/g, "-").toLowerCase()}`;

  return (
    <div className={`w-full ${className}`}>
      {/* Label semibold alinhada à esquerda */}
      <label
        htmlFor={inputId}
        className="mb-1.5 block text-left text-xs font-medium text-gray-800"
      >
        {label}
      </label>
      <div className="flex items-center overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[#F2A822] focus-within:ring-offset-0">
        <input
          id={inputId}
          type="text"
          placeholder={placeholder}
          className="min-w-0 flex-1 border-0 py-2.5 pl-3 pr-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0"
          {...inputProps}
        />
        <span className="shrink-0 bg-gray-100 px-3 py-2.5 text-sm text-gray-600">{suffix}</span>
      </div>
    </div>
  );
}
