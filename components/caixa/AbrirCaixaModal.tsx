/**
 * AbrirCaixaModal.tsx
 *
 * Modal "Abrir caixa" – design Figma APP-ELIAS, node 23-2297.
 * Valor em dinheiro, descrição opcional, Cancelar e Confirmar.
 */

"use client";

import React, { useState } from "react";
import { IconChevronDown, IconInfo, IconX } from "@/components/ui/Icons";

export interface AbrirCaixaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: (valor: string, descricao: string) => void;
}

export function AbrirCaixaModal({
  isOpen,
  onClose,
  onConfirm,
}: AbrirCaixaModalProps) {
  const [valor, setValor] = useState("0,00");
  const [descricao, setDescricao] = useState("");

  const handleConfirm = () => {
    onConfirm?.(valor, descricao);
    onClose();
    setValor("0,00");
    setDescricao("");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop escurecido e levemente desfocado */}
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        aria-hidden
        onClick={onClose}
      />
      {/* Modal: alinhado à direita (Figma: ocupa metade direita) */}
      <div
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-lg flex-col bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="abrir-caixa-title"
      >
        {/* Botão fechar: canto superior esquerdo, circular, fundo roxo claro */}
        <button
          type="button"
          onClick={onClose}
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-violet-200 text-violet-800 hover:bg-violet-300"
          aria-label="Fechar"
        >
          <IconX />
        </button>

        <div className="flex flex-1 flex-col overflow-auto p-8 pt-16">
          {/* Cabeçalho: título + data com dropdown */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
            <h2 id="abrir-caixa-title" className="text-xl font-bold text-gray-800">
              Abrir caixa
            </h2>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-[#F2A822] hover:bg-gray-50"
            >
              20 de Junho 2021
              <IconChevronDown className="h-3 w-3" />
            </button>
          </div>

          {/* Banner informativo (azul claro + ícone info) */}
          <div className="mb-6 flex gap-3 rounded-lg bg-blue-50 px-4 py-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
              <IconInfo className="h-4 w-4" />
            </span>
            <p className="text-sm text-blue-900">
              O valor em dinheiro será utilizado para efetuar troco.
            </p>
          </div>

          {/* Valor em dinheiro */}
          <div className="mb-6">
            <label htmlFor="valor-dinheiro" className="mb-2 block text-sm font-medium text-gray-700">
              Valor em dinheiro
            </label>
            <div className="flex overflow-hidden rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-[#F2A822] focus-within:ring-offset-0">
              <span className="flex items-center bg-gray-50 px-4 text-sm font-medium text-gray-600">
                R$
              </span>
              <input
                id="valor-dinheiro"
                type="text"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                className="min-w-0 flex-1 border-0 py-3 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0"
                placeholder="0,00"
              />
            </div>
          </div>

          {/* Descrição (opcional) */}
          <div className="mb-8">
            <label htmlFor="descricao-caixa" className="mb-2 block text-sm font-medium text-gray-700">
              Descrição (Opcional)
            </label>
            <input
              id="descricao-caixa"
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder=""
              className="w-full rounded-lg border border-gray-300 py-3 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F2A822] focus:ring-offset-0"
            />
          </div>

          {/* Botões: Cancelar e Confirmar */}
          <div className="mt-auto flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="rounded-lg bg-[#F2A822] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#e09810]"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
