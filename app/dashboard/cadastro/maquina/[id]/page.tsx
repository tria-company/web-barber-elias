/**
 * Tela Visualizar Máquina – placeholder.
 * Detalhe da máquina (conteúdo pode ser implementado conforme design).
 */

import React from "react";
import Link from "next/link";
import { HeaderHome } from "@/components/home/HeaderHome";
import { IconArrowLeft } from "@/components/ui/Icons";

export default async function MaquinaVisualizarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-[#F1F3F5]">
      <HeaderHome />

      <main className="relative z-10 mx-4 -mt-10 rounded-t-2xl bg-[#FFFFFF] shadow-lg md:-mt-14 md:mx-6 lg:mx-8">
        <div className="p-6 md:p-8">
          <Link
            href="/dashboard/cadastro/maquina"
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <IconArrowLeft className="h-5 w-5" />
            Voltar
          </Link>
          <h1 className="mb-2 text-2xl font-bold text-gray-900">Máquina</h1>
          <p className="text-gray-600">
            Detalhe da máquina (id: {id}). Esta tela será implementada conforme design.
          </p>
        </div>
      </main>
    </div>
  );
}
