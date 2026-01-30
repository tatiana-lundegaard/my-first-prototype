"use client";

import Link from "next/link";
import { RequireAuth } from "@/components/RequireAuth";
import { Button } from "@mantine/core";

function DashboardContent() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Přehled vašeho pojištění a dalších kroků.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link href="/contract">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-[#2d8a3e] hover:shadow">
            <h2 className="font-semibold text-gray-900">Smlouva (KZ)</h2>
            <p className="mt-1 text-sm text-gray-600">
              Zobrazit smlouvu v lehkém formátu
            </p>
          </div>
        </Link>
        <Link href="/payment-processing">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-[#2d8a3e] hover:shadow">
            <h2 className="font-semibold text-gray-900">Platba</h2>
            <p className="mt-1 text-sm text-gray-600">
              Přejít k platbě
            </p>
          </div>
        </Link>
        <Link href="/onboarding">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-[#2d8a3e] hover:shadow">
            <h2 className="font-semibold text-gray-900">Sjednat nové</h2>
            <p className="mt-1 text-sm text-gray-600">
              Začít nové sjednání
            </p>
          </div>
        </Link>
      </div>
      <div className="mt-8">
        <Link href="/contract">
          <Button color="green">Zobrazit smlouvu</Button>
        </Link>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <RequireAuth>
      <DashboardContent />
    </RequireAuth>
  );
}
