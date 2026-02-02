/**
 * ChatCard.tsx
 *
 * Card "Fale conosco" com ícone chat.png e link para chat online (conforme imagem de referência).
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@/components/ui/Icons";

export function ChatCard() {
  return (
    <div className="flex min-h-[200px] flex-col rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-md md:min-h-[240px] md:py-8">
      <div className="flex items-start gap-4">
        <div className="relative h-12 w-12 shrink-0">
          <Image
            src="/chat.png"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Fale conosco. É grátis</p>
          <Link
            href="#"
            className="mt-2 inline-flex items-center gap-1.5 text-base font-bold text-gray-900 hover:underline"
          >
            Chat online
            <IconArrowRight className="h-5 w-5 text-[var(--color-green)]" />
          </Link>
        </div>
      </div>
      <p className="mt-auto pt-8 text-sm text-gray-500 md:pt-12">
        Ficaremos feliz em ajudar
      </p>
    </div>
  );
}
