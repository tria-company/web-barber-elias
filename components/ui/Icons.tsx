/**
 * Ícones vetoriais (SVG) reutilizáveis. Sem emojis.
 */

import React from "react";

const iconClass = "shrink-0";

export function IconArrowLeft({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );
}

export function IconArrowRight({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

export function IconArrowUp({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  );
}

export function IconChevronDown({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function IconChevronUpDown({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
    </svg>
  );
}

export function IconCash({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

export function IconX({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

/** Ícone para código de país / globo (ex: seletor +55). */
export function IconGlobe({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M12 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

/** Ícone de informação (banner informativo). */
export function IconInfo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

/** Ícone percentual / venda (ex: Venda de produto). */
export function IconPercent({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a3 3 0 114.243-4.243m-4.243 0l2.121 2.121" />
    </svg>
  );
}

/** Ícone menos / despesa (ex: card Despesas). */
export function IconMinus({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
  );
}

/** Ícone usuário / funcionário (ex: Vale funcionário). */
export function IconUser({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

/** Ícone sacola / compra (ex: Compra de produto). */
export function IconShoppingBag({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  );
}

/** Ícone lupa / busca. */
export function IconSearch({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

/** Ícone usuário com mais / cadastrar. */
export function IconUserPlus({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
  );
}

/** Ícone mais / adicionar. */
export function IconPlus({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  );
}

/** Ícone lixeira / remover. */
export function IconTrash({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );
}

/** Ícone calendário / data. */
export function IconCalendar({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

/** Ícone gráfico de barras / produtividade / relatório. */
export function IconChartBar({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

/** Ícone grupo de usuários / clientes. */
export function IconUsers({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

/** Ícone usuário removido / ausente. */
export function IconUserMinus({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" />
    </svg>
  );
}

/** Ícone exportar / download. */
export function IconArrowDownTray({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  );
}

/** Ícone envelope / e-mail / reenviar. */
export function IconEnvelope({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

/** Ícone WhatsApp (chat). */
export function IconWhatsApp({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/** Ícone check / concluído. */
export function IconCheck({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={`${iconClass} ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}
