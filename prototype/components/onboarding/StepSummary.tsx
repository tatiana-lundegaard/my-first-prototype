"use client";

import Link from "next/link";
import { Button } from "@mantine/core";
import type { OnboardingFormData } from "@/lib/types/onboarding";

interface Props {
  data: OnboardingFormData;
  onBack: () => void;
}

export function StepSummary({ data, onBack }: Props) {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <h3 className="font-semibold text-gray-900">Vozidlo</h3>
        <p className="mt-1 text-sm text-gray-600">
          {data.vehicle.registrationPlate} – {data.vehicle.brand} {data.vehicle.model}{" "}
          ({data.vehicle.year})
        </p>
      </div>
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <h3 className="font-semibold text-gray-900">Řidič</h3>
        <p className="mt-1 text-sm text-gray-600">
          {data.driver.firstName} {data.driver.lastName}
        </p>
        <p className="text-sm text-gray-600">{data.driver.email}</p>
      </div>
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <h3 className="font-semibold text-gray-900">Pojištění</h3>
        <p className="mt-1 text-sm text-gray-600">
          Povinné ručení: {data.coverage.liabilityOnly ? "Ano" : "Ne"}
        </p>
        <p className="text-sm text-gray-600">
          Havarijní: {data.coverage.comprehensive ? "Ano" : "Ne"}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button variant="subtle" color="dark" onClick={onBack}>
          Zpět
        </Button>
        <Link href="/contract">
          <Button color="green">Zobrazit smlouvu (KZ)</Button>
        </Link>
        <Link href="/payment-processing">
          <Button color="green" variant="light">
            Přejít k platbě
          </Button>
        </Link>
      </div>
    </div>
  );
}
