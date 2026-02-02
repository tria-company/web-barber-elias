/**
 * Página inicial – redireciona para o login.
 * O dashboard (home) fica em /dashboard, após clicar em Entrar.
 */

import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/login");
}
