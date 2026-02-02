/**
 * LoginFormEntrar.tsx
 *
 * Segunda tela de login (Figma node 23-2022): Empresa (pré-preenchida), toggle Telefone/E-mail,
 * campo telefone ou e-mail, senha, Lembrar-me, Esqueci minha senha, botão Entrar.
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { InputWithSuffix } from "@/components/ui/InputWithSuffix";
import { ToggleSegmented } from "@/components/ui/ToggleSegmented";
import { InputPassword } from "@/components/ui/InputPassword";
import { IconGlobe } from "@/components/ui/Icons";

type LoginMethod = "telefone" | "email";

export function LoginFormEntrar() {
  const router = useRouter();
  const [method, setMethod] = useState<LoginMethod>("telefone");
  const [empresa] = useState("seuelias");
  const [codigo, setCodigo] = useState("+55");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-4 text-left">
      <div className="flex justify-start">
        <Logo size="small" />
      </div>

      <div>
        <h1 className="text-xl font-semibold text-gray-900">Bem-vindo (a)</h1>
        <p className="mt-0.5 text-sm text-gray-600">
          Entre com sua conta Barber Tech
        </p>
      </div>

      {/* Empresa (pré-preenchida, ex: seuelias) */}
      <InputWithSuffix
        label="Empresa"
        suffix=".haircut.tech"
        placeholder="seuelias"
        value={empresa}
        onChange={() => {}}
        readOnly
      />

      {/* Toggle Telefone | E-mail */}
      <ToggleSegmented
        options={[
          { value: "telefone", label: "Telefone" },
          { value: "email", label: "E-mail" },
        ]}
        value={method}
        onChange={(v) => setMethod(v as LoginMethod)}
      />

      {method === "telefone" ? (
        <div className="grid grid-cols-[auto_1fr] gap-2">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-800">
              Código
            </label>
            <div className="flex items-center overflow-hidden rounded-lg border border-gray-300 bg-white py-2.5 pl-3 pr-2 focus-within:ring-2 focus-within:ring-[#F2A822]">
              <IconGlobe className="h-5 w-5 text-gray-500" />
              <select
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                className="border-0 bg-transparent py-0 pl-2 pr-6 text-gray-900 focus:outline-none focus:ring-0"
              >
                <option value="+55">+55</option>
              </select>
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-800">
              Telefone
            </label>
            <input
              type="tel"
              placeholder="(00) 00000-0000"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F2A822]"
            />
          </div>
        </div>
      ) : (
        <div>
          <label className="mb-1.5 block text-xs font-medium text-gray-800">
            E-mail
          </label>
          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white py-2.5 px-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F2A822]"
          />
        </div>
      )}

      <InputPassword
        label="Senha"
        placeholder="Digite uma senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      {/* Lembrar-me + Esqueci minha senha */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <label className="flex cursor-pointer items-center gap-1.5">
          <input
            type="checkbox"
            checked={lembrar}
            onChange={(e) => setLembrar(e.target.checked)}
            className="h-3.5 w-3.5 rounded border-gray-300 text-[#F2A822] focus:ring-[#F2A822]"
          />
          <span className="text-xs font-medium text-gray-800">Lembrar-me</span>
        </label>
        <Link
          href="#"
          className="text-xs text-blue-600 hover:underline"
        >
          Esqueci minha senha
        </Link>
      </div>

      <Button type="submit" fullWidth className="py-2.5 text-sm">
        Entrar
      </Button>
    </form>
  );
}
