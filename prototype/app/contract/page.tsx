import Link from "next/link";
import { Button } from "@mantine/core";

export default function ContractPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900">
        Smlouva o pojištění (KZ – krátký závěr)
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        IPID – informace o produktu v souladu s EU IDD. Prototyp.
      </p>
      <div className="mt-8 space-y-6 rounded-lg border border-gray-200 bg-white p-6">
        <section>
          <h2 className="font-semibold text-gray-900">1. Typ produktu</h2>
          <p className="mt-1 text-gray-700">
            Pojištění odpovědnosti z provozu vozidla (povinné ručení) a
            havarijní pojištění vozidla.
          </p>
        </section>
        <section>
          <h2 className="font-semibold text-gray-900">2. Co je pojištěno</h2>
          <ul className="mt-1 list-inside list-disc text-gray-700">
            <li>Odpovědnost za škodu způsobenou provozem vozidla (MTPL)</li>
            <li>Havarijní pojištění vozidla (pokud zvoleno)</li>
            <li>Krytí v EU a v zemích ČKP</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-gray-900">3. Co není pojištěno</h2>
          <ul className="mt-1 list-inside list-disc text-gray-700">
            <li>Škody úmyslně způsobené</li>
            <li>Provoz pod vlivem alkoholu / drog</li>
            <li>Vyloučené podle všeobecných obchodních podmínek</li>
          </ul>
        </section>
        <section>
          <h2 className="font-semibold text-gray-900">4. Povinnosti klienta</h2>
          <p className="mt-1 text-gray-700">
            Pravdivé údaje, včasná platba pojistného, oznámení změn a
            nahrazení škody dle VOP.
          </p>
        </section>
        <section>
          <h2 className="font-semibold text-gray-900">5. Platba a doba trvání</h2>
          <p className="mt-1 text-gray-700">
            Pojistné dle nabídky. Smlouva na 1 rok s možností prodloužení.
            Zrušení dle VOP.
          </p>
        </section>
      </div>
      <div className="mt-8 flex gap-2">
        <Link href="/onboarding">
          <Button variant="subtle" color="dark">
            Zpět na přehled
          </Button>
        </Link>
        <Link href="/payment-processing">
          <Button color="green">Přejít k platbě</Button>
        </Link>
      </div>
    </div>
  );
}
