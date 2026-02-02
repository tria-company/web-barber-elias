/**
 * Página de Login – design Figma (APP-ELIAS, node 23-2070)
 *
 * Duas colunas: esquerda ~60% (formulário branco), direita ~40% (painel amarelo/laranja).
 * Copyright no canto inferior esquerdo. Em mobile, só a coluna do formulário.
 */

import React from "react";
import { AuthFormCard } from "@/components/layout/AuthFormCard";
import { PromoPanel } from "@/components/layout/PromoPanel";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Coluna esquerda: ~60% – formulário + copyright (Figma) */}
      <div className="relative flex-1 md:w-[60%]">
        <AuthFormCard>
          <LoginForm />
        </AuthFormCard>
      </div>

      {/* Coluna direita: ~40% – painel amarelo com logo-login de fundo (Figma) */}
      <aside className="hidden md:block md:w-[40%]">
        <PromoPanel />
      </aside>
    </div>
  );
}
