/**
 * Modal Visualizar Cadastro – 70% da tela, fundo desfocado (Figma 23-3720).
 * Painel à direita com conteúdo do perfil; backdrop com blur para ver a lista atrás.
 */

"use client";

import React from "react";
import { IconX } from "@/components/ui/Icons";
import { CadastroVisualizarContent } from "./CadastroVisualizarContent";

export interface CadastroVisualizarModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  nome: string;
  avaliacao?: string;
  servicos?: string;
  faltas?: string;
  ativo?: boolean;
}

export function CadastroVisualizarModal({
  isOpen,
  onClose,
  id,
  nome,
  avaliacao,
  servicos,
  faltas,
  ativo,
}: CadastroVisualizarModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop: desfoca o fundo, mantém a tela visível atrás */}
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        aria-hidden
        onClick={onClose}
      />
      {/* Painel: 70% da largura, alinhado à direita */}
      <div
        className="fixed inset-y-0 right-0 z-50 flex w-[70vw] max-w-4xl flex-col overflow-hidden bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cadastro-visualizar-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300"
          aria-label="Fechar"
        >
          <IconX />
        </button>

        <div className="flex-1 overflow-auto p-6 pt-16 md:p-8 md:pt-16">
          <CadastroVisualizarContent
            id={id}
            nome={nome}
            avaliacao={avaliacao}
            servicos={servicos}
            faltas={faltas}
            ativo={ativo}
            onVoltar={onClose}
          />
        </div>
      </div>
    </>
  );
}
