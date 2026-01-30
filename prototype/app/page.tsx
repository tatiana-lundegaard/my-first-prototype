"use client";

import Link from "next/link";
import { Button } from "@mantine/core";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">
        Pojištění vozidel – B2C prototyp
      </h1>
      <p className="mt-2 text-gray-600">
        Jednoduchý průvodce sjednáním povinného ručení. Inspirováno Lunde-poj a
        Generali.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/welcome">
          <Button color="green" size="md">
            Úvod a začít
          </Button>
        </Link>
        <Link href="/onboarding">
          <Button variant="light" color="green" size="md">
            Sjednat pojištění
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="subtle" color="dark" size="md">
            Přihlášení (demo)
          </Button>
        </Link>
      </div>
    </div>
  );
}
