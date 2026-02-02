/**
 * ToggleSegmented.tsx
 *
 * Controle de segmento com duas opções (ex: Telefone | E-mail).
 * Opção selecionada em fundo laranja; não selecionada em cinza claro.
 */

import React from "react";

export interface ToggleSegmentedProps {
  /** Opções: valor e rótulo */
  options: { value: string; label: string }[];
  /** Valor atual selecionado */
  value: string;
  /** Callback ao mudar seleção */
  onChange: (value: string) => void;
  /** Classe do container */
  className?: string;
}

export function ToggleSegmented({
  options,
  value,
  onChange,
  className = "",
}: ToggleSegmentedProps) {
  return (
    <div
      className={`flex overflow-hidden rounded-lg border border-gray-300 bg-gray-100 ${className}`}
      role="tablist"
      aria-label="Método de login"
    >
      {options.map((opt, i) => {
        const isSelected = value === opt.value;
        const isFirst = i === 0;
        const isLast = i === options.length - 1;
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => onChange(opt.value)}
            className={`flex-1 py-2.5 px-3 text-sm font-medium transition-colors ${
              isSelected
                ? "bg-[#F2A822] text-gray-900"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            } ${isFirst ? "rounded-l-lg" : ""} ${isLast ? "rounded-r-lg" : ""}`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
