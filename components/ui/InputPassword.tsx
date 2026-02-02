/**
 * InputPassword.tsx
 *
 * Campo de senha com ícone de mostrar/ocultar (olho).
 */

"use client";

import React, { useState } from "react";

export interface InputPasswordProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "className"> {
  label: string;
  placeholder?: string;
  className?: string;
}

export function InputPassword({
  label,
  placeholder = "Digite uma senha",
  className = "",
  id,
  ...inputProps
}: InputPasswordProps) {
  const [show, setShow] = useState(false);
  const inputId = id ?? "input-senha";

  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={inputId}
        className="mb-1.5 block text-left text-xs font-medium text-gray-800"
      >
        {label}
      </label>
      <div className="flex items-center overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-[#F2A822] focus-within:ring-offset-0">
        <input
          id={inputId}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className="min-w-0 flex-1 border-0 py-2.5 pl-3 pr-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0"
          {...inputProps}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="shrink-0 px-3 py-2.5 text-gray-500 hover:text-gray-700"
          aria-label={show ? "Ocultar senha" : "Mostrar senha"}
        >
          {show ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
