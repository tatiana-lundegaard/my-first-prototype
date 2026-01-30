import Link from "next/link";
import { Button } from "@mantine/core";

export default function DemoPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900">Demo průvodce</h1>
      <p className="mt-2 text-gray-600">
        Rychlý přehled hlavního flow: úvod → sjednání → smlouva → platba.
      </p>
      <ol className="mt-8 list-inside list-decimal space-y-2 text-gray-700">
        <li>
          <Link href="/welcome" className="text-[#2d8a3e] hover:underline">
            Úvod (welcome)
          </Link>
        </li>
        <li>
          <Link href="/onboarding" className="text-[#2d8a3e] hover:underline">
            Sjednání – multi-step formulář
          </Link>
        </li>
        <li>
          <Link href="/contract" className="text-[#2d8a3e] hover:underline">
            Smlouva (KZ / IPID)
          </Link>
        </li>
        <li>
          <Link href="/payment-processing" className="text-[#2d8a3e] hover:underline">
            Platba
          </Link>
        </li>
        <li>
          <Link href="/login" className="text-[#2d8a3e] hover:underline">
            Přihlášení (demo: heslo „demo“)
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="text-[#2d8a3e] hover:underline">
            Dashboard (po přihlášení)
          </Link>
        </li>
      </ol>
      <div className="mt-8">
        <Link href="/">
          <Button variant="subtle" color="dark">
            Zpět na úvod
          </Button>
        </Link>
      </div>
    </div>
  );
}
