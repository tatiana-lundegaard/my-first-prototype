import Link from "next/link";
import { Button } from "@mantine/core";

export default function WelcomePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <p className="text-sm font-medium text-[#2d8a3e]">Hotovo za 3 minuty</p>
      <h1 className="mt-2 text-4xl font-bold text-gray-900">
        Pojištění vozidel, které prostě funguje
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Žádné složitosti. Férové ceny. Povinné ručení a havarijní pojištění.
      </p>
      <ul className="mt-6 grid gap-2 text-gray-700 sm:grid-cols-2">
        <li className="flex items-center gap-2">
          <span className="text-[#2d8a3e]">✓</span> Aktivní okamžitě
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[#2d8a3e]">✓</span> Krytí dle zákona
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[#2d8a3e]">✓</span> EU + ČKP
        </li>
        <li className="flex items-center gap-2">
          <span className="text-[#2d8a3e]">✓</span> Sjednání online
        </li>
      </ul>
      <div className="mt-10">
        <Link href="/onboarding">
          <Button color="green" size="lg">
            Začít online →
          </Button>
        </Link>
      </div>
      <section className="mt-16 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-semibold text-gray-900">
          Jednoduché. Rychlé. Hotové.
        </h2>
        <p className="mt-2 text-gray-600">
          Cenu zjistíte hned, údaje vyplníte v průvodci, pojištění je aktivní
          ihned po platbě.
        </p>
      </section>
    </div>
  );
}
