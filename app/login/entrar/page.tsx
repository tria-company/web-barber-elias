/**
 * Página de Login – segunda tela (Figma APP-ELIAS, node 23-2022)
 *
 * Formulário completo: Empresa (pré-preenchida), Telefone/E-mail, Senha,
 * Lembrar-me, Esqueci minha senha, botão Entrar. Mesmo layout 60/40 com painel amarelo.
 */

import React from "react";
import { AuthFormCard } from "@/components/layout/AuthFormCard";
import { PromoPanel } from "@/components/layout/PromoPanel";
import { LoginFormEntrar } from "@/components/auth/LoginFormEntrar";

export default function LoginEntrarPage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="relative flex-1 md:w-[60%]">
        <AuthFormCard>
          <LoginFormEntrar />
        </AuthFormCard>
      </div>
      <aside className="hidden md:block md:w-[40%]">
        <PromoPanel />
      </aside>
    </div>
  );
}
