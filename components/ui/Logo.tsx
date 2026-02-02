/**
 * Logo.tsx
 *
 * Exibe a logo principal da marca (imagem em public/logo.png).
 * Usado na tela de login, no header do dashboard e na sidebar.
 */

import React from "react";
import Image from "next/image";

export interface LogoProps {
  /** Tamanho: header (dashboard, menor), small (login), compact ou padrão */
  size?: "default" | "compact" | "small" | "header";
  /** Variante light: logo branca e sem saturação (para fundo laranja) */
  variant?: "default" | "light";
  /** Classe CSS adicional para o container */
  className?: string;
}

/** Largura em pixels por tamanho (altura proporcional via aspect ratio) */
const logoWidth = { header: 55, small: 80, compact: 160, default: 220 };

export function Logo({
  size = "default",
  variant = "default",
  className = "",
}: LogoProps) {
  const width = logoWidth[size];

  return (
    <div className={`relative flex flex-col items-start gap-0 ${className}`}>
      <Image
        src="/logo.png"
        alt="Seu Elias - Barber Tech"
        width={width}
        height={Math.round(width * 0.45)}
        className={`h-auto w-auto object-contain ${
          variant === "light"
            ? "grayscale brightness-0 invert"
            : ""
        }`}
        priority
      />
    </div>
  );
}
