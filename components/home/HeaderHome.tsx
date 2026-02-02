/**
 * HeaderHome.tsx
 *
 * Barra superior laranja da home (Figma node 23-2096).
 * Logo, navegação (Home, Agenda, Cadastro com dropdown, Estoque, Gerência, Caixa, Relatórios),
 * saudação + usuário + Ajuda.
 */

"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { IconChevronDown } from "@/components/ui/Icons";

const navItems = [
  { label: "Home", href: "/dashboard" },
  { label: "Agenda", href: "#" },
  {
    label: "Cadastro",
    href: "/dashboard/cadastro",
    dropdown: [
      { label: "Colaborador", href: "/dashboard/cadastro" },
      { label: "Serviço", href: "/dashboard/cadastro/servico" },
      { label: "Máquina", href: "/dashboard/cadastro/maquina" },
    ],
  },
  { label: "Estoque", href: "#", dropdown: true },
  { label: "Gerência", href: "/dashboard/gerencia", dropdown: true },
  { label: "Caixa", href: "/dashboard/caixa" },
  { label: "Relatórios", href: "/dashboard/relatorios" },
];

export function HeaderHome() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isCadastroActive =
    pathname === "/dashboard/cadastro" ||
    pathname.startsWith("/dashboard/cadastro/");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex w-full items-center justify-between gap-4 bg-[#F2A822] px-2 pt-6 pb-12 md:pt-10 md:pb-30 md:px-8">
      <div className="flex flex-wrap items-center gap-6 md:gap-8">
        <Link href="/dashboard" className="shrink-0">
          <Logo size="header" variant="light" />
        </Link>
        <nav className="flex flex-wrap items-center gap-1 md:gap-2" aria-label="Menu principal">
          {navItems.map((item) => {
            const hasDropdown = Array.isArray(item.dropdown) && item.dropdown.length > 0;
            const isOpen = openDropdown === item.label;
            const isActive =
              item.label === "Cadastro"
                ? isCadastroActive
                : pathname === item.href;

            if (hasDropdown) {
              return (
                <div key={item.label} className="relative" ref={item.label === "Cadastro" ? dropdownRef : undefined}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown(isOpen ? null : item.label)
                    }
                    className={`relative flex h-9 flex-col items-center justify-center rounded px-2 py-1.5 text-sm font-medium transition-colors hover:bg-black/10 ${
                      isActive ? "text-white" : "text-gray-900"
                    }`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-label={`${item.label}, menu`}
                  >
                    <span className="flex items-center gap-0.5">
                      {item.label}
                      <IconChevronDown
                        className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                    {isActive && (
                      <span
                        className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white"
                        aria-hidden
                      />
                    )}
                  </button>
                  {isOpen && item.dropdown && Array.isArray(item.dropdown) && (
                    <div
                      className="absolute left-0 top-full z-50 mt-1 min-w-[180px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
                      role="menu"
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                          className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-100 ${
                            pathname === sub.href
                              ? "bg-amber-50 font-medium text-amber-800"
                              : "text-gray-700"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex h-9 flex-col items-center justify-center rounded px-2 py-1.5 text-sm font-medium transition-colors hover:bg-black/10 ${
                  isActive ? "text-white" : "text-gray-900"
                }`}
              >
                <span className="flex items-center gap-0.5">
                  {item.label}
                  {item.dropdown === true && (
                    <IconChevronDown className="h-3 w-3" />
                  )}
                </span>
                {isActive && (
                  <span
                    className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white"
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex shrink-0 items-center gap-4">
        <span className="hidden text-sm font-medium text-gray-900 sm:inline">
          Bom dia, Luiz
        </span>
        <button
          type="button"
          className="flex items-center gap-1 rounded-full p-1 text-gray-900 hover:bg-black/10"
          aria-label="Perfil do usuário"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-gray-600">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </span>
          <IconChevronDown className="h-3 w-3" />
        </button>
        <span className="h-5 w-px bg-gray-400" aria-hidden />
        <Link
          href="#"
          className="text-sm font-medium text-gray-900 hover:underline"
        >
          Ajuda
        </Link>
      </div>
    </header>
  );
}
