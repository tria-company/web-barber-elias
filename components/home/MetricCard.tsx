/**
 * MetricCard.tsx
 *
 * Card de métrica do dashboard: título, valor, subtítulo, opcional % e barra de progresso.
 */

import React from "react";
import { IconArrowUp } from "@/components/ui/Icons";

export interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  /** Ex: "10%" em verde com seta para cima */
  change?: string;
  /** 0–100 para barra de progresso (opcional) */
  progress?: number;
  className?: string;
}

export function MetricCard({
  title,
  value,
  subtitle,
  change,
  progress,
  className = "",
}: MetricCardProps) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white p-5 shadow-md ${className}`}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        {change && (
          <span className="flex shrink-0 items-center gap-0.5 text-xs font-medium text-[var(--color-green)]">
            {change}
            <IconArrowUp className="h-3.5 w-3.5" />
          </span>
        )}
      </div>
      <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
      <p className="mt-0.5 text-xs text-gray-500">{subtitle}</p>
      {progress != null && (
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-[var(--color-green)] transition-all"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      )}
    </div>
  );
}
