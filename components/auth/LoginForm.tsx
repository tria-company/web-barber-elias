/**
 * LoginForm.tsx
 *
 * Formulário de entrada: logo, boas-vindas, campo Empresa (.haircut.tech) e botão Continuar.
 * Design conforme Figma (APP-ELIAS, node 23-2070). Sem redirecionamento – próximas telas virão depois.
 */

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { InputWithSuffix } from "@/components/ui/InputWithSuffix";

export function LoginForm() {
  const router = useRouter();
  const [empresa, setEmpresa] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/login/entrar");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-4 text-left">
      {/* Logo no topo, alinhada à esquerda e menor */}
      <div className="flex justify-start">
        <Logo size="small" />
      </div>

      {/* Título e subtítulo alinhados à esquerda (tamanhos reduzidos) */}
      <div>
        <h1 className="text-xl font-semibold text-gray-900">
          Bem-vindo (a)
        </h1>
        <p className="mt-0.5 text-sm text-gray-600">
          Entre com sua conta Barber Tech
        </p>
      </div>

      {/* Campo Empresa com sufixo .haircut.tech */}
      <InputWithSuffix
        label="Empresa"
        suffix=".haircut.tech"
        placeholder="Digite o nome da empresa"
        value={empresa}
        onChange={(e) => setEmpresa(e.target.value)}
      />

      {/* Botão Continuar (tamanho compacto) */}
      <Button type="submit" fullWidth className="w-full py-2.5 text-sm">
        Continuar
      </Button>
    </form>
  );
}
